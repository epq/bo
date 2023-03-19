module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addWatchTarget("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });


  return {
    pathPrefix: "bo",
    url: "https://jordanne.ca",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
    },
  };
};