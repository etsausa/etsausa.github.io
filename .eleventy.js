module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addWatchTarget("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addWatchTarget("src/css/");

    // used to dynamically generate nav links, see base.html 
    eleventyConfig.addCollection("nav", function(collectionApi) {
        return collectionApi.getAll().filter(item => {
            return item.data.nav === true;
        }).sort((a, b) => {
            return (a.data.navOrder || 0) - (b.data.navOrder || 0);
        });
    });

    //generates a color for project tags
    eleventyConfig.addFilter("tagColor", function(tag) {
    // Hash the tag name to a number
    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
        hash = tag.charCodeAt(i) + ((hash << 5) - hash);
    }
        // Convert to an HSL color with controlled saturation/lightness
        const hue = Math.abs(hash) % 360;
        return `hsl(${hue}, 80%, 65%)`;
    });

    // //to filter out 'project' in project tag cloud
    // eleventyConfig.addFilter("excludeTag", function(tags, tagToExclude) {
    //     return tags.filter(tag => tag !== tagToExclude);
    // });

    // const colors = {
    //     "javascript": "#00b8df",  // your cyan
    //     "css": "#e36799",          // your magenta
    //     "html": "#f8db6c",         // your yellow
    //     "react": "#00dfa8",        // teal-green
    //     "node": "#00cfb8",         // teal
    //     "python": "#7b6fdf",       // purple
    //     "figma": "#e3679f",        // pink
    //     "11ty": "#00a8cc",         // darker cyan
    //     "design": "#f8a06c",       // orange
    //     "webdev": "#f86c9a",       // coral pink
    //     "typescript": "#6cb8f8",   // light blue
    //     "sass": "#df6fa8",         // dusty rose
    // };


    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: [ 'md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk'
    }
}