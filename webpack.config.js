const path = require('path');

module.exports = {
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
                    optios: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__dirname,'dist'), //carpeta desde el cual el servidor agarra los archivos
        compres: true, //habilitar compresion gzip
        port: 9000,
    },
};