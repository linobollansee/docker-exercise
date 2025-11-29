@echo off
REM Force Remove Super Mario Docker Container - Batch Script
REM This script forcefully removes the Super Mario container
REM Container will be stopped (if running) and removed in one command

docker rm -f supermario
