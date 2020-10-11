# VAST

Responsive Web Framework for Immense Displays

## Quick start:

Install node modules after initial clone or download:

```
npm install
```

Run in development mode:

```
npm start
```

Start a local development server at port 8080. Navigate to http://localhost:8080/ in your browser

Build for production:

```
npm run build
```

Build an optimized version for production

## Overview

While responsive web design has solved the challenge of supporting multiple screen sizes, there are unique challenges creating content for displays that are beyond desktop, such as wall displays. These challenges include:

- **Viewing Distance**: Mobile devices and desktops are always viewed within a range of a few inches to a few feet, but Immense Displays may be viewed up close or at a distance of a hundred feet or more. Vast supports two viewing distances: near and far, and adjusts font sizes accordingly.

- **Fitting Content**: Mobile and desktop devices require the user to scroll to see the content in its entirety, but content for Immense Displays is usually meant to be instantly comprehensive, that is the content should fit the display without any overflow. Vast supports grids that make laying out content easier to the screen's available real estate easier, and also has utilities for fitting media elements like pictures, videos, and 3d content.

- **Debugging**: Most content is made on a laptop, and it's difficult to imagine the size of content when it'll be put on screen. Vast provides a debugger that indicates, in inches, how large content will be on an Immense display.

- **Aligning content to tiles**: Immense displays are often composed of a series of tiles, that may have a slight bevel that causes unintentional abberations in the content. Vast's grid can be configured to lay content out to the tile's physical borders to create an intentional, boutique implementation of the content's design.

## Features

- ES6 support (Using eslint with standard JS style guide)
- Babel transpiler
- SCSS support
- Autoprefixer for css
- markdown file loader

## Demos
