#!/bin/bash

# Start Super Mario Docker Container - Bash Script
# This script creates and starts a Super Mario game container
# Container name: supermario
# Port mapping: 8600 (host) -> 8080 (container)
# Runs in detached mode (background)

docker run -d -p 8600:8080 --name supermario pengbai/docker-supermario
