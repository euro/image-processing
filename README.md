# Process image formats and sizes

A tool for using @11ty/eleventy-img to process images into different formats and sizes.

## Getting started

1. `npm i`
2.

## Set options in the eleventy.config.js

```
widths: [600, 900, 1200, 1800],
formats: ['png', 'jpeg', 'webp', 'avif'],
```

1. Drop src images into the ./src/img directory.
1. Run `npx @11ty/eleventy` or `eleventy` if you previously had eleventy installed globally.
