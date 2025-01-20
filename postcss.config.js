module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      require('@fullhuman/postcss-purgecss')({
        content: [
          './src/**/*.{js,jsx,ts,tsx}',
          './public/index.html'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: ['leaflet-', 'marker-'],
          deep: [/leaflet-.*/, /marker-.*/],
        }
      }),
      require('cssnano')({
        preset: [
          'advanced',
          {
            discardComments: { removeAll: true },
            reduceIdents: false,
            zindex: false
          }
        ]
      })
    ]
  };
  