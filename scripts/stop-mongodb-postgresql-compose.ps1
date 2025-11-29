# Stop Multi-Service Docker Compose - PowerShell Script
# This script stops and removes all containers defined in docker-compose-multi.yaml
# Networks created by docker compose will also be removed
# Volumes are preserved (use -v flag to remove volumes)

docker compose -f docker-compose-multi.yaml down
