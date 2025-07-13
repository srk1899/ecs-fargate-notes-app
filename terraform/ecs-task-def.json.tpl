{
  "family": "notes-app-task",
  "networkMode": "awsvpc",
  "executionRoleArn": "arn:aws:iam::890742579135:role/ecsTaskExecutionRole",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "containerDefinitions": [
    {
      "name": "notes-app",
      "image": "{{ image }}",
      "essential": true,
      "portMappings": [
        {
          "containerPort": 80,
          "protocol": "tcp"
        }
      ]
    }
  ]
}