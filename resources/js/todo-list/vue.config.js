const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    outputDir: '../../../public/front',
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = 'ToDoList';
            return args;
        });
    },
    transpileDependencies: true,
    // publicPath: process.env.NODE_ENV === 'production' ?'/VueCli/':'/'
})
