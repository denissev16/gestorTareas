const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/index.js', //punto de entrada de la aplicación
    output: {
        filename: 'bundle.js', //nombre del archivo de salida
        path: path.resolve(__dirname,'dist'), //carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //expresión regular REGEX para identificar archivos css
                use: ['style-loader', 'css-loader'], //Loaders para procesar archivos css
            },
            {
                test: /\.js$/, //expresión regular REGEX para identificar archivos JS
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', //Loader para llevar JS moderno a JS antigüo para que sea compatible con todos los navegadores
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuración
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compres: true, //habilitar compresion gzip
        port: 9000,
    },
};