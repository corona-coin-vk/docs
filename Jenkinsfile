env.LOADING_PATH = "/var/www/user/data/corona-coin/${env.BRANCH_NAME}/docs/loading"
env.DEPLOY_PATH = "/var/www/user/data/corona-coin/${env.BRANCH_NAME}/docs/static"

node {
  stage('Prepare workspace') {
    sh 'sudo chown -R jenkins:jenkins /var/lib/jenkins/workspace'
  }

  stage('Build') {
    checkout scm
    withNPM(npmrcConfig: 'ed68b7f8-c321-4791-ab16-7ac0dbfb6305') {
      docker.image('node:16.6.0-alpine').inside ('-u root:root') {
        sh 'npm install'
        sh 'npm run build'
      }
    }
  }

  stage('Deploy') {
    withCredentials([string(credentialsId: '86595e8e-6c97-4bdf-9945-5aa889c869c9', variable: 'DEPLOY_IP'), string(credentialsId: '75957c87-7c08-475d-b45b-24204b453306', variable: 'DEPLOY_USER')]) {
      sh 'ssh $DEPLOY_USER@$DEPLOY_IP mkdir -p $LOADING_PATH'
      sh 'scp -r build/* $DEPLOY_USER@$DEPLOY_IP:$LOADING_PATH'

      sh 'ssh $DEPLOY_USER@$DEPLOY_IP rm -rf $DEPLOY_PATH'
      sh 'ssh $DEPLOY_USER@$DEPLOY_IP mv $LOADING_PATH $DEPLOY_PATH'
    }
  }
}