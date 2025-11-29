#!/bin/bash

# Delete pgAdmin Docker Container - Bash Script
# This script removes the pgAdmin container named 'pgadmin'
# Note: Container must be stopped before it can be removed
# Use 'docker rm -f pgadmin' to force remove a running container

docker rm pgadmin
