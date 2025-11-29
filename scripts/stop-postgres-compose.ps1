# Stop PostgreSQL Docker Compose Services - PowerShell Script
# This script stops and removes PostgreSQL containers defined in docker-compose-postgres.yaml
# Networks created by docker compose will also be removed
# Volumes are preserved (use -v flag to remove volumes)

docker compose -f docker-compose-postgres.yaml down
