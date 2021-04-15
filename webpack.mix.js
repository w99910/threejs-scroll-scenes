let mix = require('laravel-mix');

mix.js('main/main.js', 'index.js').setPublicPath('public')
  .postCss('main/main.css','public/index.css',[
      require('tailwindcss'),
  ])
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.(glsl|frag|vert)$/,
          exclude: /node_modules/,
          use: [
            'raw-loader',
            'glslify-loader',
          ],
        },
      ],
    },
  });
