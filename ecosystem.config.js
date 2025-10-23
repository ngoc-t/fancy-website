module.exports = {
  apps: [
    {
      name: "3084:fancyflorist",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env: {
        PORT: 3084,
        NODE_ENV: "production",
      },
    },
  ],
};
