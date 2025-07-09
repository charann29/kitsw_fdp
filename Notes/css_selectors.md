# CSS Classes, IDs & Essential Properties Guide

## Table of Contents
1. [CSS Selectors & Attributes](#css-selectors--attributes)
2. [Box Model Properties](#box-model-properties)
3. [Typography Properties](#typography-properties)
4. [Background & Color Properties](#background--color-properties)
5. [Display & Positioning](#display--positioning)
6. [Flexbox Layout](#flexbox-layout)
7. [CSS Grid Layout](#css-grid-layout)
8. [Responsive Design Properties](#responsive-design-properties)
9. [Common Utility Properties](#common-utility-properties)

---

## CSS Selectors & Attributes

### CSS Classes
- Use `.className` selector
- Can be applied to multiple elements
- Lower specificity than IDs
- Best for styling groups of elements

```html
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card special">Card 3</div>

<style>
.card {
    padding: 20px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
}

.special {
    background-color: #f0f8ff;
    border-color: #007bff;
}
</style>
```

### CSS IDs
- Use `#idName` selector
- Should be unique per page
- Higher specificity than classes
- Best for targeting specific elements

```html
<header id="main-header">Main Header</header>
<nav id="navigation">Navigation</nav>

<style>
#main-header {
    background-color: #333;
    color: white;
    padding: 20px;
}

#navigation {
    background-color: #f8f9fa;
    padding: 15px;
}
</style>
```

### Data Attributes
- Custom attributes starting with `data-`
- Used for storing extra information
- Accessible via CSS and JavaScript
- Great for state management and styling

```html
<div class="toggle-button" data-state="off" data-color="blue">
    Toggle Me
</div>
<div class="progress-bar" data-progress="75">
    <div class="progress-fill"></div>
</div>
<div class="tooltip" data-tooltip="This is helpful information">
    Hover for tooltip
</div>

<style>
/* Styling based on data attributes */
.toggle-button[data-state="off"] {
    background-color: #dc3545;
    color: white;
}

.toggle-button[data-state="on"] {
    background-color: #28a745;
    color: white;
}

.toggle-button[data-color="blue"] {
    border: 2px solid #007bff;
}

/* Progress bar using data attributes */
.progress-bar {
    width: 300px;
    height: 20px;
    background-color: #e9ecef;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    height: 100%;
    background-color: #007bff;
    width: attr(data-progress); /* CSS limitation - use JS for dynamic */
    transition: width 0.3s ease;
}

.progress-bar[data-progress="25"] .progress-fill { width: 25%; }
.progress-bar[data-progress="50"] .progress-fill { width: 50%; }
.progress-bar[data-progress="75"] .progress-fill { width: 75%; }
.progress-bar[data-progress="100"] .progress-fill { width: 100%; }

/* Tooltip using data attributes */
.tooltip {
    position: relative;
    cursor: help;
    padding: 10px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
}

.tooltip:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 1000;
}
</style>
```

### Attribute Selectors
- Target elements based on their attributes
- Very powerful for form styling and dynamic content

```html
<form class="form-example">
    <input type="text" placeholder="Required field" required>
    <input type="email" placeholder="Email" disabled>
    <input type="password" placeholder="Password">
    <input type="submit" value="Submit">
    
    <div class="file-upload">
        <input type="file" accept=".pdf,.doc,.docx">
        <label>Upload Document</label>
    </div>
    
    <a href="https://example.com" target="_blank">External Link</a>
    <a href="/internal-page">Internal Link</a>
    <a href="mailto:email@example.com">Email Link</a>
</form>

<style>
/* Attribute exists */
input[required] {
    border-left: 4px solid #dc3545;
}

/* Attribute value exact match */
input[type="email"] {
    background-image: url('email-icon.svg');
    background-repeat: no-repeat;
    background-position: right 10px center;
    padding-right: 40px;
}

/* Attribute value contains */
input[type*="pass"] {  /* matches "password" */
    font-family: monospace;
}

/* Attribute value starts with */
a[href^="https://"] {
    color: #28a745;
}
a[href^="https://"]:after {
    content: " 🔗";
}

/* Attribute value ends with */
a[href$=".pdf"] {
    color: #dc3545;
}
a[href$=".pdf"]:after {
    content: " 📄";
}

/* Attribute value contains word */
input[accept~="pdf"] {
    border: 2px dashed #dc3545;
}

/* Language attribute */
[lang="en"] {
    font-family: Arial, sans-serif;
}

/* Disabled state */
input[disabled] {
    background-color: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
}

/* File input styling */
input[type="file"] {
    display: none;
}

.file-upload label {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.file-upload label:hover {
    background-color: #0056b3;
}
</style>
```

### Pseudo-Classes
- Target elements based on their state or position
- Don't require additional HTML attributes

```html
<nav class="navigation">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<div class="content-list">
    <div class="item">First Item</div>
    <div class="item">Second Item</div>
    <div class="item">Third Item</div>
    <div class="item">Fourth Item</div>
    <div class="item">Last Item</div>
</div>

<form class="validation-form">
    <input type="email" placeholder="Enter email" required>
    <input type="text" placeholder="Optional field">
    <button type="submit">Submit</button>
</form>

<style>
/* Link states */
a:link { color: #007bff; }
a:visited { color: #6f42c1; }
a:hover { 
    color: #0056b3; 
    text-decoration: underline;
}
a:active { color: #dc3545; }

/* Position-based pseudo-classes */
.item:first-child {
    background-color: #d4edda;
    font-weight: bold;
}

.item:last-child {
    background-color: #f8d7da;
    font-weight: bold;
}

.item:nth-child(odd) {
    background-color: #f8f9fa;
}

.item:nth-child(even) {
    background-color: #e9ecef;
}

.item:nth-child(3n) {  /* Every third item */
    border-left: 4px solid #007bff;
}

/* Form states */
input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

input:valid {
    border-color: #28a745;
}

input:invalid {
    border-color: #dc3545;
}

input:required {
    background-color: #fff3cd;
}

input:optional {
    background-color: #f8f9fa;
}

/* Button states */
button:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
}

button:active {
    transform: translateY(0);
}

button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

/* Empty state */
.content-list:empty::before {
    content: "No items to display";
    color: #6c757d;
    font-style: italic;
}
</style>
```

### Pseudo-Elements
- Create virtual elements that don't exist in HTML
- Useful for decorative content and effects

```html
<div class="quote-container">
    <blockquote class="fancy-quote">
        This is a beautifully styled quote with custom decorations.
    </blockquote>
</div>

<div class="counter-list">
    <div class="counter-item">First item</div>
    <div class="counter-item">Second item</div>
    <div class="counter-item">Third item</div>
</div>

<p class="drop-cap">
    This paragraph has a beautiful drop cap at the beginning. 
    The first letter is styled differently from the rest of the text.
</p>

<style>
/* Before and after pseudo-elements */
.fancy-quote {
    position: relative;
    padding: 30px;
    background-color: #f8f9fa;
    border-left: 4px solid #007bff;
    margin: 20px 0;
    font-style: italic;
}

.fancy-quote::before {
    content: """;
    font-size: 4rem;
    color: #007bff;
    position: absolute;
    top: -10px;
    left: 10px;
    line-height: 1;
}

.fancy-quote::after {
    content: """;
    font-size: 4rem;
    color: #007bff;
    position: absolute;
    bottom: -30px;
    right: 10px;
    line-height: 1;
}

/* Counter using pseudo-elements */
.counter-list {
    counter-reset: item-counter;
}

.counter-item {
    counter-increment: item-counter;
    padding: 10px;
    margin: 5px 0;
    background-color: #e9ecef;
    position: relative;
    padding-left: 60px;
}

.counter-item::before {
    content: counter(item-counter);
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #007bff;
    color: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
}

/* Drop cap effect */
.drop-cap::first-letter {
    font-size: 4rem;
    font-weight: bold;
    color: #007bff;
    float: left;
    line-height: 1;
    margin: 0 8px 0 0;
}

/* Selection styling */
::selection {
    background-color: #007bff;
    color: white;
}

/* Placeholder styling */
::placeholder {
    color: #6c757d;
    font-style: italic;
}
</style>
```

### Combinators & Relationship Selectors
- Define relationships between elements
- Essential for complex layouts and targeting

```html
<article class="blog-post">
    <header>
        <h1>Blog Post Title</h1>
        <p class="meta">Published on <time>2025-01-01</time></p>
    </header>
    
    <div class="content">
        <p>First paragraph of content.</p>
        <p>Second paragraph with <strong>bold text</strong>.</p>
        <ul>
            <li>First list item</li>
            <li>Second list item</li>
            <li>Third list item</li>
        </ul>
        <p>Final paragraph.</p>
    </div>
    
    <aside class="sidebar">
        <h3>Related Articles</h3>
        <div class="related-item">Article 1</div>
        <div class="related-item">Article 2</div>
    </aside>
</article>

<style>
/* Descendant combinator (space) - all descendants */
.blog-post p {
    line-height: 1.6;
    margin-bottom: 1rem;
}

.blog-post strong {
    color: #007bff;
    font-weight: 700;
}

/* Child combinator (>) - direct children only */
.content > p {
    font-size: 18px;  /* Only direct paragraph children, not nested ones */
}

.blog-post > header {
    border-bottom: 2px solid #e9ecef;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
}

/* Adjacent sibling combinator (+) - immediately following sibling */
h1 + .meta {
    color: #6c757d;
    font-size: 14px;
    margin-top: -10px;
}

ul + p {
    font-weight: bold;  /* Paragraph immediately after a list */
}

/* General sibling combinator (~) - any following sibling */
h3 ~ .related-item {
    padding: 10px;
    margin: 5px 0;
    background-color: #f8f9fa;
    border-radius: 4px;
}

/* Multiple selectors (comma) - group selectors */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Georgia', serif;
    color: #333;
    margin-top: 0;
}

/* Combining different selectors */
.blog-post header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.content > ul > li:first-child {
    font-weight: bold;
    color: #007bff;
}

/* Complex combinations */
.blog-post .content p:not(:last-child) {
    margin-bottom: 1.5rem;
}
</style>
```

### Universal and Advanced Selectors

```html
<div class="demo-container">
    <div class="section" lang="en">
        <h2>English Section</h2>
        <p>Content in English</p>
    </div>
    
    <div class="section" lang="es">
        <h2>Sección en Español</h2>
        <p>Contenido en español</p>
    </div>
    
    <form class="advanced-form">
        <div class="form-group">
            <input type="text" name="username" required>
            <label>Username</label>
        </div>
        
        <div class="form-group">
            <input type="email" name="email">
            <label>Email (optional)</label>
        </div>
        
        <div class="checkbox-group">
            <input type="checkbox" id="terms" checked>
            <label for="terms">I agree to terms</label>
        </div>
    </form>
    
    <div class="widget" data-theme="dark" data-size="large">
        Dark Large Widget
    </div>
</div>

<style>
/* Universal selector (*) - selects everything */
* {
    box-sizing: border-box;
}

/* Reset margins for all elements in demo */
.demo-container * {
    margin: 0;
    padding: 0;
}

/* :not() pseudo-class - exclude elements */
.section:not([lang="es"]) {
    border-left: 4px solid #007bff;
}

input:not([type="checkbox"]) {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

/* :is() pseudo-class - matches any of the selectors in the list */
:is(h1, h2, h3) {
    font-family: 'Arial', sans-serif;
    color: #333;
}

:is(.section, .widget) {
    margin: 20px 0;
    padding: 15px;
    border-radius: 8px;
}

/* :where() pseudo-class - like :is() but with 0 specificity */
:where(input, textarea, select) {
    font-family: inherit;
    font-size: inherit;
}

/* :has() pseudo-class - parent selector (newer browsers) */
.form-group:has(input:required) label::after {
    content: " *";
    color: #dc3545;
}

.form-group:has(input:focus) {
    background-color: #f8f9fa;
    border-radius: 4px;
    padding: 5px;
}

/* Complex attribute combinations */
.widget[data-theme="dark"][data-size="large"] {
    background-color: #333;
    color: white;
    font-size: 1.2rem;
    padding: 30px;
}

/* Case-insensitive attribute matching */
input[name="USERNAME" i] {  /* matches "username", "USERNAME", "Username" */
    text-transform: lowercase;
}

/* Language-based styling */
[lang="es"] {
    font-style: italic;
}

[lang="en"] {
    font-family: 'Times New Roman', serif;
}

/* Checked state styling */
input[type="checkbox"]:checked + label {
    color: #28a745;
    font-weight: bold;
}

/* Root pseudo-class for CSS custom properties */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
}

/* Target pseudo-class (for anchor links) */
.section:target {
    background-color: #fff3cd;
    border: 2px solid #ffc107;
}
</style>
```

### Complete Selector Reference

```css
/* BASIC SELECTORS */
element          /* Type selector - all <p> elements */
.class           /* Class selector - all elements with class="class" */
#id              /* ID selector - element with id="id" */
*                /* Universal selector - all elements */

/* ATTRIBUTE SELECTORS */
[attr]           /* Has attribute */
[attr="value"]   /* Attribute equals value */
[attr~="value"]  /* Attribute contains value as whole word */
[attr|="value"]  /* Attribute starts with value or value- */
[attr^="value"]  /* Attribute starts with value */
[attr$="value"]  /* Attribute ends with value */
[attr*="value"]  /* Attribute contains value anywhere */
[attr="value" i] /* Case-insensitive matching */

/* COMBINATORS */
A B              /* Descendant - B inside A */
A > B            /* Child - B direct child of A */
A + B            /* Adjacent sibling - B immediately after A */
A ~ B            /* General sibling - B after A (same parent) */

/* PSEUDO-CLASSES - STATE */
:hover           /* Mouse over */
:focus           /* Has focus */
:active          /* Being activated */
:visited         /* Visited link */
:link            /* Unvisited link */
:target          /* Target of URL fragment */

/* PSEUDO-CLASSES - FORM */
:checked         /* Checked input */
:disabled        /* Disabled element */
:enabled         /* Enabled element */
:required        /* Required input */
:optional        /* Optional input */
:valid           /* Valid input */
:invalid         /* Invalid input */
:in-range        /* Value in range */
:out-of-range    /* Value out of range */

/* PSEUDO-CLASSES - STRUCTURAL */
:first-child     /* First child */
:last-child      /* Last child */
:only-child      /* Only child */
:nth-child(n)    /* nth child */
:nth-last-child(n) /* nth from end */
:first-of-type   /* First of element type */
:last-of-type    /* Last of element type */
:only-of-type    /* Only of element type */
:nth-of-type(n)  /* nth of element type */
:empty           /* No children or text */
:root            /* Document root */

/* PSEUDO-CLASSES - LOGICAL */
:not(selector)   /* Not matching selector */
:is(sel1, sel2)  /* Matches any of the selectors */
:where(sel1, sel2) /* Like :is() but 0 specificity */
:has(selector)   /* Contains matching descendant */

/* PSEUDO-ELEMENTS */
::before         /* Before element content */
::after          /* After element content */
::first-line     /* First line of text */
::first-letter   /* First letter */
::selection      /* Selected text */
::placeholder    /* Placeholder text */
::marker         /* List item marker */
::backdrop       /* Dialog backdrop */

/* ADVANCED PATTERNS */
:nth-child(odd)     /* 1st, 3rd, 5th... */
:nth-child(even)    /* 2nd, 4th, 6th... */
:nth-child(3n)      /* Every 3rd element */
:nth-child(3n+1)    /* 1st, 4th, 7th... */
:nth-child(-n+3)    /* First 3 elements */
```

---

## Box Model Properties

### Margin, Padding, Border

```html
<div class="box-example">Content goes here</div>

<style>
.box-example {
    /* Margin - outside spacing */
    margin: 20px;                    /* All sides */
    margin: 10px 20px;              /* Top/bottom, Left/right */
    margin: 10px 15px 20px 25px;    /* Top, Right, Bottom, Left */
    
    /* Padding - inside spacing */
    padding: 15px;
    padding-top: 10px;
    padding-bottom: 20px;
    
    /* Border */
    border: 2px solid #333;
    border-radius: 8px;
    
    /* Width and Height */
    width: 300px;
    height: 200px;
    max-width: 100%;
    min-height: 150px;
    
    /* Box sizing */
    box-sizing: border-box; /* Include padding and border in width/height */
}
</style>
```

---

## Typography Properties

```html
<div class="typography-example">
    <h1 class="main-title">Main Heading</h1>
    <p class="body-text">This is a paragraph with custom styling.</p>
    <span class="highlight">Highlighted text</span>
</div>

<style>
.main-title {
    font-family: 'Arial', sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
    color: #2c3e50;
    text-align: center;
    line-height: 1.2;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.body-text {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    text-align: justify;
    font-weight: 400;
}

.highlight {
    background-color: yellow;
    padding: 2px 4px;
    border-radius: 3px;
    font-weight: bold;
}
</style>
```

---

## Background & Color Properties

```html
<div class="bg-examples">
    <div class="solid-bg">Solid Background</div>
    <div class="gradient-bg">Gradient Background</div>
    <div class="image-bg">Background Image</div>
</div>

<style>
.solid-bg {
    background-color: #3498db;
    color: white;
    padding: 20px;
    margin-bottom: 10px;
}

.gradient-bg {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    color: white;
    padding: 20px;
    margin-bottom: 10px;
}

.image-bg {
    background-image: url('pattern.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    padding: 40px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
}
</style>
```

---

## Display & Positioning

### Display Property

```html
<div class="display-examples">
    <div class="block-element">Block Element</div>
    <span class="inline-element">Inline</span>
    <span class="inline-element">Elements</span>
    <div class="inline-block-element">Inline-Block</div>
    <div class="inline-block-element">Elements</div>
</div>

<style>
.block-element {
    display: block;
    background-color: #e74c3c;
    padding: 10px;
    margin: 5px 0;
}

.inline-element {
    display: inline;
    background-color: #f39c12;
    padding: 5px;
    margin: 5px;
}

.inline-block-element {
    display: inline-block;
    background-color: #27ae60;
    padding: 10px;
    margin: 5px;
    width: 120px;
}
</style>
```

### Positioning

```html
<div class="position-container">
    <div class="relative-parent">
        Relative Parent
        <div class="absolute-child">Absolute Child</div>
    </div>
    <div class="fixed-element">Fixed Element</div>
    <div class="sticky-element">Sticky Element</div>
</div>

<style>
.position-container {
    height: 300px;
    border: 2px solid #ddd;
    overflow-y: scroll;
}

.relative-parent {
    position: relative;
    background-color: #ecf0f1;
    padding: 20px;
    margin: 20px;
}

.absolute-child {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #e74c3c;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
}

.fixed-element {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #3498db;
    color: white;
    padding: 10px;
    border-radius: 50%;
    z-index: 1000;
}

.sticky-element {
    position: sticky;
    top: 0;
    background-color: #f39c12;
    padding: 10px;
    margin: 10px 0;
}
</style>
```

---

## Flexbox Layout

### Basic Flexbox

```html
<div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
</div>

<style>
.flex-container {
    display: flex;
    
    /* Main axis alignment */
    justify-content: space-between;  /* flex-start, center, flex-end, space-around, space-evenly */
    
    /* Cross axis alignment */
    align-items: center;            /* flex-start, flex-end, center, stretch, baseline */
    
    /* Direction */
    flex-direction: row;            /* row, column, row-reverse, column-reverse */
    
    /* Wrap */
    flex-wrap: wrap;               /* nowrap, wrap, wrap-reverse */
    
    /* Gap */
    gap: 20px;                     /* Space between items */
    
    background-color: #f8f9fa;
    padding: 20px;
    min-height: 200px;
}

.flex-item {
    background-color: #007bff;
    color: white;
    padding: 20px;
    border-radius: 4px;
    
    /* Flex properties */
    flex: 1;                       /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
    /* Or individually: */
    /* flex-grow: 1; */
    /* flex-shrink: 0; */
    /* flex-basis: 200px; */
}
</style>
```

### Advanced Flexbox Examples

```html
<div class="navbar">
    <div class="logo">Logo</div>
    <nav class="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>
    <div class="user-actions">
        <button>Login</button>
    </div>
</div>

<div class="card-layout">
    <div class="card">
        <h3>Card Title</h3>
        <p>Card content goes here...</p>
        <button class="card-button">Action</button>
    </div>
    <div class="card">
        <h3>Another Card</h3>
        <p>More content here...</p>
        <button class="card-button">Action</button>
    </div>
</div>

<style>
/* Navbar with Flexbox */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
}

/* Card Layout */
.card-layout {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    flex-wrap: wrap;
}

.card {
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    flex: 1;
    min-width: 250px;
}

.card-button {
    margin-top: auto; /* Push button to bottom */
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
}
</style>
```

---

## CSS Grid Layout

### Basic Grid

```html
<div class="grid-container">
    <div class="grid-item header">Header</div>
    <div class="grid-item sidebar">Sidebar</div>
    <div class="grid-item main">Main Content</div>
    <div class="grid-item footer">Footer</div>
</div>

<style>
.grid-container {
    display: grid;
    
    /* Define columns and rows */
    grid-template-columns: 200px 1fr;        /* Fixed sidebar, flexible main */
    grid-template-rows: 60px 1fr 40px;       /* Header, main, footer */
    
    /* Alternative using repeat and minmax */
    /* grid-template-columns: repeat(3, 1fr); */
    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
    
    /* Gap between items */
    gap: 20px;                               /* grid-row-gap: 20px; grid-column-gap: 20px; */
    
    /* Grid areas (optional) */
    grid-template-areas: 
        "header header"
        "sidebar main"
        "footer footer";
    
    height: 100vh;
    padding: 20px;
}

.grid-item {
    background-color: #e9ecef;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Using grid areas */
.header { grid-area: header; background-color: #007bff; color: white; }
.sidebar { grid-area: sidebar; background-color: #6c757d; color: white; }
.main { grid-area: main; background-color: #28a745; color: white; }
.footer { grid-area: footer; background-color: #dc3545; color: white; }
</style>
```

### Advanced Grid Examples

```html
<div class="photo-gallery">
    <div class="photo large">Large Photo</div>
    <div class="photo">Photo 1</div>
    <div class="photo">Photo 2</div>
    <div class="photo wide">Wide Photo</div>
    <div class="photo">Photo 3</div>
    <div class="photo">Photo 4</div>
</div>

<div class="product-grid">
    <div class="product">Product 1</div>
    <div class="product">Product 2</div>
    <div class="product">Product 3</div>
    <div class="product">Product 4</div>
    <div class="product">Product 5</div>
    <div class="product">Product 6</div>
</div>

<style>
/* Photo Gallery Grid */
.photo-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
    gap: 10px;
    padding: 20px;
}

.photo {
    background-color: #6c757d;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
}

.photo.large {
    grid-column: span 2;
    grid-row: span 2;
    background-color: #007bff;
}

.photo.wide {
    grid-column: span 2;
    background-color: #28a745;
}

/* Responsive Product Grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.product {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
```

---

## Responsive Design Properties

### Media Queries

```html
<div class="responsive-container">
    <div class="responsive-item">Responsive Item 1</div>
    <div class="responsive-item">Responsive Item 2</div>
    <div class="responsive-item">Responsive Item 3</div>
</div>

<style>
.responsive-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

.responsive-item {
    background-color: #007bff;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 4px;
}

/* Tablet */
@media (max-width: 768px) {
    .responsive-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile */
@media (max-width: 480px) {
    .responsive-container {
        grid-template-columns: 1fr;
        padding: 10px;
    }
    
    .responsive-item {
        padding: 15px;
    }
}

/* Large screens */
@media (min-width: 1200px) {
    .responsive-container {
        grid-template-columns: repeat(4, 1fr);
        max-width: 1200px;
        margin: 0 auto;
    }
}
</style>
```

---

## Common Utility Properties

### Visibility and Overflow

```html
<div class="utility-examples">
    <div class="hidden-element">Hidden Element</div>
    <div class="visible-element">Visible Element</div>
    <div class="overflow-container">
        <p>This container has overflow content that will be scrollable...</p>
        <p>More content here...</p>
        <p>Even more content...</p>
    </div>
</div>

<style>
.hidden-element {
    display: none;              /* Completely hidden */
    /* visibility: hidden;      Alternative - takes up space but invisible */
    /* opacity: 0;              Alternative - invisible but interactive */
}

.visible-element {
    visibility: visible;
    background-color: #28a745;
    color: white;
    padding: 10px;
}

.overflow-container {
    width: 200px;
    height: 100px;
    border: 1px solid #ddd;
    overflow-y: scroll;         /* auto, hidden, visible, scroll */
    padding: 10px;
}
</style>
```

### Transform and Transition

```html
<div class="animation-examples">
    <div class="hover-scale">Hover to Scale</div>
    <div class="rotate-element">Rotating Element</div>
    <div class="slide-in">Slide In Element</div>
</div>

<style>
.hover-scale {
    background-color: #007bff;
    color: white;
    padding: 20px;
    margin: 10px;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.hover-scale:hover {
    transform: scale(1.1);
    background-color: #0056b3;
}

.rotate-element {
    background-color: #28a745;
    color: white;
    padding: 20px;
    margin: 10px;
    transform: rotate(5deg);
    transition: transform 0.3s ease;
}

.rotate-element:hover {
    transform: rotate(0deg) translateY(-5px);
}

.slide-in {
    background-color: #dc3545;
    color: white;
    padding: 20px;
    margin: 10px;
    transform: translateX(-100px);
    opacity: 0;
    animation: slideIn 1s ease forwards;
}

@keyframes slideIn {
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>
```

### Shadow and Border Effects

```html
<div class="effect-examples">
    <div class="shadow-box">Box Shadow</div>
    <div class="text-shadow-example">Text Shadow</div>
    <div class="border-styles">Various Borders</div>
</div>

<style>
.shadow-box {
    background-color: white;
    padding: 20px;
    margin: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
}

.shadow-box:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.text-shadow-example {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 20px;
}

.border-styles {
    padding: 20px;
    margin: 20px;
    border: 3px solid #007bff;
    border-radius: 12px;
    border-style: dashed;       /* solid, dotted, dashed, double */
    outline: 2px solid #28a745;
    outline-offset: 5px;
}
</style>
```

---

## Quick Reference

### Most Frequently Used Properties

```css
/* Layout */
display: flex | grid | block | inline-block | none;
position: static | relative | absolute | fixed | sticky;
top, right, bottom, left: 0px | 10px | 50%;
z-index: 1 | 999 | -1;

/* Flexbox */
justify-content: center | space-between | flex-start | flex-end;
align-items: center | flex-start | flex-end | stretch;
flex-direction: row | column;
flex: 1 | 0 1 auto;
gap: 20px;

/* Grid */
grid-template-columns: 1fr 2fr | repeat(3, 1fr) | 200px 1fr;
grid-template-rows: auto | 100px 1fr;
grid-column: span 2 | 1 / 3;
grid-row: span 2 | 1 / -1;

/* Spacing */
margin: 10px | 10px 20px | 10px 15px 20px 25px;
padding: 10px | 0 20px;

/* Sizing */
width: 100px | 100% | auto | min-content | max-content;
height: 50px | 100vh | auto;
max-width: 1200px;
min-height: 100vh;

/* Typography */
font-size: 16px | 1.2rem | 120%;
font-weight: normal | bold | 400 | 700;
line-height: 1.5 | 24px;
text-align: left | center | right | justify;

/* Colors & Backgrounds */
color: #333 | rgb(255, 0, 0) | hsl(0, 100%, 50%);
background-color: transparent | #f8f9fa;
background: linear-gradient(45deg, #ff6b6b, #4ecdc4);

/* Borders & Effects */
border: 1px solid #ddd;
border-radius: 4px | 50%;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
opacity: 0.8 | 0 | 1;

/* Responsive */
@media (max-width: 768px) { /* styles */ }
@media (min-width: 1024px) { /* styles */ }
```

This guide covers the most essential CSS properties you'll use daily. Practice combining these properties to create complex layouts and effects!
