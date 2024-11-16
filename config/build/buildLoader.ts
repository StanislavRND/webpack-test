import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoader(options: BuildOptions): ModuleOptions['rules'] {
	const isDev = options.mode === "development";

	const cssLoaderWithModules = {
		loader: "css-loader",
		options: {
			modules: {
				localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
			}			
		}
	}

	const assetLoader = {
			test: /\.(png|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
	}

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack']
	}
	

	return [
		{
			test: /\.s[ac]ss$/i,
			use: [
				isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
				cssLoaderWithModules,
				"sass-loader",
			],
		},
		{
			exclude: /node_modules/,
			test: /\.tsx?$/,
			use: [
				{
				loader: 'ts-loader',
				options: {
						transpileOnly: true,
					} 
				}
			]
		},
		assetLoader, 
		svgLoader
	]
}