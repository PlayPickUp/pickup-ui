const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Playground Bundle Options
const playground = {
	mode: "development",
	devtool: "inline-source-map",
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	entry: {
		main: "./playground/src/index.tsx",
	},
	devServer: {
		contentBase: "./playground/dist",
		port: 3000,
		hot: true,
		overlay: true,
		open: true,
		watchOptions: {
			poll: true,
		},
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
		new HtmlWebpackPlugin({
			title: "PickUp-UI Playground",
			template: "./playground/public/index.html",
			filename: "./index.html",
		}),
	],
	output: {
		path: path.resolve(__dirname, "playground/dist"),
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/react", "@babel/env", "@babel/typescript"],
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
};

module.exports = [playground];
