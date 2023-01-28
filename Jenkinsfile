pipeline {
    agent any
    stages {
        stage('Build docker image') {
            steps {
                script {
                    dockerapp = docker.build("jbbatista/kube-news:${env.BUILD_ID}", "-f ./src/Dockerfile ./src")
                }
            }
        }
        stage('Push docker image') {
            steps {
                script {
                    dockerapp.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                        dockerapp.push("latest")
                        dockerapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }
    }
}