# Delete PostgreSQL Docker Container - PowerShell Script
# This script removes the PostgreSQL container named 'testpostgres'
# Note: Container must be stopped before it can be removed
# Use 'docker rm -f testpostgres' to force remove a running container

docker rm testpostgres
