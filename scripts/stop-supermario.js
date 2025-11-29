// Stop Super Mario Docker Container - JavaScript (Node.js) Script
// This script stops the running Super Mario container
// The container will be stopped but not removed
// Usage: node stop-supermario-javascript.js

const { exec } = require('child_process');

exec('docker stop supermario', (error, stdout, stderr) => {
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
