pipeline {
  agent any
  stages {
    stage('Prepare') {
      steps {
        sh 'echo \'Prepare\''
      }
    }

    stage('Ci-Cache-load') {
      steps {
        sh 'echo \'Ci-Cache-load\''
      }
    }

    stage('Build') {
      steps {
        sh 'echo \'build\''
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo \'Deploy\''
      }
    }

    stage('DRMS-Sync') {
      steps {
        sh 'echo \'DRMS-Sync\''
      }
    }

    stage('Notice') {
      steps {
        sh 'echo \'Notice\''
      }
    }

    stage('CI-Cache-Update') {
      steps {
        sh 'echo \'CI-Cache-Update\''
      }
    }

    stage('End') {
      steps {
        sh 'echo \'End\''
      }
    }

  }
}