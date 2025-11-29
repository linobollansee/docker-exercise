@echo off
REM Start Multi-Service Docker Compose - Batch Script
REM This script starts MongoDB and PostgreSQL services defined in docker-compose-multi.yaml
REM The -d flag runs containers in detached mode (background)
REM Services will be created if they don't exist

docker compose -f docker-compose-multi.yaml up -d
