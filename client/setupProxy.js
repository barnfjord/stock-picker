const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  const target = process.env.REACT_APP_PROXY || 'http://localhost:3001';
  console.log(`Proxing API requests to [${target}]`);

  app.use(
    '/v1',
    createProxyMiddleware({
      target,
      changeOrigin: true
    })
  );
};
