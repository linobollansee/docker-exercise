// Delete Docker MongoDB Container - JavaScript (Node.js) Script
// This script removes the MongoDB container named 'testmongo'
// Note: Container must be stopped before it can be removed
// Use 'docker rm -f testmongo' to force remove a running container
// Usage: node delete-docker-javascript.js

const { exec } = require('child_process');

exec('docker rm testmongo', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
