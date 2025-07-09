# Complete HTML Tags Reference Guide

## 1. Self-Closing Tags (Void Elements)
These tags **do not have a closing tag** and are used alone. They are called "void elements" because they cannot contain any content.

### `<area>`
**Purpose:** Defines a clickable area inside an image map
**Usage:** Used with `<map>` and `<img>` elements for interactive images
```html
<img src="planets.jpg" alt="Planets" usemap="#planetmap">
<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun">
  <area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury">
</map>
```

### `<base>`
**Purpose:** Sets the base URL for all relative URLs in a document
**Usage:** Must be placed in the `<head>` section
```html
<head>
  <base href="https://www.example.com/images/">
</head>
<body>
  <img src="logo.png" alt="Logo"> <!-- Becomes https://www.example.com/images/logo.png -->
</body>
```

### `<br>`
**Purpose:** Inserts a line break
**Usage:** Forces text to start on a new line
```html
<p>This is the first line.<br>
This is the second line.</p>
```

### `<col>`
**Purpose:** Specifies column properties for table columns within a `<colgroup>`
**Usage:** Defines styling for table columns
```html
<table>
  <colgroup>
    <col style="background-color: yellow">
    <col style="background-color: red">
  </colgroup>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

### `<embed>`
**Purpose:** Embeds external content (plugins, media files, etc.)
**Usage:** Used for embedding external applications or interactive content
```html
<embed src="video.mp4" type="video/mp4" width="400" height="300">
<embed src="flash-game.swf" type="application/x-shockwave-flash" width="500" height="400">
```

### `<hr>`
**Purpose:** Inserts a horizontal rule (divider line)
**Usage:** Creates a thematic break in content
```html
<h2>Chapter 1</h2>
<p>Content of chapter 1...</p>
<hr>
<h2>Chapter 2</h2>
<p>Content of chapter 2...</p>
```

### `<img>`
**Purpose:** Embeds an image
**Usage:** Displays images in web pages
```html
<img src="photo.jpg" alt="A beautiful sunset" width="300" height="200">
<img src="logo.png" alt="Company Logo">
```

### `<input>`
**Purpose:** Defines an input field for user data
**Usage:** Creates form controls
```html
<input type="text" name="username" placeholder="Enter username">
<input type="password" name="password">
<input type="email" name="email" required>
<input type="submit" value="Submit">
<input type="checkbox" name="agree" id="agree">
```

### `<link>`
**Purpose:** Links external resources (CSS, fonts, icons)
**Usage:** Must be placed in the `<head>` section
```html
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
</head>
```

### `<meta>`
**Purpose:** Provides metadata about the HTML document
**Usage:** Specifies character encoding, viewport, description, etc.
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="This is a sample webpage">
  <meta name="keywords" content="HTML, CSS, JavaScript">
</head>
```

### `<source>`
**Purpose:** Defines multiple media resources for `<video>` or `<audio>` elements
**Usage:** Provides fallback options for different media formats
```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>

<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
</audio>
```

### `<track>`
**Purpose:** Adds text tracks for video/audio elements (subtitles, captions)
**Usage:** Provides accessibility features for media
```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" label="English">
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish">
</video>
```

### `<wbr>`
**Purpose:** Suggests a line break opportunity
**Usage:** Hints where text can break in long words or URLs
```html
<p>This is a very long URL: https://www.example.com/very<wbr>/long<wbr>/path<wbr>/to<wbr>/resource</p>
```

---

## 2. Tags with Opening and Closing (Standard Elements)
These tags must have both opening (`<tag>`) and closing (`</tag>`) parts and can contain content.

### `<a>`
**Purpose:** Defines a hyperlink
**Usage:** Creates links to other pages, files, or locations
```html
<a href="https://www.example.com">Visit Example.com</a>
<a href="mailto:contact@example.com">Send Email</a>
<a href="#section1">Go to Section 1</a>
<a href="document.pdf" download>Download PDF</a>
```

### `<article>`
**Purpose:** Represents self-contained content
**Usage:** Used for blog posts, news articles, forum posts
```html
<article>
  <h2>Article Title</h2>
  <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
  <p>This is the article content...</p>
</article>
```

### `<aside>`
**Purpose:** Content aside from the main content
**Usage:** Sidebars, pull quotes, advertisements
```html
<main>
  <p>Main article content...</p>
</main>
<aside>
  <h3>Related Links</h3>
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
  </ul>
</aside>
```

### `<audio>`
**Purpose:** Embeds sound content
**Usage:** Plays audio files
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>

<audio autoplay loop>
  <source src="background-music.mp3" type="audio/mpeg">
</audio>
```

### `<b>`
**Purpose:** Bold text (stylistic, not semantic)
**Usage:** Makes text bold without implying importance
```html
<p>The <b>bold text</b> stands out visually.</p>
<p>Product name: <b>SuperWidget Pro</b></p>
```

### `<body>`
**Purpose:** Contains the main content of the HTML document
**Usage:** Wraps all visible content
```html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is the main content.</p>
</body>
</html>
```

### `<button>`
**Purpose:** Creates a clickable button
**Usage:** Interactive elements for forms or JavaScript actions
```html
<button type="submit">Submit Form</button>
<button type="button" onclick="alert('Hello!')">Click Me</button>
<button disabled>Disabled Button</button>
```

### `<canvas>`
**Purpose:** Container for graphics drawn with JavaScript
**Usage:** Creates drawings, charts, animations
```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;">
  Your browser does not support the canvas element.
</canvas>

<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#FF0000';
ctx.fillRect(0, 0, 150, 75);
</script>
```

### `<caption>`
**Purpose:** Provides a table caption
**Usage:** Describes the content of a table
```html
<table>
  <caption>Monthly Sales Report</caption>
  <tr>
    <th>Month</th>
    <th>Sales</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$10,000</td>
  </tr>
</table>
```

### `<cite>`
**Purpose:** Represents a citation or reference
**Usage:** References to books, articles, websites
```html
<p>According to <cite>The HTML Specification</cite>, this is correct.</p>
<blockquote>
  <p>"The best way to learn is by doing."</p>
  <footer>— <cite>Anonymous</cite></footer>
</blockquote>
```

### `<code>`
**Purpose:** Represents a code snippet
**Usage:** Displays code inline or in blocks
```html
<p>Use the <code>console.log()</code> function to debug.</p>
<pre><code>
function greet(name) {
  return "Hello, " + name + "!";
}
</code></pre>
```

### `<div>`
**Purpose:** Generic container element
**Usage:** Groups elements for styling or scripting
```html
<div class="container">
  <div class="header">
    <h1>Title</h1>
  </div>
  <div class="content">
    <p>Content goes here...</p>
  </div>
</div>
```

### `<dl>`, `<dt>`, `<dd>`
**Purpose:** Description list, term, and description
**Usage:** Creates definition lists
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
  
  <dt>JavaScript</dt>
  <dd>Programming language for web interactivity</dd>
</dl>
```

### `<em>`
**Purpose:** Emphasized text (semantic emphasis)
**Usage:** Indicates stress emphasis
```html
<p>I <em>really</em> need to finish this project.</p>
<p>You should <em>not</em> ignore this warning.</p>
```

### `<footer>`
**Purpose:** Footer for a document or section
**Usage:** Contains closing information
```html
<footer>
  <p>&copy; 2024 Company Name. All rights reserved.</p>
  <nav>
    <a href="/privacy">Privacy Policy</a>
    <a href="/terms">Terms of Service</a>
  </nav>
</footer>
```

### `<form>`
**Purpose:** Creates an HTML form for user input
**Usage:** Collects and submits user data
```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Submit</button>
</form>
```

### `<h1>` to `<h6>`
**Purpose:** Heading elements (largest to smallest)
**Usage:** Creates hierarchical headings
```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Sub-subsection Title</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```

### `<head>`
**Purpose:** Container for metadata
**Usage:** Contains document information not displayed on page
```html
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
</head>
```

### `<header>`
**Purpose:** Header of a section or page
**Usage:** Introductory content or navigation
```html
<header>
  <h1>Website Title</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

### `<html>`
**Purpose:** Root element of an HTML document
**Usage:** Wraps all content on the page
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

### `<i>`
**Purpose:** Italic text (stylistic, not semantic)
**Usage:** Alternative voice or mood
```html
<p>The <i>Titanic</i> was a famous ship.</p>
<p>She whispered, <i>"This is our secret."</i></p>
```

### `<label>`
**Purpose:** Label for form input elements
**Usage:** Improves accessibility and usability
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">

<label>
  <input type="checkbox" name="subscribe">
  Subscribe to newsletter
</label>
```

### `<li>`
**Purpose:** List item
**Usage:** Items in ordered or unordered lists
```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

<ol>
  <li>Step one</li>
  <li>Step two</li>
  <li>Step three</li>
</ol>
```

### `<main>`
**Purpose:** Main content of the document
**Usage:** Should contain the primary content
```html
<main>
  <h1>Article Title</h1>
  <article>
    <p>This is the main content of the page...</p>
  </article>
</main>
```

### `<nav>`
**Purpose:** Navigation links
**Usage:** Contains navigation menus
```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

### `<noscript>`
**Purpose:** Alternative content when JavaScript is disabled
**Usage:** Fallback for non-JavaScript users
```html
<script>
  document.write("JavaScript is enabled!");
</script>
<noscript>
  <p>JavaScript is disabled. Please enable it for full functionality.</p>
</noscript>
```

### `<ol>`
**Purpose:** Ordered (numbered) list
**Usage:** Creates numbered lists
```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

<ol type="A">
  <li>Option A</li>
  <li>Option B</li>
  <li>Option C</li>
</ol>
```

### `<option>`
**Purpose:** Option in a dropdown list
**Usage:** Used within `<select>` elements
```html
<select name="country">
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk" selected>United Kingdom</option>
  <option value="au">Australia</option>
</select>
```

### `<p>`
**Purpose:** Paragraph
**Usage:** Groups sentences into paragraphs
```html
<p>This is the first paragraph of text.</p>
<p>This is the second paragraph. It contains multiple sentences. Each paragraph is separated by default margins.</p>
```

### `<pre>`
**Purpose:** Preformatted text
**Usage:** Preserves whitespace and line breaks
```html
<pre>
    This text preserves
        spaces and
            line breaks
    exactly as written.
</pre>

<pre><code>
function example() {
    console.log("Code with preserved formatting");
}
</code></pre>
```

### `<q>`
**Purpose:** Short inline quotation
**Usage:** Quotes that don't require paragraph breaks
```html
<p>She said, <q>I'll be there at 3 PM</q>, and then left.</p>
<p>The motto is <q cite="https://example.com">Quality first</q>.</p>
```

### `<script>`
**Purpose:** Embeds or references JavaScript code
**Usage:** Adds interactivity to web pages
```html
<script>
  alert("Hello, World!");
</script>

<script src="external-script.js"></script>

<script>
  function greet(name) {
    return "Hello, " + name + "!";
  }
</script>
```

### `<section>`
**Purpose:** Section of a document
**Usage:** Groups related content thematically
```html
<section>
  <h2>About Us</h2>
  <p>Information about the company...</p>
</section>

<section>
  <h2>Our Services</h2>
  <p>Details about services offered...</p>
</section>
```

### `<select>`
**Purpose:** Creates a dropdown list
**Usage:** Allows users to choose from options
```html
<select name="size">
  <option value="small">Small</option>
  <option value="medium" selected>Medium</option>
  <option value="large">Large</option>
</select>

<select name="colors" multiple>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</select>
```

### `<span>`
**Purpose:** Inline container
**Usage:** Groups inline elements for styling
```html
<p>The price is <span class="highlight">$29.99</span> today only.</p>
<p>Error: <span style="color: red;">Invalid input</span></p>
```

### `<strong>`
**Purpose:** Strong importance (semantic emphasis)
**Usage:** Indicates important, urgent, or serious content
```html
<p><strong>Warning:</strong> This action cannot be undone.</p>
<p>The deadline is <strong>tomorrow</strong> at midnight.</p>
```

### `<style>`
**Purpose:** Contains CSS styling
**Usage:** Defines styles for the document
```html
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }
  .highlight {
    background-color: yellow;
    font-weight: bold;
  }
</style>
```

### `<table>`, `<tbody>`, `<td>`, `<tfoot>`, `<th>`, `<thead>`, `<tr>`
**Purpose:** Table elements
**Usage:** Creates structured data tables
```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>30</td>
      <td>Los Angeles</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total: 2 people</td>
    </tr>
  </tfoot>
</table>
```

### `<textarea>`
**Purpose:** Multi-line text input
**Usage:** Large text input areas
```html
<textarea name="message" rows="4" cols="50" placeholder="Enter your message here...">
Default text can go here
</textarea>

<textarea name="comments" required maxlength="500"></textarea>
```

### `<title>`
**Purpose:** Document title
**Usage:** Sets the page title shown in browser tabs
```html
<head>
  <title>My Website - Home Page</title>
</head>
```

### `<ul>`
**Purpose:** Unordered (bulleted) list
**Usage:** Creates bulleted lists
```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

<ul style="list-style-type: square;">
  <li>Square bullets</li>
  <li>Another item</li>
</ul>
```

### `<video>`
**Purpose:** Embeds video content
**Usage:** Displays video files
```html
<video controls width="400" height="300">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>

<video autoplay muted loop>
  <source src="background-video.mp4" type="video/mp4">
</video>
```

---

## 3. Special Notes on Deprecated or Context-Specific Tags

### Legacy HTML Practices
In older HTML versions (before HTML5), some tags could be left unclosed:
- `<li>` items in lists
- `<dt>` and `<dd>` in definition lists  
- `<option>` in select lists
- `<colgroup>` in tables

### Modern HTML5 Best Practices
**Always close your tags properly:**
```html
<!-- Good -->
<li>Item 1</li>
<li>Item 2</li>

<!-- Avoid (even though browsers may handle it) -->
<li>Item 1
<li>Item 2
```

### Self-Closing Tag Syntax
In XHTML and XML, self-closing tags use a slash before the closing bracket:
```html
<!-- HTML5 (both are valid) -->
<br>
<img src="photo.jpg" alt="Photo">

<!-- XHTML/XML style -->
<br />
<img src="photo.jpg" alt="Photo" />
```

---

## Summary
- **Void elements** (like `<img>`, `<br>`, `<input>`) cannot have content and don't need closing tags
- **Container elements** (like `<div>`, `<p>`, `<h1>`) can have content and require closing tags
- **Always close your tags** in modern HTML5 for better code quality and consistency
- Use **semantic elements** (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) for better accessibility and SEO
- **Validate your HTML** to ensure proper structure and compatibility
