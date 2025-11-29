@echo off
REM Stop PostgreSQL Docker Container - Batch Script
REM This script stops the running PostgreSQL container named 'testpostgres'
REM The container will be stopped but not removed

docker stop testpostgres
