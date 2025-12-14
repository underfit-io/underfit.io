import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import frontMatter from 'front-matter';

const postsDir = path.join(process.cwd(), 'posts');
const outputDir = path.join(process.cwd(), 'blog');
const templatePath = path.join(process.cwd(), 'index.html'); // We'll use a simplified version of this or a new template

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// HTML Template Function
function getHtml(title, content, activeLink = 'blog') {
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title} - underfit.io</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <nav class="nav">
      <a href="/" class="nav-link ${activeLink === 'home' ? 'active' : ''}">Home</a>
      <a href="/blog/" class="nav-link ${activeLink === 'blog' ? 'active' : ''}">Blog</a>
      <a href="/about.html" class="nav-link ${activeLink === 'about' ? 'active' : ''}">About</a>
      <a href="/contact.html" class="nav-link ${activeLink === 'contact' ? 'active' : ''}">Contact</a>
    </nav>
    <div class="page-container">
      <div class="content">
        ${content}
      </div>
    </div>
    <script type="module" src="/main.js"></script>
  </body>
</html>`;
}

// Read all posts
const posts = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));
const postData = [];

posts.forEach(file => {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const { attributes, body } = frontMatter(content);
    const htmlContent = marked(body);
    const slug = file.replace('.md', '');

    // Save individual post
    const postHtml = getHtml(attributes.title, `
    <h1 class="page-title">${attributes.title}</h1>
    <p class="post-date">${new Date(attributes.date).toLocaleDateString()}</p>
    ${htmlContent}
    <br>
    <a href="/blog/" class="link">← Back to Blog</a>
  `);

    fs.writeFileSync(path.join(outputDir, `${slug}.html`), postHtml);

    postData.push({
        slug,
        title: attributes.title,
        date: attributes.date,
        description: attributes.description
    });
});

// Sort posts by date
postData.sort((a, b) => new Date(b.date) - new Date(a.date));

// Generate Index Page
const indexList = postData.map(post => `
  <div class="post-preview">
    <h2><a href="/blog/${post.slug}.html" class="link">${post.title}</a></h2>
    <p class="post-date">${new Date(post.date).toLocaleDateString()}</p>
    <p>${post.description}</p>
  </div>
`).join('');

const indexHtml = getHtml('Blog', `
  <h1 class="page-title">Blog</h1>
  ${indexList}
`);

fs.writeFileSync(path.join(outputDir, 'index.html'), indexHtml);

console.log(`Generated ${posts.length} blog posts.`);
