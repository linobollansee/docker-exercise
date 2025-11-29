#!/bin/bash

# Start Docker MongoDB Container - Bash Script
# This script creates and starts a MongoDB container
# Container name: testmongo
# Port mapping: 27017 (host) -> 27017 (container)
# Runs in detached mode (background)

docker run \
  --name testmongo \
  -p 27017:27017 \
  -d \
  mongo:latest
