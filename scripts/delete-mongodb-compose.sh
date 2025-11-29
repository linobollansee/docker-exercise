#!/bin/bash

# Delete Docker Compose Services and Volumes - Bash Script
# This script stops and removes all containers defined in docker-compose.yaml
# The -v flag also removes associated volumes (data will be lost)
# Use this for a complete cleanup of all resources

docker compose down -v
