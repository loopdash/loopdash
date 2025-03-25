import sitemap from "@quasibit/eleventy-plugin-sitemap";
import { minify as htmlmin } from "html-minifier";
import { inspect } from "util";
import eleventyImg from "@11ty/eleventy-img";
import dotenv from "dotenv";
import { getVersion } from "./src/utils/getVersion.js";
import nunjucks from "nunjucks";
import { minify as terserMinify } from "terser";
import fs from "fs";
import path from "path";
import { glob } from "glob";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

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

  // Minify JavaScript files **before** Eleventy builds
  eleventyConfig.on("beforeBuild", async () => {
    console.log("🔧 Minifying JavaScript files...");
    
    const files = glob.sync("src/javascript/**/*.js"); // Find all JS files in src/javascript/

    for (const file of files) {
      const content = fs.readFileSync(file, "utf8");
      try {
        const minified = await terserMinify(content, {
          compress: true,
          mangle: true,
        });

        if (minified.code) {
          const outputFilePath = file.replace(/^src\//, "_site/").replace(/\.js$/, ".min.js");
          fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });
          fs.writeFileSync(outputFilePath, minified.code);
          console.log(`✅ Minified: ${file} → ${outputFilePath}`);
        }
      } catch (err) {
        console.error(`❌ Error minifying ${file}:`, err);
      }
    }
  });

  // Passthrough Copy - Ensures JavaScript files are in _site/javascript/
  eleventyConfig.addPassthroughCopy({ "src/javascript": "javascript" });

  // Image shortcode
  eleventyConfig.addNunjucksAsyncShortcode(
    "image",
    async (src, alt, widths = [512, 1024, null], className = "") => {
      if (!alt && !/\.(mp4)$/i.test(src)) {
        throw new Error(`Missing \`alt\` attribute for image: ${src}`);
      }

      // If the file is an MP4, return a video tag
      if (/\.(mp4)$/i.test(src)) {
        console.warn(`Rendering video instead of processing: ${src}`);
        return `<video controls class="${className}">
                  <source src="${src}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>`;
      }

      // If the image is a GIF, return a simple <img> tag without processing
      if (/\.(gif)$/i.test(src)) {
        console.warn(`Skipping image processing for GIF: ${src}`);
        return `<img src="${src}" alt="${alt}" loading="lazy" decoding="async" class="${className}">`;
      }

      let metadata = await eleventyImg(src, {
        widths: widths,
        formats: ["avif", "webp", "png", "jpeg", "jpg"],
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

  eleventyConfig.addFilter("sortByDate", (projects) => {
    return projects
      .filter(project => project.data.page.date) // Ensure there's a date
      .sort((a, b) => new Date(b.data.page.date) - new Date(a.data.page.date)); // Descending order
  });

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
        <link rel="stylesheet" href="../../css/base.css"/>
        <script src="../../javascript/scripts.min.js" defer></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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


  eleventyConfig.addCollection("proposals", function(collectionApi) {
    let proposals = collectionApi.getFilteredByTag("proposals");
    return proposals;
  });

  eleventyConfig.addFilter("isPastDate", function(date) {
    return new Date(date) <= new Date();
  });

  eleventyConfig.addCollection("blogs", function (collectionApi) {
    return collectionApi.getFilteredByTag("blogs").filter(item =>
      new Date(item.data.date) <= new Date()
    );
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss", // or "rss", "json"
    outputPath: "/rss.xml",
    collection: {
      name: "blogs", // iterate over `collections.posts`
      limit: 3,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "Blog Title",
      subtitle: "This is a longer description about your blog.",
      base: "https://loopdash.com/",
      author: {
        name: "Gary Bunofsky",
        email: "gary@loopdash.com",
      }
    }
  });

  // Passthrough copy
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });
  eleventyConfig.addPassthroughCopy("src/img/icons/");
  eleventyConfig.addPassthroughCopy({ "src/javascript": "javascript" });
  eleventyConfig.addPassthroughCopy("src/img/favicons/");
  eleventyConfig.addPassthroughCopy("src/img/passthrough/");
  eleventyConfig.addPassthroughCopy("src/video/");

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