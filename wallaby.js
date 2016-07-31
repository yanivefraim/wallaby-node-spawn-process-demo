module.exports = function (wallaby) {
  process.env.NODE_PATH += `:${require('path').join(wallaby.localProjectDir, 'node_modules')}`;
  console.log(wallaby.projectCacheDir);
  return {
    files: [
      {pattern: 'lib/launch.js', instrument: false},
      {pattern: 'lib/index.js', instrument: false},
      {pattern: 'src/**/*.js'}
    ],

    tests: [
      {pattern: 'test/**/*.js'}
    ],

    compilers: {
      '**/*.js*': wallaby.compilers.babel()
    },

    preprocessors: {
      'lib/*.js': file => require('babel-core')
        .transform(file.content, {sourceMap: true, filename: file.path})
    },

    setup: function () {
      require("babel-polyfill");
    },

    env: {
      type: 'node'
    }
  };
};
