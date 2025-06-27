pipeline {
    agent any  // Use any available Jenkins agent for execution

    tools {
        nodejs "nodejs"  // Must match the name configured in Jenkins > Global Tool Configuration
    }

    environment {
        EMAIL_RECIPIENT    = 'comms.flexdevske@gmail.com'           // Who should receive failure notifications
        RENDER_DEPLOY_HOOK = 'https://api.render.com/deploy/srv-d1f4a7umcj7s739cjvgg?key=bdKrH6jxh3M'  // Render deploy hook URL
        SLACK_TOKEN        = 'ee244477-5984-486d-9d2f-ca67b21aa911'          // Jenkins credential ID for Slack
        WEBSITE_URL        = 'https://gallery-ip1-moringa-devops.onrender.com/'   // URL of the live site for notifications
    }

    stages {
        stage("Cloning repository") {
            steps {
                // Clone a specific branch from your GitHub repository
                git branch: "master", url: "https://github.com/kevindev10/gallery-ip1-moringa-devops.git"
            }
        }

        stage("Install dependencies") {
            steps {
                // Install Node.js project dependencies
                sh "npm install"
            }
        }

        stage("Test code") {
            steps {
                // Run test suite
                sh "npm test"
            }
        }

        stage("Deploy to Render") {
            steps {
                // Trigger deployment via Render webhook
                echo 'Deploying application to Render...'
                sh "curl -X POST ${RENDER_DEPLOY_HOOK}"
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!!'
            // Send Slack notification on success
            slackSend botUser: true, 
                      channel: '#your-slack-channel', 
                      color: '#00ff00', 
                      message: "✅ Build #${currentBuild.number} successful! Visit: ${WEBSITE_URL}", 
                      tokenCredentialId: "${SLACK_TOKEN}"
        }

        failure {
            // Email notification on failure
            mail to: "${EMAIL_RECIPIENT}",
                 subject: '❌ Pipeline Failure Notification',
                 body: 'The pipeline failed at some stage. Please check Jenkins logs for details.'
        }

        always {
            // Runs regardless of outcome
            echo 'Pipeline execution complete!!'
        }

        aborted {
            // Special handling if pipeline is aborted
            echo 'Pipeline execution aborted!!'
        }
    }
}

// This Jenkinsfile defines a CI/CD pipeline for a Node.js application.
// It includes stages for cloning a repository, installing dependencies, running tests, and deploying to Render.
// Notifications are sent via Slack and email based on the pipeline's success or failure.
// Ensure that the necessary plugins (NodeJS, Slack Notification, Email Extension) are installed in