const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader',
                ],
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader',
                ],
            },
            /*             {
                            test: /\.(gif|png|jpe?g|svg)$/i,
                            use: [
                                'file-loader',
                                {
                                    loader: 'image-webpack-loader',
                                    options: {
                                        bypassOnDebug: true, // webpack@1.x
                                        disable: true, // webpack@2.x and newer
                                        mozjpeg: {
                                            progressive: true,
                                            quality: 90
                                        },
                                        // optipng.enabled: false will disable optipng
                                        optipng: {
                                            enabled: false,
                                        },
                                        pngquant: {
                                            quality: [0.65, 0.90],
                                            speed: 4
                                        },
                                        gifsicle: {
                                            interlaced: false,
                                        },
                                        // the webp option will enable WEBP
                                        webp: {
                                            quality: 75
                                        },
                                    },
                                },
                            ],
                        }, */
        ],
    },
};