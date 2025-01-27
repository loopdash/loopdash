import sitemap from "@quasibit/eleventy-plugin-sitemap";
import { minify as htmlmin } from "html-minifier";
import { inspect } from "util";
import eleventyImg from "@11ty/eleventy-img";
import dotenv from "dotenv";
import { getVersion } from "./src/utils/getVersion.js";
import nunjucks from "nunjucks";

nunjucks.configure('views', {
  autoescape: true,
});

// Load environment variables
dotenv.config();

export default function (eleventyConfig) {

  // Add sitemap
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://loopdash.com",
    },
  });

  // Add version to global data
  eleventyConfig.addGlobalData("siteVersion", getVersion());

  // Image shortcode
  eleventyConfig.addNunjucksAsyncShortcode(
    "image",
    async (src, alt, widths = [512, 1024, null], formats = ["png", "webp", "jpeg", "jpg"], className = "") => {
      if (!alt) {
        throw new Error(`Missing \`alt\` attribute for image: ${src}`);
      }

      let metadata = await eleventyImg(src, {
        widths: widths,
        formats: formats,
        outputDir: "./_site/img",
      });

      let imageAttributes = {
        alt,
        sizes: "(max-width: 600px) 100vw, 50vw",
        loading: "lazy",
        decoding: "async",
        class: className,
      };

      return eleventyImg.generateHTML(metadata, imageAttributes);
    }
  );

  // {% svgIcon "./src/icons/logo.svg", "icon-class" %}
  eleventyConfig.addNunjucksAsyncShortcode("svgIcon", async (src, className = "") => {
    let metadata = await eleventyImg(src, {
      formats: ["svg"],
      dryRun: true,
    });

    // Add the class to the <svg> tag
    return metadata.svg[0].buffer
      .toString()
      .replace("<svg", `<svg class="${className}"`);
  });

  eleventyConfig.addNunjucksFilter('renderNested', function (str, context) {
    const nunjucksEnvironment = new nunjucks.Environment();
    return nunjucksEnvironment.renderString(str, context);
  });

  // Environment variables filter
  eleventyConfig.addFilter("env", (key) => process.env[key]);

  // Debug filter
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  // Limit filter
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

  // Add global data for `proposalAccessGranted`
  eleventyConfig.addGlobalData("proposalFunnelAccessGranted", (data) => {
    return data?.req?.proposalAccessGranted || false;
  });

  // Middleware for password protection
  eleventyConfig.setServerOptions({
  middleware: [
    (req, res, next) => {
      const cookies = parseCookies(req.headers?.cookie || '');
      const password = process.env.PROPOSAL_PASSWORD || 'defaultpassword';

      // Check if the cookie indicates access
      const accessGranted = cookies['proposal_access_granted'] === 'true';
      req.proposalAccessGranted = accessGranted;

      // Attach the value to res.locals for use in templates
      res.locals = res.locals || {};
      res.locals.proposalAccessGranted = accessGranted;

      // Protect `/proposals` routes
      if (req.url.startsWith('/proposals') && !accessGranted) {
        if (req.method === 'GET' || req.method === 'POST') {
          let errorMessage = '';

          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });

            req.on('end', () => {
              const params = new URLSearchParams(body);
              if (params.get('password') === password) {
                res.setHeader('Set-Cookie', 'proposal_access_granted=true; Path=/; HttpOnly');
                res.writeHead(302, { Location: req.url });
                res.end();
                return;
              } else {
                errorMessage = 'Invalid password. Please try again.';
                renderForm(res, errorMessage);
              }
            });
            return;
          }

          renderForm(res, errorMessage);
          return;
        }
      }

      next();
    },
  ],
});

// Helper function to render the password form
function renderForm(res, errorMessage) {
  res.statusCode = 401;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
        <link rel="stylesheet" href="../../css/normalize.css"/>
        <link rel="stylesheet" href="../../css/base.css"/>
        <script src="../../javascript/scripts.js" defer></script>
      </head>
      <body>
        <main>
          <div class="container-sm mx-auto">
            <div class="password-wrapper">
              <h1 class="text-5 text-weight-500 mb-6">View your proposal</h1>
              <form method="POST" class="form">
                <div class="form-group">
                  <label class="form-label" for="password">Password</label>
                  <input class="form-input" type="text" id="password" name="password" />
                  ${errorMessage ? `<p class="error" aria-live="polite">${errorMessage}</p>` : ''}
                  <button type="submit" class="button button-sm button-secondary">View</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </body>
    </html>
  `);
}

  // HTML minification
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlmin(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }
    return content;
  });

  // Passthrough copy
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });
  eleventyConfig.addPassthroughCopy("src/img/icons/");
  eleventyConfig.addPassthroughCopy("src/img/passthrough/");
  eleventyConfig.addPassthroughCopy("src/img/favicons/");
  eleventyConfig.addPassthroughCopy("src/javascript/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site",
    },
    passthroughFileCopy: true,
  };
}

function parseCookies(cookieString) {
  return cookieString
    ? Object.fromEntries(
        cookieString.split(';').map(cookie => {
          const [key, value] = cookie.trim().split('=');
          return [key, value];
        })
      )
    : {};
}
