module.exports = function (eleventyConfig) {
    // Copy `assets/css` directory to `_site/assets/css`
    eleventyConfig.addPassthroughCopy("assets/css");

    return {
        dir: {
            input: "src",
            output: "_site", // This is the default, but it's included here for clarity.
            includes: "_templates"
        }
    };
};