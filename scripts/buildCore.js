const fs = require("fs-extra");

const buildCore = () => {
	fs.copy("./types/index.d.ts", "./packages/core/dist/index.d.ts")
		.then(() =>
			console.log(
				"👍  Successfully copied type declration for @playpickup/core!"
			)
		)
		.catch((err) =>
			console.error(
				err,
				"👎  Could not copy type declaration for @packages/core"
			)
		);
};

buildCore();
