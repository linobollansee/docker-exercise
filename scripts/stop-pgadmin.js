// Stop pgAdmin Docker Container - JavaScript (Node.js) Script
// This script stops the running pgAdmin container named 'pgadmin'
// The container will be stopped but not removed
// Usage: node stop-pgadmin-javascript.js

const { exec } = require('child_process');

exec('docker stop pgadmin', (error, stdout, stderr) => {
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
