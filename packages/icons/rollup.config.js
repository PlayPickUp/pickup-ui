import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

export default {
	input: "src/index.ts",
	external: ["react", "react-dom"],
	output: [
		{
			file: packageJson.main,
			format: "cjs",
			sourcemap: true,
			compact: true,
		},
		{
			file: packageJson.module,
			format: "esm",
			sourcemap: true,
			compact: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true }),
	],
};
