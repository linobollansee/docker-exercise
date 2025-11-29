# Start PostgreSQL Docker Container - PowerShell Script
# This script creates and starts a PostgreSQL container
# Container name: testpostgres
# Port mapping: 5432 (host) -> 5432 (container)
# Database password: mysecretpassword
# Runs in detached mode (background)

docker run `
  --name testpostgres `
  -e POSTGRES_PASSWORD=mysecretpassword `
  -p 5432:5432 `
  -d `
  postgres:latest
