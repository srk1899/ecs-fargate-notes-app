# Notes API (ECS Fargate Deployment)

A simple Express.js API deployed using ECS Fargate, ECR, and GitHub Actions.

## Endpoints

- GET `/notes`
- POST `/notes`

## Deployment

- Infrastructure: Terraform (`terraform/`)
- CI/CD: GitHub Actions (`.github/workflows/deploy.yml`)
- App: Node.js Express (`app/`)
