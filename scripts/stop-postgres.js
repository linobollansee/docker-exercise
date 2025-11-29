// Stop PostgreSQL Docker Container - JavaScript (Node.js) Script
// This script stops the running PostgreSQL container named 'testpostgres'
// The container will be stopped but not removed
// Usage: node stop-postgres-javascript.js

const { exec } = require('child_process');

exec('docker stop testpostgres', (error, stdout, stderr) => {
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
