@echo off
REM Start PostgreSQL Docker Compose Services - Batch Script
REM This script starts PostgreSQL service defined in docker-compose-postgres.yaml
REM The -d flag runs containers in detached mode (background)
REM Service will be created if it doesn't exist

docker compose -f docker-compose-postgres.yaml up -d
