@echo off
REM Start pgAdmin Docker Container - Batch Script
REM This script creates and starts a pgAdmin container
REM Container name: pgadmin
REM Port mapping: 5050 (host) -> 80 (container)
REM Default login: admin@example.com / admin
REM Access at: http://localhost:5050
REM Runs in detached mode (background)

docker run -d ^
  --name pgadmin ^
  -p 5050:80 ^
  -e PGADMIN_DEFAULT_EMAIL=admin@example.com ^
  -e PGADMIN_DEFAULT_PASSWORD=admin ^
  dpage/pgadmin4
