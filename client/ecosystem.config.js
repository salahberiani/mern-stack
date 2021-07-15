module.exports = {
  apps: [
    {
      name: 'front',
      watch: true,
      script: './server.js',
      // Delay between restart
      watch_delay: 10000,
      ignore_watch: ['node_modules', '.git'],
      watch_options: {
        followSymlinks: false,
      },
    },
  ],
};
