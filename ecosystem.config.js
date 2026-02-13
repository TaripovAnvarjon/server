module.exports = {
  apps: [{
    name: 'spy-lms-server',
    script: './app.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/error.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    
    // Doimiy ishlash uchun sozlamalar
    exp_backoff_restart_delay: 100,
    max_restarts: 10,
    min_uptime: '10s',
    listen_timeout: 3000,
    kill_timeout: 5000,
    
    // Xatoliklar yuz berganda avtomatik qayta ishga tushirish
    restart_delay: 4000
  }]
};
