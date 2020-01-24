module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  css: {
    loaderOptions: {
      // pass options to sass-loader
      scss: {
        prependData: '@import "@/assets/_variables.scss";',
      },
    },
  },
};
