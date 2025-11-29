@echo off
REM Start Docker Compose Services - Batch Script
REM This script starts all services defined in docker-compose.yaml
REM The -d flag runs containers in detached mode (background)
REM Services will be created if they don't exist

docker compose up -d