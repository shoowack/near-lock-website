const path = require('path');
const nextTranslate = require('next-translate');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  module: {
    rules: [{ test: /\.md$/, use: 'raw-loader' }],
  },
}

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
