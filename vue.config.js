module.exports = {
    devServer : {
        proxy:'http://localhost:4444'
    },
    // css: {
    //     loaderOptions: {
    //         css: {},
    //         postcss: {
    //             plugins: [
    //                 require('postcss-px2rem')({
    //                     remUnit: 37.5
    //                     })
    //                 ]
    //             }
    //         }
    //     },
}