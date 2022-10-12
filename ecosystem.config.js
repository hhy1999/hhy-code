module.exports = {
  apps : [{
    name:'api-server',
    script: 'app.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'root',
      host : '81.71.15.170',
      ref  : 'origin/master',
      repo : 'git@github.com:hhy1999/hhy-code.git',
      path : '/usr/local/project',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
