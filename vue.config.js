module.exports = {
  pwa: {
    name: "Deezweb",
    themeColor: "#ffd975"
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
};
