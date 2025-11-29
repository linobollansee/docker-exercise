# Docker Exercise Guide | Docker-Übungsleitfaden

[English](#english) | [Deutsch](#deutsch)

---

## English

### Overview
This guide provides hands-on exercises to learn Docker fundamentals through practical examples. You'll work with containerized applications and databases while mastering essential Docker commands and concepts.

### Prerequisites
- Docker Desktop installed on your system
- Basic command-line knowledge
- A web browser for testing web-based applications

---

## Exercise 1: Super Mario in Docker

### Objective
Deploy and manage a containerized Super Mario game to learn basic Docker container lifecycle operations.

### Installation

First, install Docker Desktop using one of the following methods:

**Option 1: Windows Package Manager**
```powershell
winget install Docker.DockerDesktop
```

**Option 2: Chocolatey**
```powershell
choco install docker-desktop
```

**Option 3: Manual Download**
Download from [Docker's official website](https://www.docker.com/products/docker-desktop/)

### Instructions

**Step 1: Start the Container**

Deploy the Super Mario container from [Docker Hub](https://hub.docker.com/r/pengbai/docker-supermario/):

```powershell
docker run -d -p 8600:8080 --name supermario pengbai/docker-supermario
```

**Command Breakdown:**
- `-d`: Run in detached mode (background)
- `-p 8600:8080`: Map port 8600 (host) to 8080 (container)
- `--name supermario`: Assign a friendly name to the container

**Step 2: Access the Game**

Open your browser and navigate to: http://localhost:8600

**Step 3: Play the Game**

Controls:
- **Arrow keys**: Movement
- **S**: Jump and confirm

Take a break and complete the first level!

**Step 4: List Running Containers**

View all active containers:
```powershell
docker ps
```

**Step 5: Stop the Container**

```powershell
docker stop supermario
```

**Step 6: Restart the Container**

```powershell
docker start supermario
```

**Step 7: Stop Again**

```powershell
docker stop supermario
```

**Step 8: Remove the Container**

```powershell
docker rm supermario
```

**Alternative:** Stop and remove in one command:
```powershell
docker rm -f supermario
```

---

## Exercise 2: MongoDB in Docker

### Objective
Deploy a MongoDB NoSQL database container and connect to it using database clients.

### Instructions

**Step 1: Deploy MongoDB**

Choose your preferred method:

**PowerShell:**
```powershell
docker run `
  --name testmongo `
  -p 27017:27017 `
  -d `
  mongo:latest
```

**Batch:**
```batch
docker run ^
  --name testmongo ^
  -p 27017:27017 ^
  -d ^
  mongo:latest
```

**Bash:**
```bash
docker run \
  --name testmongo \
  -p 27017:27017 \
  -d \
  mongo:latest
```

**Docker Compose:**

Create a file named `docker-compose.yml`:
```yaml
version: "3"
services:
  mongo:
    image: mongo:latest
    container_name: testmongo
    ports:
      - "27017:27017"
    restart: always
```

Run with:
```powershell
docker compose up -d
```

**JavaScript (Node.js):**
```javascript
const { exec } = require('child_process');

exec('docker run --name testmongo -p 27017:27017 -d mongo:latest', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
```

**Step 2: Verify Container is Running**

```powershell
docker ps
```

Check logs:
```powershell
docker logs testmongo
```

**Step 3: Install MongoDB Compass (Optional)**

MongoDB Compass is the official GUI client for MongoDB. Install using one of these methods:

**Option 1: Windows Package Manager**
```powershell
winget install MongoDB.Compass.Full
```

**Option 2: Chocolatey**
```powershell
choco install mongodb-compass
```

**Option 3: Manual Download**
Download from [MongoDB Compass Official Site](https://www.mongodb.com/products/tools/compass)

**Step 4: Connect to MongoDB**

**Option A: MongoDB Compass (GUI)**
- Connection String: `mongodb://localhost:27017`

**Option B: Command Line (via container)**
```powershell
docker exec -it testmongo mongosh
```

**Option C: Local mongosh client**
```powershell
mongosh mongodb://localhost:27017
```

**Step 5: Stop the Container**

**Docker Run method:**
```powershell
docker stop testmongo
```

**Docker Compose method:**
```powershell
docker compose down
```

### Docker Compose vs Docker Run

**Docker Run:**
- Executes a single container with all configuration as command-line flags
- Quick for testing and simple deployments
- Configuration not easily reproducible

**Docker Compose:**
- Uses YAML files to define container configuration
- Benefits:
  - Version control your infrastructure
  - Manage multiple containers simultaneously
  - Easy to share with team members
  - Reproducible deployments
  - No need to remember complex command-line flags

To use Docker Compose:
1. Save the YAML configuration as `docker-compose.yml`
2. Run `docker compose up -d` to start
3. Run `docker compose down` to stop and remove

---

## Exercise 3: PostgreSQL in Docker

### Objective
Deploy a PostgreSQL relational database container with environment configuration and establish database connections.

### Instructions

**Step 1: Deploy PostgreSQL**

Choose your preferred method:

**PowerShell:**
```powershell
docker run `
  --name testpostgres `
  -e POSTGRES_PASSWORD=mysecretpassword `
  -p 5432:5432 `
  -d `
  postgres:latest
```

**Batch:**
```batch
docker run ^
  --name testpostgres ^
  -e POSTGRES_PASSWORD=mysecretpassword ^
  -p 5432:5432 ^
  -d ^
  postgres:latest
```

**Bash:**
```bash
docker run \
  --name testpostgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -p 5432:5432 \
  -d \
  postgres:latest
```

**Docker Compose:**

Create a file named `docker-compose.yml`:
```yaml
version: "3"
services:
  postgres:
    image: postgres:latest
    container_name: testpostgres
    environment:
      POSTGRES_PASSWORD: mysecretpassword
    ports:
      - "5432:5432"
    restart: always
```

Run with:
```powershell
docker compose up -d
```

**JavaScript (Node.js):**
```javascript
const { exec } = require('child_process');

exec('docker run --name testpostgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres:latest', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
```

**Command Breakdown:**
- `-e POSTGRES_PASSWORD=mysecretpassword`: Set environment variable for database password

**Step 2: Verify Container is Running**

```powershell
docker ps
```

Check logs:
```powershell
docker logs testpostgres
```

**Step 3: Install pgAdmin (Optional)**

pgAdmin is the most popular open-source GUI client for PostgreSQL. Install using one of these methods:

**Option 1: Windows Package Manager**
```powershell
winget install PostgreSQL.pgAdmin
```

**Option 2: Chocolatey**
```powershell
choco install pgadmin4
```

**Option 3: Manual Download**
Download from [pgAdmin Official Site](https://www.pgadmin.org/download/pgadmin-4-windows/)

**Option 4: Run pgAdmin in Docker**
```powershell
docker run -d `
  --name pgadmin `
  -p 5050:80 `
  -e PGADMIN_DEFAULT_EMAIL=admin@example.com `
  -e PGADMIN_DEFAULT_PASSWORD=admin `
  dpage/pgadmin4
```
Access at: http://localhost:5050

**Step 4: Connect to PostgreSQL**

**Option A: pgAdmin (GUI)**

Connection Parameters:
- **Host:** localhost
- **Port:** 5432
- **Username:** postgres
- **Password:** mysecretpassword
- **Database:** postgres

**Option B: Command Line (via container)**
```powershell
docker exec -it testpostgres psql -U postgres
```

**Option C: Local psql client**
```powershell
psql -h localhost -p 5432 -U postgres
```

**Step 5: Stop the Container**

**Docker Run method:**
```powershell
docker stop testpostgres
```

**Docker Compose method:**
```powershell
docker compose down
```

### Multi-Service Docker Compose Example

You can define multiple services in a single `docker-compose.yml`:

```yaml
version: "3"
services:
  mongo:
    image: mongo:latest
    container_name: testmongo
    ports:
      - "27017:27017"
    restart: always
  
  postgres:
    image: postgres:latest
    container_name: testpostgres
    environment:
      POSTGRES_PASSWORD: mysecretpassword
    ports:
      - "5432:5432"
    restart: always
```

Start all services with one command:
```powershell
docker compose up -d
```

---

## Appendix: Useful Docker Images

### Databases
- **mongo** - MongoDB NoSQL database
- **postgres** - PostgreSQL relational database
- **mysql** - MySQL relational database
- **redis** - Redis in-memory data structure store
- **elasticsearch** - Elasticsearch search and analytics engine

### Web Servers & Reverse Proxies
- **nginx** - High-performance web server and reverse proxy
- **httpd** - Apache HTTP Server
- **traefik** - Modern HTTP reverse proxy and load balancer
- **caddy** - Web server with automatic HTTPS

### Development Tools
- **node** - Node.js JavaScript runtime
- **python** - Python programming language
- **golang** - Go programming language
- **openjdk** - OpenJDK Java Development Kit
- **php** - PHP scripting language

### CMS & Applications
- **wordpress** - WordPress content management system
- **ghost** - Ghost blogging platform
- **nextcloud** - Nextcloud file sharing and collaboration platform
- **gitea** - Lightweight Git service
- **jenkins** - Jenkins automation server

### Monitoring & Observability
- **grafana/grafana** - Grafana analytics and monitoring
- **prom/prometheus** - Prometheus monitoring system
- **influxdb** - InfluxDB time series database

### Fun & Games
- **pengbai/docker-supermario** - Super Mario game in browser
- **dorowu/ubuntu-desktop-lxde-vnc** - Ubuntu desktop in browser
- **linuxserver/plex** - Plex media server
- **emby/embyserver** - Emby media server

### Development Environments
- **vscode/devcontainers** - VS Code development containers
- **jupyter/datascience-notebook** - Jupyter notebook for data science
- **mariadb** - MariaDB database server

### Utilities
- **portainer/portainer-ce** - Docker management UI
- **watchtower** - Automatic Docker container updates
- **hello-world** - Simple test container

---

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

## Next Steps

After completing these exercises, consider exploring:
- Creating custom Dockerfiles
- Docker volumes for data persistence
- Docker networks for container communication
- Multi-stage builds
- Container orchestration with Kubernetes

---

## Deutsch

### Überblick
Dieser Leitfaden bietet praktische Übungen zum Erlernen der Docker-Grundlagen anhand praktischer Beispiele. Sie arbeiten mit containerisierten Anwendungen und Datenbanken und beherrschen dabei wichtige Docker-Befehle und -Konzepte.

### Voraussetzungen
- Docker Desktop auf Ihrem System installiert
- Grundlegende Befehlszeilenkenntnisse
- Ein Webbrowser zum Testen webbasierter Anwendungen

---

## Übung 1: Super Mario in Docker

### Ziel
Bereitstellen und Verwalten eines containerisierten Super Mario-Spiels, um grundlegende Docker-Container-Lebenszyklusoperationen zu erlernen.

### Installation

Installieren Sie zunächst Docker Desktop mit einer der folgenden Methoden:

**Option 1: Windows Package Manager**
```powershell
winget install Docker.DockerDesktop
```

**Option 2: Chocolatey**
```powershell
choco install docker-desktop
```

**Option 3: Manueller Download**
Herunterladen von der [offiziellen Docker-Website](https://www.docker.com/products/docker-desktop/)

### Anweisungen

**Schritt 1: Container starten**

Stellen Sie den Super Mario-Container von [Docker Hub](https://hub.docker.com/r/pengbai/docker-supermario/) bereit:

```powershell
docker run -d -p 8600:8080 --name supermario pengbai/docker-supermario
```

**Befehlsaufschlüsselung:**
- `-d`: Im Hintergrundmodus ausführen (detached)
- `-p 8600:8080`: Port 8600 (Host) auf 8080 (Container) mappen
- `--name supermario`: Dem Container einen benutzerfreundlichen Namen zuweisen

**Schritt 2: Auf das Spiel zugreifen**

Öffnen Sie Ihren Browser und navigieren Sie zu: http://localhost:8600

**Schritt 3: Spiel spielen**

Steuerung:
- **Pfeiltasten**: Bewegung
- **S**: Springen und bestätigen

Machen Sie eine Pause und schließen Sie das erste Level ab!

**Schritt 4: Laufende Container auflisten**

Alle aktiven Container anzeigen:
```powershell
docker ps
```

**Schritt 5: Container stoppen**

```powershell
docker stop supermario
```

**Schritt 6: Container neu starten**

```powershell
docker start supermario
```

**Schritt 7: Erneut stoppen**

```powershell
docker stop supermario
```

**Schritt 8: Container entfernen**

```powershell
docker rm supermario
```

**Alternative:** Stoppen und in einem Befehl entfernen:
```powershell
docker rm -f supermario
```

---

## Übung 2: MongoDB in Docker

### Ziel
Bereitstellen eines MongoDB NoSQL-Datenbankcontainers und Verbinden mit Datenbank-Clients.

### Anweisungen

**Schritt 1: MongoDB bereitstellen**

Wählen Sie Ihre bevorzugte Methode:

**PowerShell:**
```powershell
docker run `
  --name testmongo `
  -p 27017:27017 `
  -d `
  mongo:latest
```

**Batch:**
```batch
docker run ^
  --name testmongo ^
  -p 27017:27017 ^
  -d ^
  mongo:latest
```

**Bash:**
```bash
docker run \
  --name testmongo \
  -p 27017:27017 \
  -d \
  mongo:latest
```

**Docker Compose:**

Erstellen Sie eine Datei namens `docker-compose.yml`:
```yaml
version: "3"
services:
  mongo:
    image: mongo:latest
    container_name: testmongo
    ports:
      - "27017:27017"
    restart: always
```

Ausführen mit:
```powershell
docker compose up -d
```

**JavaScript (Node.js):**
```javascript
const { exec } = require('child_process');

exec('docker run --name testmongo -p 27017:27017 -d mongo:latest', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
```

**Schritt 2: Container-Betrieb überprüfen**

```powershell
docker ps
```

Logs überprüfen:
```powershell
docker logs testmongo
```

**Schritt 3: MongoDB Compass installieren (Optional)**

MongoDB Compass ist der offizielle GUI-Client für MongoDB. Installation mit einer dieser Methoden:

**Option 1: Windows Package Manager**
```powershell
winget install MongoDB.Compass.Full
```

**Option 2: Chocolatey**
```powershell
choco install mongodb-compass
```

**Option 3: Manueller Download**
Download von der [MongoDB Compass offiziellen Website](https://www.mongodb.com/products/tools/compass)

**Schritt 4: Mit MongoDB verbinden**

**Option A: MongoDB Compass (GUI)**
- Verbindungszeichenfolge: `mongodb://localhost:27017`

**Option B: Befehlszeile (über Container)**
```powershell
docker exec -it testmongo mongosh
```

**Option C: Lokaler mongosh-Client**
```powershell
mongosh mongodb://localhost:27017
```

**Schritt 5: Container stoppen**

**Docker Run-Methode:**
```powershell
docker stop testmongo
```

**Docker Compose-Methode:**
```powershell
docker compose down
```

### Docker Compose vs Docker Run

**Docker Run:**
- Führt einen einzelnen Container mit allen Konfigurationen als Befehlszeilen-Flags aus
- Schnell für Tests und einfache Bereitstellungen
- Konfiguration nicht leicht reproduzierbar

**Docker Compose:**
- Verwendet YAML-Dateien zur Definition der Container-Konfiguration
- Vorteile:
  - Versionskontrolle Ihrer Infrastruktur
  - Gleichzeitiges Verwalten mehrerer Container
  - Einfaches Teilen mit Teammitgliedern
  - Reproduzierbare Bereitstellungen
  - Keine komplexen Befehlszeilen-Flags merken

Docker Compose verwenden:
1. YAML-Konfiguration als `docker-compose.yml` speichern
2. `docker compose up -d` zum Starten ausführen
3. `docker compose down` zum Stoppen und Entfernen ausführen

---

## Übung 3: PostgreSQL in Docker

### Ziel
Bereitstellen eines PostgreSQL relationalen Datenbankcontainers mit Umgebungskonfiguration und Aufbau von Datenbankverbindungen.

### Anweisungen

**Schritt 1: PostgreSQL bereitstellen**

Wählen Sie Ihre bevorzugte Methode:

**PowerShell:**
```powershell
docker run `
  --name testpostgres `
  -e POSTGRES_PASSWORD=mysecretpassword `
  -p 5432:5432 `
  -d `
  postgres:latest
```

**Batch:**
```batch
docker run ^
  --name testpostgres ^
  -e POSTGRES_PASSWORD=mysecretpassword ^
  -p 5432:5432 ^
  -d ^
  postgres:latest
```

**Bash:**
```bash
docker run \
  --name testpostgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -p 5432:5432 \
  -d \
  postgres:latest
```

**Docker Compose:**

Erstellen Sie eine Datei namens `docker-compose.yml`:
```yaml
version: "3"
services:
  postgres:
    image: postgres:latest
    container_name: testpostgres
    environment:
      POSTGRES_PASSWORD: mysecretpassword
    ports:
      - "5432:5432"
    restart: always
```

Ausführen mit:
```powershell
docker compose up -d
```

**JavaScript (Node.js):**
```javascript
const { exec } = require('child_process');

exec('docker run --name testpostgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres:latest', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
```

**Befehlsaufschlüsselung:**
- `-e POSTGRES_PASSWORD=mysecretpassword`: Umgebungsvariable für Datenbankpasswort setzen

**Schritt 2: Container-Betrieb überprüfen**

```powershell
docker ps
```

Logs überprüfen:
```powershell
docker logs testpostgres
```

**Schritt 3: pgAdmin installieren (Optional)**

pgAdmin ist der beliebteste Open-Source-GUI-Client für PostgreSQL. Installation mit einer dieser Methoden:

**Option 1: Windows Package Manager**
```powershell
winget install PostgreSQL.pgAdmin
```

**Option 2: Chocolatey**
```powershell
choco install pgadmin4
```

**Option 3: Manueller Download**
Download von der [pgAdmin offiziellen Website](https://www.pgadmin.org/download/pgadmin-4-windows/)

**Option 4: pgAdmin in Docker ausführen**
```powershell
docker run -d `
  --name pgadmin `
  -p 5050:80 `
  -e PGADMIN_DEFAULT_EMAIL=admin@example.com `
  -e PGADMIN_DEFAULT_PASSWORD=admin `
  dpage/pgadmin4
```
Zugriff unter: http://localhost:5050

**Schritt 4: Mit PostgreSQL verbinden**

**Option A: pgAdmin (GUI)**

Verbindungsparameter:
- **Host:** localhost
- **Port:** 5432
- **Benutzername:** postgres
- **Passwort:** mysecretpassword
- **Datenbank:** postgres

**Option B: Befehlszeile (über Container)**
```powershell
docker exec -it testpostgres psql -U postgres
```

**Option C: Lokaler psql-Client**
```powershell
psql -h localhost -p 5432 -U postgres
```

**Schritt 5: Container stoppen**

**Docker Run-Methode:**
```powershell
docker stop testpostgres
```

**Docker Compose-Methode:**
```powershell
docker compose down
```

### Multi-Service Docker Compose Beispiel

Sie können mehrere Services in einer einzigen `docker-compose.yml` definieren:

```yaml
version: "3"
services:
  mongo:
    image: mongo:latest
    container_name: testmongo
    ports:
      - "27017:27017"
    restart: always
  
  postgres:
    image: postgres:latest
    container_name: testpostgres
    environment:
      POSTGRES_PASSWORD: mysecretpassword
    ports:
      - "5432:5432"
    restart: always
```

Alle Services mit einem Befehl starten:
```powershell
docker compose up -d
```

---

## Anhang: Nützliche Docker Images

### Datenbanken
- **mongo** - MongoDB NoSQL-Datenbank
- **postgres** - PostgreSQL relationale Datenbank
- **mysql** - MySQL relationale Datenbank
- **redis** - Redis In-Memory-Datenstrukturspeicher
- **elasticsearch** - Elasticsearch Such- und Analysemodul

### Webserver & Reverse Proxies
- **nginx** - Hochleistungs-Webserver und Reverse Proxy
- **httpd** - Apache HTTP Server
- **traefik** - Moderner HTTP-Reverse-Proxy und Load Balancer
- **caddy** - Webserver mit automatischem HTTPS

### Entwicklungstools
- **node** - Node.js JavaScript-Laufzeitumgebung
- **python** - Python-Programmiersprache
- **golang** - Go-Programmiersprache
- **openjdk** - OpenJDK Java Development Kit
- **php** - PHP-Skriptsprache

### CMS & Anwendungen
- **wordpress** - WordPress Content Management System
- **ghost** - Ghost Blogging-Plattform
- **nextcloud** - Nextcloud Dateifreigabe und Zusammenarbeit
- **gitea** - Leichtgewichtiger Git-Service
- **jenkins** - Jenkins Automatisierungsserver

### Monitoring & Observability
- **grafana/grafana** - Grafana Analyse und Monitoring
- **prom/prometheus** - Prometheus Monitoring-System
- **influxdb** - InfluxDB Zeitreihendatenbank

### Spaß & Spiele
- **pengbai/docker-supermario** - Super Mario Spiel im Browser
- **dorowu/ubuntu-desktop-lxde-vnc** - Ubuntu Desktop im Browser
- **linuxserver/plex** - Plex Medienserver
- **emby/embyserver** - Emby Medienserver

### Entwicklungsumgebungen
- **vscode/devcontainers** - VS Code Entwicklungscontainer
- **jupyter/datascience-notebook** - Jupyter Notebook für Data Science
- **mariadb** - MariaDB Datenbankserver

### Dienstprogramme
- **portainer/portainer-ce** - Docker-Verwaltungs-UI
- **watchtower** - Automatische Docker-Container-Updates
- **hello-world** - Einfacher Test-Container

---

## Zusätzliche Ressourcen

- [Docker Dokumentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Compose Dokumentation](https://docs.docker.com/compose/)

## Nächste Schritte

Nach Abschluss dieser Übungen sollten Sie Folgendes erkunden:
- Erstellen benutzerdefinierter Dockerfiles
- Docker-Volumes für Datenpersistenz
- Docker-Netzwerke für Container-Kommunikation
- Mehrstufige Builds
- Container-Orchestrierung mit Kubernetes
