const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Core Package Prod Bundle Options
const corePackage = {
	mode: "production",
	entry: ["./packages/core/src/index.ts"],
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "packages/core/dist"),
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
		],
	},
	plugins: [new CleanWebpackPlugin()],
};

module.exports = [corePackage];
