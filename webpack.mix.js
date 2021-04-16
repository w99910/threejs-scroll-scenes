let mix = require('laravel-mix');

// .postCss('main/main.css','public/index.css',[
  //     require('tailwindcss'),
  // ])
mix.js('main/main.js', 'index.js').setPublicPath('public')
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
