module.exports = function (wallaby) {
  process.env.NODE_PATH += `:${require('path').join(wallaby.localProjectDir, 'node_modules')}`;
  console.log(wallaby.projectCacheDir);
  return {
    files: [
      {pattern: 'lib/launch.js', instrument: false},
      {pattern: 'lib/index.js', instrument: false},
      {pattern: 'src/**'}
    ],

    tests: [
      {pattern: 'test/**'}
    ],

    compilers: {
      '**/*.js*': wallaby.compilers.babel()
    },

    setup: function () {
      require("babel-polyfill");
    },

    env: {
      type: 'node'
    }
  };
};
