// blog-generator.cjs
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require('openai');

dotenv.config();

// === CONFIGURATION === //
const CHATGPT_API_KEY = process.env.OPENAI_API_KEY;
const BLOG_DIR = path.join(__dirname, 'src/blogs');
const IMG_DIR = path.join(__dirname, 'src/img/blogs');

const title = 'Comprehensive Guide to Nonprofit RFPs - How to Source the Right Partners';
const slug = 'comprehensive-nonprofit-rfp-guide';
const date = new Date().toISOString().split('T')[0];

const abstractPrompts = [
  'A flatlay image of a strategic planning desk—soft light, legal pads, fountain pen, printed RFP draft, and a single branch in a ceramic vase. Calm and structured, in gallery style. Soft ivory and tan palette. --ar 128:67',
  'Abstract, layered UI elements—cards, buttons, interface fragments—floating over a soft mint and clay gradient. Composition evokes scattered leaves. Calm, elegant. --ar 128:67',
  'Abstract leaf-like forms swirling gently against a minimalist cream and green background. Clean, calm, dynamic—suited for modern branding. --ar 128:67',
  'Abstract cursor-like symbols drifting over a muted green-cream background. Quiet, natural flow meets digital structure. --ar 128:67',
  'Tall reeds at golden hour, glowing softly at the edge of a still lake. Styled like a fashion photo. Amber and blue tones. --ar 128:67',
  'Dreamlike organic blur of shells, seeds, and wings in dusk pink and ivory. Fine pencil textures, hand-painted details. --ar 128:67',
  'Muted pink grid overlaying a foggy mountain landscape. Modern and abstract with warm, quiet tones. --ar 128:67',
  'Monochrome wave-like paper folds casting soft shadows on a gradient background. High-end, textural, calm. --ar 128:67',
  'Gentle, swirling mist over smooth marble with subtle gold veins. Luxurious and atmospheric. --ar 128:67',
  'Sunset-colored pixels dissolving into clouds. Blurry, abstract digital dreamscape. --ar 128:67',
  'Floating shapes that resemble petals and code snippets in a muted lavender environment. Serene and technical. --ar 128:67',
  'Minimal cream canvas with ink-like spill resembling interface layouts. Conceptual and soft. --ar 128:67',
  'Muted sky with diagonal paper slats creating rhythm and movement. Quiet, gallery-style. --ar 128:67',
  'Overlay of watercolor UI elements—buttons, inputs—drifting across a textured gray canvas. --ar 128:67',
  'Delicate particles suspended in glass with a faint rainbow prism cast. Ethereal, clean. --ar 128:67',
  'Single white feather in a sea of digital distortion. Balance of nature and tech. --ar 128:67',
  'Linework patterns folding like origami against beige linen texture. Minimalist tactile design. --ar 128:67',
  'Abstract composition of floating windows and hover states, rendered in soft linen and sky blue. --ar 128:67',
  'Neutral-toned 3D shapes—rounded cubes and cylinders—floating gently in space. Weightless and orderly. --ar 128:67',
  'Marble and moss texture mashup. Contrasting surfaces create balance and texture. --ar 128:67',
  'Glowing thread-like forms suspended in motion against a soft gray gradient. Artistic and thoughtful. --ar 128:67',
  'Rippled water shadows over paper grid. Light, ephemeral, mathematical. --ar 128:67',
  'Faint watercolor UI wireframes fading into the background. Sketchbook-meets-gallery. --ar 128:67',
  'Cropped canvas showing a pencil sketch over layers of interface shapes. In-progress and elegant. --ar 128:67',
  'Thin lines and soft brush textures forming layered UI icons on ivory. --ar 128:67',
  'Gently waving field of grass with abstract filter overlay. Calm and organic. --ar 128:67',
  'Paper collage of transparent boxes and soft shadows on a tan backdrop. Dreamy and quiet. --ar 128:67',
  'UI fragments in pastel blues and greens scattered across a fogged glass surface. --ar 128:67',
  'Digital swirls layered over botanicals. Quiet synthesis of nature and interface. --ar 128:67',
  'Minimal layout blueprints over canvas paper. Conceptual architecture of a page. --ar 128:67'
];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const imagePrompt = getRandomElement(abstractPrompts);
const imgName = `${slug}-${Date.now()}.png`;

const openai = new OpenAIApi(new Configuration({ apiKey: CHATGPT_API_KEY }));

// === IMAGE GENERATION (DALL·E) === //
async function generateImage(prompt, filename) {
  const response = await openai.createImage({
    prompt,
    n: 1,
    size: '1024x1024',
    response_format: 'url'
  });

  const imageUrl = response.data.data[0].url;
  const image = await fetch(imageUrl).then((res) => res.buffer());

  if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR, { recursive: true });

  const imgPath = path.join(IMG_DIR, filename);
  fs.writeFileSync(imgPath, image);
  console.log(`🖼️ Saved image to ${imgPath}`);
}

// === BLOG GENERATION === //
async function generateBlog(promptText, imgPath, date) {
  const frontmatter = `---
layout: single-blog.njk
title: ${title}
meta:
   title: ${title}
   description: A strategic, high-level guide to the nonprofit RFP process, covering goals, evaluation criteria, vendor sourcing, and best practices for choosing the right consultant or web agency.
   image: ./src/img/blogs/${imgPath}
   alt: ${imagePrompt}
sitemap:
  changefreq: weekly
  priority: 0.5
tags:
   - blogs
   - nonprofit
   - rfp
   - strategy
   - vendor evaluation
   - partnerships
date: ${date}
url: /blog/${slug}
---

`;

  const res = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a clear, strategic nonprofit copywriter.' },
      { role: 'user', content: `Write a nonprofit-focused blog post titled "${title}" in a calm, high-end tone. No metadata or frontmatter needed. Start after the separator.` },
    ],
  });
  return frontmatter + res.data.choices[0].message.content;
}

// === SAVE MARKDOWN === //
function saveBlogFile(filename, content) {
  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });

  const filePath = path.join(BLOG_DIR, filename);
  fs.writeFileSync(filePath, content);
  console.log(`✅ Blog post saved to ${filePath}`);
}

// === MAIN === //
(async () => {
  const markdownFilename = `${slug}.md`;

  await generateImage(imagePrompt, imgName);

  const content = await generateBlog(title, imgName, date);

  saveBlogFile(markdownFilename, content);
})();
