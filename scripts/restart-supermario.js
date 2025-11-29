// Restart Super Mario Docker Container - JavaScript (Node.js) Script
// This script restarts the Super Mario container
// Container must have been created and stopped previously
// Usage: node restart-supermario-javascript.js

const { exec } = require('child_process');

exec('docker start supermario', (error, stdout, stderr) => {
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
