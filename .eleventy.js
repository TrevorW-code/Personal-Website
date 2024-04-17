module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("src");

    return {
        // When a passthrough file is modified, rebuild the pages:
        passthroughFileCopy: true,
        // Set custom directories for input, output, includes, and data
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};
