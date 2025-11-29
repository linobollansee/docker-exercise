// Start PostgreSQL Docker Container - JavaScript (Node.js) Script
// This script creates and starts a PostgreSQL container
// Container name: testpostgres
// Port mapping: 5432 (host) -> 5432 (container)
// Database password: mysecretpassword
// Runs in detached mode (background)
// Usage: node start-postgres-javascript.js

const { exec } = require('child_process');

exec('docker run --name testpostgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres:latest', (error, stdout, stderr) => {
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
