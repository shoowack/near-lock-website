const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
});
