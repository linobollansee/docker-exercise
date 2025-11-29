// Delete PostgreSQL Docker Container - JavaScript (Node.js) Script
// This script removes the PostgreSQL container named 'testpostgres'
// Note: Container must be stopped before it can be removed
// Use 'docker rm -f testpostgres' to force remove a running container
// Usage: node delete-postgres-javascript.js

const { exec } = require('child_process');

exec('docker rm testpostgres', (error, stdout, stderr) => {
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
