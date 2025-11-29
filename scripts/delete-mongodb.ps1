# Delete Docker MongoDB Container - PowerShell Script
# This script removes the MongoDB container named 'testmongo'
# Note: Container must be stopped before it can be removed
# Use 'docker rm -f testmongo' to force remove a running container

docker rm testmongo
