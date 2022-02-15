const {createProxyMiddleware} = require("http-proxy-middleware")


module.exports = app => {
    app.use(
        createProxyMiddleware('/coins', 
        {
            target: 'https://api.coinranking.com/v2',
            changeOrigin: true
        })
    )
}