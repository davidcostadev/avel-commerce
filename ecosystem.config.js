module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'raicromdistribuidora',
      script: 'server.js',
      env: {
        COMMON_VARIABLE: 'true',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'root',
      host: '159.203.121.112',
      ref: 'origin/master',
      repo: 'https://github.com/davidcostadev/newcommerce.git',
      path: '/var/www/raicromdistribuidora.com.br',
      'post-deploy': [
        'npm install',
        'npm run jest',
        'npm run build:prod',
        'pm2 reload ecosystem.config.js --env production --name raicromdistribuidora',
      ].join(' && '),
    },
  },
}
