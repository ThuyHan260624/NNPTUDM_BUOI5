.PHONY: help build up down logs clean restart shell

help:
	@echo "Docker Commands for User & Role API"
	@echo "===================================="
	@echo "make build       - Build Docker image"
	@echo "make up          - Start container (background)"
	@echo "make up-dev      - Start container (foreground, for development)"
	@echo "make down        - Stop and remove container"
	@echo "make logs        - View container logs"
	@echo "make clean       - Remove image, container, and data"
	@echo "make restart     - Restart container"
	@echo "make shell       - Open shell in running container"

build:
	docker-compose build

up:
	docker-compose up -d
	@echo "✅ Application is running on http://localhost:5000"

up-dev:
	docker-compose up

down:
	docker-compose down
	@echo "✅ Container stopped"

logs:
	docker-compose logs -f app

clean:
	docker-compose down
	docker rmi user-role-api:latest 2>/dev/null || true
	rm -rf data/
	@echo "✅ Cleaned up Docker resources and data"

restart:
	docker-compose restart app
	@echo "✅ Container restarted"

shell:
	docker-compose exec app sh

ps:
	docker-compose ps

test-api:
	@echo "Testing User & Role API..."
	@echo "\n1. Get all roles:"
	curl -s http://localhost:5000/api/roles | jq .
	@echo "\n2. Get all users:"
	curl -s http://localhost:5000/api/users | jq .
