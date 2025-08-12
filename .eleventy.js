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

    // //to filter out 'project' in project tag cloud
    // eleventyConfig.addFilter("excludeTag", function(tags, tagToExclude) {
    //     return tags.filter(tag => tag !== tagToExclude);
    // });


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