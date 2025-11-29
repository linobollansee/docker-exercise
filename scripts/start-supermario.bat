@echo off
REM Start Super Mario Docker Container - Batch Script
REM This script creates and starts a Super Mario game container
REM Container name: supermario
REM Port mapping: 8600 (host) -> 8080 (container)
REM Runs in detached mode (background)

docker run -d -p 8600:8080 --name supermario pengbai/docker-supermario
