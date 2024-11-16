import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins({mode, paths}: BuildOptions): Configuration['plugins'] {
	const isDev = mode === "development";

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({template: paths.html}),
		new webpack.ProgressPlugin(),
		// new BundleAnalyzerPlugin(), 
	]

	if (!isDev) {
		plugins.push(!isDev && new MiniCssExtractPlugin())
	}

	return plugins;
}