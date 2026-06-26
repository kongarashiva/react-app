pipeline {
agent any
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
}
}
