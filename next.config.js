const path = require('path');
const nextTranslate = require('next-translate');
const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
  layoutPath: 'src/layouts',
  defaultLayout: true,
  // rehypePlugins: [rehypePrism],
})({
  pageExtensions: ['mdx', 'tsx'],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: 'json',
          use: 'yaml-loader',
        },
        {
          test: /\.svg$/,
          use: '@svgr/webpack',
        },
      ],
    );
    return config;
  },
});

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  module: {
    rules: [{ test: /\.md$/, use: 'raw-loader' }],
  },
};

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
