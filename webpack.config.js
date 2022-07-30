const HtmlWebpack          = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin           = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    output: {
        clean: true
    },

    module: {
        rules: [

            //configurar la incorporación de archivos css 
            //a nuestra aplicación
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                //lo que hace esto es que el o los css los trabaja como archivos de javascript
                //el index.html no tiene referencias a estilos... los estilos se definen en el 
                //components.js
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]

            },
            //con esta configuración se pasa los *.html al 
            //directorio dist
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }


        ]
    
    },
    optimization: {},

    plugins: [
            //con esta configuración se pasa los *.html al 
            //directorio dist
        new HtmlWebpack({
            title: 'Jaime WebPack App',
            //filename: 'index.html'
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin({
            //filename: '[name].[fullhash].css',//para prod
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                {from: 'src/assets/', to: 'assets/' }
            ] 
        })

    ],

};


