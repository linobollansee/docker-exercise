@echo off
REM Start Docker MongoDB Container - Batch Script
REM This script creates and starts a MongoDB container
REM Container name: testmongo
REM Port mapping: 27017 (host) -> 27017 (container)
REM Runs in detached mode (background)

docker run ^
  --name testmongo ^
  -p 27017:27017 ^
  -d ^
  mongo:latest