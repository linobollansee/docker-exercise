@echo off
REM Stop Multi-Service Docker Compose - Batch Script
REM This script stops and removes all containers defined in docker-compose-multi.yaml
REM Networks created by docker compose will also be removed
REM Volumes are preserved (use -v flag to remove volumes)

docker compose -f docker-compose-multi.yaml down
