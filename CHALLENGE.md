# Docker Exercise
## Coding: Super Mario in Docker
Let your creativity flow and brainstorm together how you could implement the game ‘Super Mario’ in Docker.

Step 1: Install Docker Desktop on your Computer.

`winget install Docker.DockerDesktop`

or

`choco install docker-desktop`

or

<https://www.docker.com/products/docker-desktop/>

Step 2: Start the Super Mario retro container here.

Step 3: Play the first level as a reward. Tip: You can use the arrow keys for control. Press ‘s’ to jump and confirm.

Step 4: Stop the container.

Step 5: Start the container again.

Step 6: Stop the container.

Step 7: Delete the container.

## Coding: MongoDB in Docker

Start a MongoDB instance in your Docker.

Step 1: Research how to start a MongoDB database in a Docker container using the ‘docker run’ command.

Step 2: Start a MongoDB database locally in a Docker container.

bash
```bash
docker run \
  --name testmongo \
  -p 27017:27017 \
  -d \
  mongo:latest
```

or

powershell
```powershell
docker run `
  --name testmongo `
  -p 27017:27017 `
  -d `
  mongo:latest
```

or

batch
```batch
docker run ^
  --name testmongo ^
  -p 27017:27017 ^
  -d ^
  mongo:latest
```

or

yaml
```yaml
version: "3"
services:
  mongo:
    image: mongo:latest
    container_name: testmongo
    ports:
      - "27017:27017"
    restart: always
```
or

javascript
```javascript
const { exec } = require('child_process');

exec('docker run --name testmongo -p 27017:27017 -d mongo:latest', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
```

Step 3: Connect to the MongoDB database using a database tool of your choice (e.g., MongoDB Compass) or via the command line.

Step 4: Stop the container.

bash/powershell/batch
```
docker stop testmongo
```

docker compose
```
docker stop mongo
```
## Coding: PostgreSQL in Docker

Start a PostgreSQL instance in your Docker.

Step 1: Research how to start a PostgreSQL database in a Docker container using the ‘docker run’ command.

Step 2: Start a PostgreSQL database locally in a Docker container.

Step 3: Connect to the PostgreSQL database using a database tool of your choice (e.g., pgAdmin) or via the command line.

Step 4: Stop the container.

## Research: Docker Images

Research on dockerhub for any interesting images.