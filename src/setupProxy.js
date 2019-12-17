const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        '/api',
        proxy({
            target:'http://localhost:8888',
            changeOrigin:true,
            pathRewrite: {
                "^/api": "/"
               },
        })
    );
    app.use(
        '/apc',
        proxy({
            target:'https://wapi.feekr.com',
            changeOrigin:true,
            pathRewrite: {
                "^/apc": "/"
               },
        })
    )
    

    
}



