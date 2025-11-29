@echo off
REM Delete Super Mario Docker Container - Batch Script
REM This script removes the Super Mario container
REM Note: Container must be stopped before it can be removed
REM Use 'docker rm -f supermario' to force remove a running container

docker rm supermario
