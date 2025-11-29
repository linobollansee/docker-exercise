// Start pgAdmin Docker Container - JavaScript (Node.js) Script
// This script creates and starts a pgAdmin container
// Container name: pgadmin
// Port mapping: 5050 (host) -> 80 (container)
// Default login: admin@example.com / admin
// Access at: http://localhost:5050
// Runs in detached mode (background)
// Usage: node start-pgadmin-javascript.js

const { exec } = require('child_process');

exec('docker run -d --name pgadmin -p 5050:80 -e PGADMIN_DEFAULT_EMAIL=admin@example.com -e PGADMIN_DEFAULT_PASSWORD=admin dpage/pgadmin4', (error, stdout, stderr) => {
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
