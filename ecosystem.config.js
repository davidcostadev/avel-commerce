module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'newcommerce',
      script: 'server.js',
      env: {
        COMMON_VARIABLE: 'true',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },

    // Second application
    {
      name: 'WEB',
      script: 'web.js',
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'ubuntu',
      host: '34.239.129.224',
      ref: 'origin/master',
      repo: 'git@github.com:davidcostadev/newcommerce.git',
      path: '/var/www/raicromdistribuidora.com.br',
      'post-deploy': 'npm install && npm run build:prod && pm2 reload ecosystem.config.js --env production',
    },
    dev: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/development',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env dev',
      env: {
        NODE_ENV: 'dev',
      },
    },
  },
}
