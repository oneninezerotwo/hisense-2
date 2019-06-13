module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true,

            },
        }

    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    }
}