import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import url from "@rollup/plugin-url";
import json from "@rollup/plugin-json";
import css from "rollup-plugin-import-css";

const packageJson = require("./package.json");

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "prop-types": "PropTypes",
};

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      compact: true,
      globals,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      compact: true,
      globals,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      moduleDirectories: ["node_modules"],
    }),
    url(),
    json(),
    css(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: "./tsconfig.json",
    }),
  ],
  external: ["react", "react-dom", "prop-types", "react-router-dom"],
};
