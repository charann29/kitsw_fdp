# CSS Classes, IDs & Essential Properties Guide

## Table of Contents
1. [Classes vs IDs](#classes-vs-ids)
2. [Box Model Properties](#box-model-properties)
3. [Typography Properties](#typography-properties)
4. [Background & Color Properties](#background--color-properties)
5. [Display & Positioning](#display--positioning)
6. [Flexbox Layout](#flexbox-layout)
7. [CSS Grid Layout](#css-grid-layout)
8. [Responsive Design Properties](#responsive-design-properties)
9. [Common Utility Properties](#common-utility-properties)

---

## Classes vs IDs

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
