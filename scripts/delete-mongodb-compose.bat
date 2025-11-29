@echo off
REM Delete Docker Compose Services and Volumes - Batch Script
REM This script stops and removes all containers defined in docker-compose.yaml
REM The -v flag also removes associated volumes (data will be lost)
REM Use this for a complete cleanup of all resources

docker compose down -v
