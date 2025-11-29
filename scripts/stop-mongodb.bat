@echo off
REM Stop Docker MongoDB Container - Batch Script
REM This script stops the running MongoDB container named 'testmongo'
REM The container will be stopped but not removed

docker stop testmongo
