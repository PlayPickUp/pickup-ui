const { exec } = require("child_process");
const { stdout, stderr } = require("process");

exec("yarn build", (err, stdout, stderr) => {
  if (err) {
    console.error(
      err,
      "🚨  Could not run prepublish command for @playpickup/core"
    );
    process.exit(1);
  }

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  process.exit(0);
});
