#!/bin/bash

# Delete PostgreSQL Docker Compose Services and Volumes - Bash Script
# This script stops and removes PostgreSQL containers defined in docker-compose-postgres.yaml
# The -v flag also removes associated volumes (data will be lost)
# Use this for a complete cleanup of all resources

docker compose -f docker-compose-postgres.yaml down -v
