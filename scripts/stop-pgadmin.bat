@echo off
REM Stop pgAdmin Docker Container - Batch Script
REM This script stops the running pgAdmin container named 'pgadmin'
REM The container will be stopped but not removed

docker stop pgadmin
