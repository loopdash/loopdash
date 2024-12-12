import sitemap from "@quasibit/eleventy-plugin-sitemap";
import { minify as htmlmin } from "html-minifier";
import { inspect } from "util";
import eleventyImg from "@11ty/eleventy-img";
import dotenv from "dotenv";
import { getVersion } from "./src/utils/getVersion.js";

// Load environment variables
dotenv.config();

export default function (eleventyConfig) {
  // Add version to global data
  eleventyConfig.addGlobalData("siteVersion", getVersion());

  // Image shortcode
  eleventyConfig.addNunjucksAsyncShortcode(
    "image",
    async (src, alt, widths = [1024, 1024, null], formats = ["png", "webp", "jpeg"], className = "") => {
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
        sizes: "(max-width: 600px) 100vw, 600px",
        loading: "lazy",
        decoding: "async",
        class: className,
      };

      return eleventyImg.generateHTML(metadata, imageAttributes);
    }
  );

  eleventyConfig.addNunjucksAsyncShortcode("svgIcon", async (src) => {
    let metadata = await eleventyImg(src, {
      formats: ["svg"],
      dryRun: true,
    });
    return metadata.svg[0].buffer.toString();
  });

  // Environment variables filter
  eleventyConfig.addFilter("env", (key) => process.env[key]);

  // Debug filter
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  // Limit filter
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

  // Add global data for `proposalAccessGranted`
  eleventyConfig.addGlobalData("proposalAccessGranted", (data) => {
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
          if (req.method === 'GET') {
            res.statusCode = 401;
            res.setHeader('Content-Type', 'text/html');
            res.end(`
              <html>
                <head>
                  <link rel="stylesheet" href="../../css/normalize.css"/>
                  <link rel="stylesheet" href="../../css/base.css"/>
                  <script src="../../javascript/scripts.js" defer></script>
                </head>
                <body>
                  <main>
                    <div class="container-sm mx-auto">
                      <div class="password-wrapper">
                        <form method="POST" class="form-group">
                          <label class="form-label mb-2" for="password">Password</label>
                          <input class="form-input" type="password" id="password" name="password" />
                          <p class="error" aria-live="polite">
                          </p>
                          <button type="submit" class="button button-sm">View</button>
                        </form>
                      </div>
                    </div>
                  </main>
                </body>
              </html>
            `);
            return;
          }

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
              } else {
                res.statusCode = 401;
                res.end('Invalid password');
              }
            });
            return;
          }
        }

        next();
      },
    ],
  });


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
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });

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