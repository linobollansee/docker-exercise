// Delete pgAdmin Docker Container - JavaScript (Node.js) Script
// This script removes the pgAdmin container named 'pgadmin'
// Note: Container must be stopped before it can be removed
// Use 'docker rm -f pgadmin' to force remove a running container
// Usage: node delete-pgadmin-javascript.js

const { exec } = require('child_process');

exec('docker rm pgadmin', (error, stdout, stderr) => {
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
