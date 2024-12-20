const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://43.202.32.80:8080',
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  );
};