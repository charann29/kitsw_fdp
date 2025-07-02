# Complete CSS Properties Reference Guide

## Layout Properties

### Display & Positioning
- **display**: Controls element display type (block, inline, flex, grid, none, etc.)
- **position**: Positioning method (static, relative, absolute, fixed, sticky)
- **top, right, bottom, left**: Position offsets for positioned elements
- **z-index**: Stacking order of positioned elements
- **float**: Floating elements left or right
- **clear**: Clearing floated elements

### Box Model
- **width, height**: Element dimensions
- **min-width, max-width**: Minimum and maximum width constraints
- **min-height, max-height**: Minimum and maximum height constraints
- **margin**: Outer spacing (margin-top, margin-right, margin-bottom, margin-left)
- **padding**: Inner spacing (padding-top, padding-right, padding-bottom, padding-left)
- **border**: Element borders (border-width, border-style, border-color)
- **box-sizing**: How box model is calculated (content-box, border-box)

### Flexbox
- **flex-direction**: Direction of flex items (row, column, row-reverse, column-reverse)
- **flex-wrap**: Whether flex items wrap (nowrap, wrap, wrap-reverse)
- **justify-content**: Main axis alignment (flex-start, center, space-between, etc.)
- **align-items**: Cross axis alignment (stretch, center, flex-start, etc.)
- **align-content**: Multi-line flex container alignment
- **flex-grow**: How much a flex item should grow
- **flex-shrink**: How much a flex item should shrink
- **flex-basis**: Initial size of flex item
- **align-self**: Individual flex item alignment

### Grid
- **grid-template-columns**: Define grid columns
- **grid-template-rows**: Define grid rows
- **grid-template-areas**: Named grid areas
- **grid-column**: Grid item column placement
- **grid-row**: Grid item row placement
- **grid-gap**: Spacing between grid items
- **justify-items**: Align grid items horizontally
- **align-items**: Align grid items vertically
- **place-items**: Shorthand for justify-items and align-items

## Typography Properties

### Font Properties
- **font-family**: Font typeface
- **font-size**: Text size
- **font-weight**: Text thickness (normal, bold, 100-900)
- **font-style**: Text style (normal, italic, oblique)
- **font-variant**: Font variations (normal, small-caps)
- **line-height**: Space between lines
- **letter-spacing**: Space between characters
- **word-spacing**: Space between words

### Text Properties
- **color**: Text color
- **text-align**: Horizontal text alignment (left, center, right, justify)
- **text-decoration**: Text decoration (none, underline, overline, line-through)
- **text-transform**: Text case transformation (uppercase, lowercase, capitalize)
- **text-indent**: First line indentation
- **text-shadow**: Text shadow effects
- **vertical-align**: Vertical alignment of inline elements
- **white-space**: Whitespace handling (normal, nowrap, pre, pre-wrap)
- **word-wrap**: Word wrapping behavior
- **text-overflow**: Handling of overflowing text (clip, ellipsis)

## Color & Background Properties

### Background
- **background-color**: Background color
- **background-image**: Background image
- **background-repeat**: Background image repetition (repeat, no-repeat, repeat-x, repeat-y)
- **background-position**: Background image position
- **background-size**: Background image size (cover, contain, specific dimensions)
- **background-attachment**: Background image attachment (scroll, fixed, local)
- **background-clip**: Background painting area
- **background-origin**: Background positioning area

### Colors & Gradients
- **opacity**: Element transparency (0-1)
- **color**: Text/foreground color
- **background**: Shorthand for all background properties
- **linear-gradient()**: Linear gradient backgrounds
- **radial-gradient()**: Radial gradient backgrounds

## Border & Outline Properties

### Borders
- **border-width**: Border thickness
- **border-style**: Border style (solid, dashed, dotted, double, groove, ridge, inset, outset)
- **border-color**: Border color
- **border-radius**: Rounded corners
- **border-top, border-right, border-bottom, border-left**: Individual border sides

### Outlines
- **outline**: Element outline (doesn't affect layout)
- **outline-width**: Outline thickness
- **outline-style**: Outline style
- **outline-color**: Outline color
- **outline-offset**: Distance between outline and border

## Visual Effects Properties

### Shadows & Effects
- **box-shadow**: Drop shadows for elements
- **text-shadow**: Drop shadows for text
- **filter**: Visual effects (blur, brightness, contrast, grayscale, etc.)
- **backdrop-filter**: Effects on element backdrop

### Transforms & Animations
- **transform**: 2D/3D transformations (rotate, scale, translate, skew)
- **transform-origin**: Transform reference point
- **transition**: Smooth property changes
- **transition-property**: Properties to transition
- **transition-duration**: Transition time
- **transition-timing-function**: Transition easing
- **transition-delay**: Transition delay
- **animation**: Keyframe animations
- **animation-name**: Animation keyframe name
- **animation-duration**: Animation length
- **animation-timing-function**: Animation easing
- **animation-delay**: Animation delay
- **animation-iteration-count**: Animation repetitions
- **animation-direction**: Animation direction
- **animation-fill-mode**: Animation state persistence

## Overflow & Clipping Properties

- **overflow**: Content overflow handling (visible, hidden, scroll, auto)
- **overflow-x**: Horizontal overflow
- **overflow-y**: Vertical overflow
- **clip**: Clipping region for absolutely positioned elements
- **clip-path**: Clipping shapes

## Table Properties

- **table-layout**: Table layout algorithm (auto, fixed)
- **border-collapse**: Table border model (separate, collapse)
- **border-spacing**: Space between table borders
- **caption-side**: Table caption position
- **empty-cells**: Empty cell border/background display

## List Properties

- **list-style**: List marker style
- **list-style-type**: List marker type (disc, circle, square, decimal, etc.)
- **list-style-image**: Custom list marker image
- **list-style-position**: List marker position (inside, outside)

## Cursor & User Interface Properties

- **cursor**: Mouse cursor appearance (pointer, default, help, wait, etc.)
- **user-select**: Text selection behavior (none, auto, text, all)
- **pointer-events**: Element interaction with pointer events (auto, none)
- **resize**: Element resizing capability (none, horizontal, vertical, both)

## Content & Counter Properties

- **content**: Generated content for pseudo-elements
- **counter-reset**: Initialize counters
- **counter-increment**: Increment counters
- **quotes**: Quotation marks for content

## Print & Media Properties

- **page-break-before**: Page break before element
- **page-break-after**: Page break after element
- **page-break-inside**: Page break inside element
- **orphans**: Minimum lines at bottom of page
- **widows**: Minimum lines at top of page

## Multi-column Properties

- **column-count**: Number of columns
- **column-width**: Column width
- **column-gap**: Space between columns
- **column-rule**: Rule between columns
- **column-span**: Column spanning

## Responsive & Flexible Properties

- **object-fit**: How replaced elements fit their container (cover, contain, fill)
- **object-position**: Position of replaced elements
- **aspect-ratio**: Preferred aspect ratio of element

## Advanced Layout Properties

### CSS Grid Advanced
- **grid-auto-columns**: Size of implicitly created columns
- **grid-auto-rows**: Size of implicitly created rows
- **grid-auto-flow**: How auto-placed items flow

### Modern Properties
- **gap**: Spacing between flex/grid items
- **place-content**: Shorthand for justify-content and align-content
- **place-self**: Shorthand for justify-self and align-self

## Browser Compatibility Properties

- **-webkit-**: WebKit browser prefixes
- **-moz-**: Mozilla Firefox prefixes
- **-ms-**: Microsoft Edge/IE prefixes
- **-o-**: Opera browser prefixes

## Custom Properties (CSS Variables)

- **--custom-property**: Define custom CSS properties
- **var()**: Use custom properties

## Usage Tips

1. **Inheritance**: Some properties inherit from parent elements (color, font-family), others don't (margin, padding)
2. **Specificity**: More specific selectors override less specific ones
3. **Cascade**: Later rules override earlier ones with same specificity
4. **Shorthand**: Many properties have shorthand versions (margin, padding, border, font)
5. **Units**: Use appropriate units (px, em, rem, %, vh, vw) for different contexts
6. **Browser Support**: Check compatibility for newer properties
7. **Performance**: Some properties trigger layout recalculation, others don't
