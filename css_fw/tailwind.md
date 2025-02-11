# Tailwind CSS Complete Cheatsheet

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Utility Classes](#utility-classes)
   - [Layout](#layout)
   - [Flexbox and Grid](#flexbox-and-grid)
   - [Spacing](#spacing)
   - [Sizing](#sizing)
   - [Typography](#typography)
   - [Backgrounds](#backgrounds)
   - [Borders](#borders)
   - [Effects](#effects)
   - [Filters](#filters)
   - [Tables](#tables)
   - [Interactivity](#interactivity)
   - [SVG](#svg)
   - [Transitions and Animations](#transitions-and-animations)
   - [Transforms](#transforms)
   - [Aspect Ratio](#aspect-ratio)
   - [Ring Utilities](#ring-utilities)
4. [Responsive Design](#responsive-design)
5. [Dark Mode](#dark-mode)
6. [Plugins](#plugins)

---

## Installation

```bash
# Install Tailwind CSS via npm
npm install -D tailwindcss
npx tailwindcss init
```

### Add Tailwind to Your CSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Configuration Example (`tailwind.config.js`)

```js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## Utility Classes

### Layout

- **Container**: `.container`
- **Box Sizing**: `.box-border`, `.box-content`
- **Display**: `.block`, `.inline-block`, `.inline`, `.flex`, `.inline-flex`, `.grid`, `.inline-grid`, `.hidden`
- **Float**: `.float-right`, `.float-left`, `.float-none`
- **Clear**: `.clear-left`, `.clear-right`, `.clear-both`, `.clear-none`
- **Object Fit**: `.object-contain`, `.object-cover`, `.object-fill`, `.object-none`, `.object-scale-down`
- **Overflow**: `.overflow-auto`, `.overflow-hidden`, `.overflow-visible`, `.overflow-scroll`
- **Position**: `.static`, `.fixed`, `.absolute`, `.relative`, `.sticky`
- **Z-Index**: `.z-0`, `.z-10`, `.z-20`, `.z-50`, `.z-auto`

### Flexbox and Grid

- **Flex Direction**: `.flex-row`, `.flex-row-reverse`, `.flex-col`, `.flex-col-reverse`
- **Flex Wrap**: `.flex-wrap`, `.flex-wrap-reverse`, `.flex-nowrap`
- **Align Items**: `.items-start`, `.items-center`, `.items-end`, `.items-baseline`, `.items-stretch`
- **Justify Content**: `.justify-start`, `.justify-center`, `.justify-end`, `.justify-between`, `.justify-around`, `.justify-evenly`
- **Grid Template Columns**: `.grid-cols-{n}` (e.g., `.grid-cols-3`)
- **Grid Auto Flow**: `.grid-flow-row`, `.grid-flow-col`
- **Gap**: `.gap-{n}` (e.g., `.gap-4`)
- **Auto Rows and Columns**: `.auto-rows-min`, `.auto-cols-fr`

### Spacing

- **Padding**: `.p-{n}`, `.pt-{n}`, `.pr-{n}`, `.pb-{n}`, `.pl-{n}`, `.px-{n}`, `.py-{n}`
- **Margin**: `.m-{n}`, `.mt-{n}`, `.mr-{n}`, `.mb-{n}`, `.ml-{n}`, `.mx-{n}`, `.my-{n}`
- **Space Between Elements**: `.space-x-{n}`, `.space-y-{n}`

### Sizing

- **Width**: `.w-{n}` (e.g., `.w-1/2`, `.w-full`)
- **Height**: `.h-{n}` (e.g., `.h-32`, `.h-screen`)
- **Min/Max Width**: `.min-w-{n}`, `.max-w-{n}`
- **Min/Max Height**: `.min-h-{n}`, `.max-h-{n}`

### Typography

- **Font Size**: `.text-xs`, `.text-sm`, `.text-lg`, `.text-xl`, `.text-2xl`, `.text-3xl`
- **Font Weight**: `.font-thin`, `.font-light`, `.font-normal`, `.font-medium`, `.font-bold`, `.font-extrabold`
- **Text Alignment**: `.text-left`, `.text-center`, `.text-right`, `.text-justify`
- **Line Height**: `.leading-{n}`
- **Letter Spacing**: `.tracking-{n}`
- **Text Transform**: `.uppercase`, `.lowercase`, `.capitalize`

### Backgrounds

- **Background Color**: `.bg-{color}` (e.g., `.bg-red-500`, `.bg-green-200`)
- **Background Size**: `.bg-auto`, `.bg-cover`, `.bg-contain`
- **Background Position**: `.bg-center`, `.bg-top`, `.bg-bottom`, `.bg-left`, `.bg-right`
- **Gradient**: `.bg-gradient-to-r`, `.bg-gradient-to-l`, `.from-{color}`, `.to-{color}`

### Borders

- **Border Width**: `.border`, `.border-0`, `.border-2`, `.border-4`
- **Border Color**: `.border-{color}` (e.g., `.border-gray-500`)
- **Border Radius**: `.rounded`, `.rounded-full`, `.rounded-lg`
- **Divide Utilities**: `.divide-x`, `.divide-y`, `.divide-gray-300`

### Effects

- **Box Shadow**: `.shadow`, `.shadow-md`, `.shadow-lg`
- **Opacity**: `.opacity-{n}` (e.g., `.opacity-50`)
- **Mix Blend Mode**: `.mix-blend-normal`, `.mix-blend-multiply`, `.mix-blend-screen`

### Filters

- **Blur**: `.blur`, `.blur-sm`, `.blur-md`
- **Brightness**: `.brightness-{n}`
- **Contrast**: `.contrast-{n}`

### Tables

- **Table Layout**: `.table-auto`, `.table-fixed`
- **Border Collapse**: `.border-collapse`, `.border-separate`

### Interactivity

- **Cursor**: `.cursor-pointer`, `.cursor-default`, `.cursor-wait`, `.cursor-not-allowed`
- **User Select**: `.select-none`, `.select-text`, `.select-all`, `.select-auto`
- **Pointer Events**: `.pointer-events-none`, `.pointer-events-auto`

### SVG

- **Fill**: `.fill-current`
- **Stroke**: `.stroke-current`

### Transitions and Animations

- **Transition**: `.transition`, `.transition-none`, `.transition-all`
- **Duration**: `.duration-{n}`
- **Timing Function**: `.ease-in`, `.ease-out`, `.ease-in-out`
- **Delay**: `.delay-{n}`

### Transforms

- **Scale**: `.scale-{n}`
- **Rotate**: `.rotate-{n}`
- **Translate**: `.translate-x-{n}`, `.translate-y-{n}`
- **Skew**: `.skew-x-{n}`, `.skew-y-{n}`

### Aspect Ratio

- `.aspect-{ratio}` (e.g., `.aspect-w-16`, `.aspect-h-9`)

### Ring Utilities

- `.ring-{n}`, `.ring-offset-{n}`, `.ring-{color}` (e.g., `.ring-2`, `.ring-offset-4`, `.ring-blue-500`)

---

## Responsive Design

Use responsive prefixes like `sm:`, `md:`, `lg:`, `xl:`, and `2xl:` to apply utilities at specific breakpoints.

```html
<div class="text-center md:text-left lg:text-right">
  Responsive Text Alignment
</div>
```

---

## Dark Mode

Tailwind supports dark mode out of the box. Add `dark:` prefix for dark mode utilities.

```html
<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  Dark mode supported
</div>
```

---

## Plugins

Extend Tailwind’s functionality with plugins.

```bash
npm install @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
```

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
```

---

This is a comprehensive overview of Tailwind CSS's utility classes and configurations. For more details, refer to the official documentation at [https://tailwindcss.com](https://tailwindcss.com).
