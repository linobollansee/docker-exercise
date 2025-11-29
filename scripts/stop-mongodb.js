// Stop Docker MongoDB Container - JavaScript (Node.js) Script
// This script stops the running MongoDB container named 'testmongo'
// The container will be stopped but not removed
// Usage: node stop-docker-javascript.js

const { exec } = require('child_process');

exec('docker stop testmongo', (error, stdout, stderr) => {
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