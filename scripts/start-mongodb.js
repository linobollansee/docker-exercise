// Start Docker MongoDB Container - JavaScript (Node.js) Script
// This script creates and starts a MongoDB container using child_process
// Container name: testmongo
// Port mapping: 27017 (host) -> 27017 (container)
// Runs in detached mode (background)
// Usage: node start-docker-javascript.js

const { exec } = require('child_process');

exec('docker run --name testmongo -p 27017:27017 -d mongo:latest', (error, stdout, stderr) => {
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