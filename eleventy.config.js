const path = require('path');
const fg = require('fast-glob');
const Image = require('@11ty/eleventy-img');

module.exports = function (eleventyConfig) {
  // run before eleventy build
  eleventyConfig.on('beforeBuild', async () => {
    const images = fg.sync('./src/img/**/*.*');

    return Promise.all(
      images.map((image) => Image(image, {
        widths: [600],
        // formats: ['png', 'jpeg', 'webp', 'avif'],
        formats: ['png', 'avif'],
        outputDir: './dist/img/',
        filenameFormat(id, src, width, format, options) {
          const extension = path.extname(src);
          const name = path.basename(src, extension);
          console.log([width, format, name]);
          return `${name}-${width}w.${format}`;
        },
      })),
    );
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    }
  };
};
