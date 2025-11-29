#!/bin/bash

# Start PostgreSQL Docker Compose Services - Bash Script
# This script starts PostgreSQL service defined in docker-compose-postgres.yaml
# The -d flag runs containers in detached mode (background)
# Service will be created if it doesn't exist

docker compose -f docker-compose-postgres.yaml up -d
