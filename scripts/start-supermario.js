// Start Super Mario Docker Container - JavaScript (Node.js) Script
// This script creates and starts a Super Mario game container
// Container name: supermario
// Port mapping: 8600 (host) -> 8080 (container)
// Runs in detached mode (background)
// Usage: node start-supermario-javascript.js

const { exec } = require('child_process');

exec('docker run -d -p 8600:8080 --name supermario pengbai/docker-supermario', (error, stdout, stderr) => {
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
