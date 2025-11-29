#!/bin/bash

# Start Docker Compose Services - Bash Script
# This script starts all services defined in docker-compose.yaml
# The -d flag runs containers in detached mode (background)
# Services will be created if they don't exist

docker compose up -d
