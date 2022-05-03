pipeline {
    agent any
    environment{
    NEW_VERSION = '1.3.0'
    }
    parameters{
        choice(name:'VERSION' , choices:['1.1.0','1.1.1','1.1.2'] , description:'')
        booleanParam(name:'executeTests',defaultValue:true,description:'')
    
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo "building version $NEW_VERSION}"
            }
        }
        stage('Test1') {
            when{
                expression{
                params.executeTests
                }
            
            }
            steps {
                echo 'Testing..'
            }
        }
        stage('Test2') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                echo "Deploying version from ${params.VERSION}"
           
            }
        }
    }
}
