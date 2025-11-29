#!/bin/bash

# Start pgAdmin Docker Container - Bash Script
# This script creates and starts a pgAdmin container
# Container name: pgadmin
# Port mapping: 5050 (host) -> 80 (container)
# Default login: admin@example.com / admin
# Access at: http://localhost:5050
# Runs in detached mode (background)

docker run -d \
  --name pgadmin \
  -p 5050:80 \
  -e PGADMIN_DEFAULT_EMAIL=admin@example.com \
  -e PGADMIN_DEFAULT_PASSWORD=admin \
  dpage/pgadmin4
