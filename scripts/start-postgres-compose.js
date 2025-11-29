// Start PostgreSQL Docker Compose Services - JavaScript (Node.js) Script
// This script starts PostgreSQL service defined in docker-compose-postgres.yaml
// The -d flag runs containers in detached mode (background)
// Service will be created if it doesn't exist
// Usage: node start-postgres-compose-javascript.js

const { exec } = require('child_process');

exec('docker compose -f docker-compose-postgres.yaml up -d', (error, stdout, stderr) => {
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
