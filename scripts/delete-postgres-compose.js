// Delete PostgreSQL Docker Compose Services and Volumes - JavaScript (Node.js) Script
// This script stops and removes PostgreSQL containers defined in docker-compose-postgres.yaml
// The -v flag also removes associated volumes (data will be lost)
// Use this for a complete cleanup of all resources
// Usage: node delete-postgres-compose-javascript.js

const { exec } = require('child_process');

exec('docker compose -f docker-compose-postgres.yaml down -v', (error, stdout, stderr) => {
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
