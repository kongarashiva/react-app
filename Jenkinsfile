ipeline {
agent any
stages {
stage('Checkout') {
steps {
git 'https://github.com/kongarashiva/react-app.git'
}
}
stage('Build Docker Image') {
steps {
sh 'docker build -t react-app .'
}
}
}
}
