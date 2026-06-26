pipeline {
agent any
environment {
AWS_REGION = 'ap-south-2'
ECR_REPO = '100984277793.dkr.ecr.ap-south-2.amazonaws.com/myapp'
}
stages {
stage('Checkout') {
steps {
git branch: 'main',
url: 'https://github.com/kongarashiva/react-app.git'
}
}
stage('Build Docker Image') {
steps {
sh 'docker build -t react-app .'
}
}
stage('Login ECR') {
steps {
sh '''
aws ecr get-login-password --region $AWS_REGION | \
docker login --username AWS \
--password-stdin $ECR_REPO
'''
}
}
stage('Push Image') {
steps {
sh '''
docker tag react-app:latest $ECR_REPO:latest
docker push $ECR_REPO:latest
'''
}
}
stage('Deploy') {
steps {
sh '''
ssh -o StrictHostKeyChecking=no ec2-user@18.60.56.240  "
aws ecr get-login-password --region ap-south-2 | \
docker login --username AWS \
--password-stdin 100984277793.dkr.ecr.ap-south-2.amazonaws.com
docker pull 100984277793.dkr.ecr.ap-south-2.amazonaws.com/myapp:latest
docker stop myapp || true
docker rm myapp || true
docker run -d --name myapp -p 80:80 \
100984277793.dkr.ecr.ap-south-2.amazonaws.com/myapp:latest
"
'''
}
}
}
}
 
