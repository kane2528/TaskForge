A production-style Dockerized Task Manager API built using Node.js, Express, MySQL, Nginx, and deployed on AWS EC2.
This project demonstrates real-world backend architecture with containerized services, reverse proxy routing, database orchestration handling, and production-ready networking.

Browser
   ↓
Nginx (Reverse Proxy)
   ↓
Node.js API (Express)
   ↓
MySQL Database

Features
REST API for task management
Add / View / Delete tasks
MySQL persistent storage
Docker Compose orchestration
Nginx reverse proxy with /api/* routing
Health check endpoint
DB startup retry logic (handles container race condition)
Deployed on AWS EC2

TECH STACK
Node.js (Express)
MySQL
Nginx
Docker
Docker Compose
AWS EC2 (Free Tier)

To run program
git clone https://github.com/kane2528/TaskForge.git
cd TaskForge
docker compose up --build
SCREENSHOTS

<img width="1102" height="719" alt="image" src="https://github.com/user-attachments/assets/febaf161-a889-4729-84f3-0dcdc38921ca" />

<img width="778" height="676" alt="image" src="https://github.com/user-attachments/assets/f7dad175-3580-4db3-8dc9-877d5c9b980a" />

