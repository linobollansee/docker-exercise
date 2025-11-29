// Start Multi-Service Docker Compose - JavaScript (Node.js) Script
// This script starts MongoDB and PostgreSQL services defined in docker-compose-multi.yaml
// The -d flag runs containers in detached mode (background)
// Services will be created if they don't exist
// Usage: node start-multi-compose-javascript.js

const { exec } = require('child_process');

exec('docker compose -f docker-compose-multi.yaml up -d', (error, stdout, stderr) => {
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
