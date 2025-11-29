@echo off
REM Stop PostgreSQL Docker Compose Services - Batch Script
REM This script stops and removes PostgreSQL containers defined in docker-compose-postgres.yaml
REM Networks created by docker compose will also be removed
REM Volumes are preserved (use -v flag to remove volumes)

docker compose -f docker-compose-postgres.yaml down
