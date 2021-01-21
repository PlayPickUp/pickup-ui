const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Core Package Prod Bundle Options
const corePackage = {
	mode: "production",
	entry: ["./packages/core/src/index.ts"],
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			react: path.resolve(__dirname, "./node_modules/react"),
			"react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
		},
	},
	externals: {
		// Don't bundle react or react-dom
		react: {
			commonjs: "react",
			commonjs2: "react",
			amd: "React",
			root: "React",
		},
		"react-dom": {
			commonjs: "react-dom",
			commonjs2: "react-dom",
			amd: "ReactDOM",
			root: "ReactDOM",
		},
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "packages/core/dist"),
		library: "@playpickup/core",
		libraryTarget: "umd",
		publicPath: "/dist/",
		umdNamedDefine: true,
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
