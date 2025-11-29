// Delete Super Mario Docker Container - JavaScript (Node.js) Script
// This script removes the Super Mario container
// Note: Container must be stopped before it can be removed
// Use 'docker rm -f supermario' to force remove a running container
// Usage: node delete-supermario-javascript.js

const { exec } = require('child_process');

exec('docker rm supermario', (error, stdout, stderr) => {
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
