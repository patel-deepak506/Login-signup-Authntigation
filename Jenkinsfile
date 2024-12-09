pipeline {
    agent {
        docker { 
            image 'node:14' // Node.js Docker image
        }
    }
    environment {
        DOCKER_IMAGE = 'your-docker-repo/nodejs-app' // Replace with your Docker repo
        DOCKER_TAG = 'latest'
    }
    stages {
        stage('Clone Repository') {
            steps {
                checkout scm // Clones the repository
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // Installs Node.js dependencies
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test' // Runs tests
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh """
                    docker build -t $DOCKER_IMAGE:$DOCKER_TAG .
                    """
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    withDockerRegistry([credentialsId: 'docker-credentials', url: 'https://index.docker.io/v1/']) {
                        sh """
                        docker push $DOCKER_IMAGE:$DOCKER_TAG
                        """
                    }
                }
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
