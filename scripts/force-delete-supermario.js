// Force Remove Super Mario Docker Container - JavaScript (Node.js) Script
// This script forcefully removes the Super Mario container
// Container will be stopped (if running) and removed in one command
// Usage: node force-delete-supermario-javascript.js

const { exec } = require('child_process');

exec('docker rm -f supermario', (error, stdout, stderr) => {
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
