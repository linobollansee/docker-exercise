// Stop Multi-Service Docker Compose - JavaScript (Node.js) Script
// This script stops and removes all containers defined in docker-compose-multi.yaml
// Networks created by docker compose will also be removed
// Volumes are preserved (use -v flag to remove volumes)
// Usage: node stop-multi-compose-javascript.js

const { exec } = require('child_process');

exec('docker compose -f docker-compose-multi.yaml down', (error, stdout, stderr) => {
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
