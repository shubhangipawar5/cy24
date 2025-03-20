pipeline {
    agent any

    tools {
        nodejs "node"
    }

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git branch: 'main', url: 'https://github.com/shubhangipawar5/cy24.git'
                        bat 'npm install --legacy-peer-deps'
                        bat 'npm update'
                        bat 'npm run cy:dashboard'
                    }
                }

                stage('Slave Node2') {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git branch: 'main', url: 'https://github.com/shubhangipawar5/cy24.git'
                        bat 'npm install --legacy-peer-deps'
                        bat 'npm update'
                        bat 'npm run cy:dashboard'
                    }
                }
            }
        }
    }
}
