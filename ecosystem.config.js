module.exports = {
  apps: [
    {
      name: 'front',
      watch: true,
      script: './client/server.js',
      // Delay between restartsss
      watch_delay: 10000,
      ignore_watch: ['node_modules', '.git'],
      watch_options: {
        followSymlinks: false,
      },
    },
    {
      name: 'back',
      watch: true,
      script: './server/app.js',
      // Delay between restart
      //   watch_delay: 10000,
      ignore_watch: ['node_modules', '.git'],
      watch_options: {
        followSymlinks: false,
      },
    },
  ],
};
