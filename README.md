# VercelBackBuild-version1

### Project Introduction

**VercelBackBuild** is a backend automated build and deployment system inspired by Vercel. This project focuses on implementing continuous integration and deployment (CI/CD) for web applications, reducing manual operations through automated workflows and enhancing deployment efficiency. The system utilizes Node.js and express.js to build backend services, **Docker** for encapsulating and running applications, **AWS S3** for storing build images, and **AWS ECS & ECR** for scalable container management and image storage. Additionally, it integrates **Redis and WebSocket** to provide real-time log feedback during the build process.

### Technologies Used

- Backend: Node.js, Express.js
- Containers: Docker, AWS ECS, AWS ECR
- Storage: AWS S3
- Log Collections Pipeline: WebSocket, Redis
- Others: CI/CD, Reverse Proxy, System Design, Postman API

### Project Structure and architecture diagram

- `api-server`: HTTP API Server for REST API's to handle request.
- `build-server`: Docker Image for executing code builds, cloning repositories, building projects, and pushing to S3
- `s3-reverse-proxy`: Reverse Proxy the subdomains and domains to static resources in S3 buckets.

Services would be running:

| Service            | PORT    |
| ------------------ | ------- |
| `api-server`       | `:9000` |
| `socket.io-server` | `:9002` |
| `s3-reverse-proxy` | `:8000` |


![Architecture diagram](https://i.imgur.com/r7QUXqZ.png)
