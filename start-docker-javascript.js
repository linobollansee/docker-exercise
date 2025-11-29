const { exec } = require('child_process');

exec('docker run --name testmongo -p 27017:27017 -d mongo:latest');
