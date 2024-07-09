const pluginRss = require("@11ty/eleventy-plugin-rss");
const anchor = require("markdown-it-anchor");
const md = require("markdown-it")();

// Function to format date
function formatDate(value, format) {
    const date = new Date(value);
    return new Intl.DateTimeFormat("en-US", format).format(date);
}

module.exports = function (eleventyConfig) {

    const permalinkOptsTwo = {
        style: 'visually-hidden',
        symbol: "$",
        assistiveText: title => `Permalink to “${title}”`,
        visuallyHiddenClass: 'visually-hidden',
        wrapper: ['<div class="wrapper">', '</div>']
    }

    permalinkOpts = {
        safariReaderFix: true
    }


    const markdownLib = md.use(anchor, {
        permalink: anchor.permalink.headerLink(permalinkOptsTwo)
    })
    
    eleventyConfig.setLibrary("md", markdownLib)
    eleventyConfig.addFilter("formatDate", formatDate);
    eleventyConfig.addPlugin(pluginRss);
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
