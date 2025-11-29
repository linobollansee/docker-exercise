@echo off
REM Stop Docker Compose Services - Batch Script
REM This script stops and removes all containers defined in docker-compose.yaml
REM Networks created by docker compose will also be removed
REM Volumes are preserved (use -v flag to remove volumes)

docker compose down
