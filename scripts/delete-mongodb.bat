@echo off
REM Delete Docker MongoDB Container - Batch Script
REM This script removes the MongoDB container named 'testmongo'
REM Note: Container must be stopped before it can be removed
REM Use 'docker rm -f testmongo' to force remove a running container

docker rm testmongo
