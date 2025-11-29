#!/bin/bash

# Start Multi-Service Docker Compose - Bash Script
# This script starts MongoDB and PostgreSQL services defined in docker-compose-multi.yaml
# The -d flag runs containers in detached mode (background)
# Services will be created if they don't exist

docker compose -f docker-compose-multi.yaml up -d
