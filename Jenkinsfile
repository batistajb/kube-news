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
                    dockerapp.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                        dockerapp.push("latest")
                        dockerapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }
    }
}