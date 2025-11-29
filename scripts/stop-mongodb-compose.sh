#!/bin/bash

# Stop Docker Compose Services - Bash Script
# This script stops and removes all containers defined in docker-compose.yaml
# Networks created by docker compose will also be removed
# Volumes are preserved (use -v flag to remove volumes)

docker compose down
