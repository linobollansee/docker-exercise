@echo off
REM Delete pgAdmin Docker Container - Batch Script
REM This script removes the pgAdmin container named 'pgadmin'
REM Note: Container must be stopped before it can be removed
REM Use 'docker rm -f pgadmin' to force remove a running container

docker rm pgadmin
