pipeline{
    agent any

    tools{nodejs , "node"}

    stages{
        stage('Cypress Parellel Test Suite')

        parallel{
            stage('Slave Node1'){
                agent{
                    label "remote_node1"
                }
                steps{
                    git url: 'https://github.com/shubhangipawar5/cy24.git'
                    bat 'npm install'
                    bat 'npm update'
                    bat 'npm run cy:dashboard'
                }
            }

            stage('Slave Node2'){
                agent{
                    label "remote_node1"
                }
                steps{
                    git url: 'https://github.com/shubhangipawar5/cy24.git'
                    bat 'npm install'
                    bat 'npm update'
                    bat 'npm run cy:dashboard'
                }
            }
        }
    }
}