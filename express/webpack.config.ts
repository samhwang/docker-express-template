import * as path from 'path';
import { Configuration } from 'webpack';
import NodemonPlugin from 'nodemon-webpack-plugin';

const config: Configuration = {
    target: 'node',
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.bundle.js'
    },
    plugins: [
        new NodemonPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [{
            test: /\.(ts|js)?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    }
};

export default config