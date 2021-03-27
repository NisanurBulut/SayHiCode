const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .copy("node_modules/jquery/dist/jquery.js", "public/js/jquery.js")
    .copy(
        "node_modules/semantic-ui-css/semantic.min.css",
        "public/css/semantic.min.css"
    )
    .copy(
        "node_modules/semantic-ui-css/semantic.min.js",
        "public/js/semantic.min.js"
    )
    .copy(
        "node_modules/semantic-ui-css/themes/default/assets/fonts/icons.woff",
        "public/css/themes/default/assets/fonts/icons.woff"
    )
    .copy(
        "node_modules/semantic-ui-css/themes/default/assets/fonts/icons.woff2",
        "public/css/themes/default/assets/fonts/icons.woff2"
    )
    .copy(
        "node_modules/semantic-ui-css/themes/default/assets/fonts/icons.ttf",
        "public/css/themes/default/assets/fonts/icons.ttf"
    )
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/main.scss', 'public/css');
    // .postCss("resources/css/app.css", "public/css", [
    //     //
    // ]);
