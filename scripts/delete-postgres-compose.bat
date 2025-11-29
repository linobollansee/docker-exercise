@echo off
REM Delete PostgreSQL Docker Compose Services and Volumes - Batch Script
REM This script stops and removes PostgreSQL containers defined in docker-compose-postgres.yaml
REM The -v flag also removes associated volumes (data will be lost)
REM Use this for a complete cleanup of all resources

docker compose -f docker-compose-postgres.yaml down -v
