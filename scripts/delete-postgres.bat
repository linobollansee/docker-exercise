@echo off
REM Delete PostgreSQL Docker Container - Batch Script
REM This script removes the PostgreSQL container named 'testpostgres'
REM Note: Container must be stopped before it can be removed
REM Use 'docker rm -f testpostgres' to force remove a running container

docker rm testpostgres
