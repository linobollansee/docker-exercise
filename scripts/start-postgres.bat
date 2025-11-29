@echo off
REM Start PostgreSQL Docker Container - Batch Script
REM This script creates and starts a PostgreSQL container
REM Container name: testpostgres
REM Port mapping: 5432 (host) -> 5432 (container)
REM Database password: mysecretpassword
REM Runs in detached mode (background)

docker run ^
  --name testpostgres ^
  -e POSTGRES_PASSWORD=mysecretpassword ^
  -p 5432:5432 ^
  -d ^
  postgres:latest
