module.exports = function (wallaby) {
  process.env.NODE_PATH += `:${require('path').join(wallaby.localProjectDir, 'node_modules')}`;

  return {
    files: [
      {pattern: 'lib/*.js', instrument: true},
      {pattern: 'src/**/*.js'}
    ],

    tests: [
      {pattern: 'test/**/*.js'}
    ],

    compilers: {
      '**/*.js*': wallaby.compilers.babel()
    },

    preprocessors: {
      'lib/*.js': file => '!global.$_$wp && (global.$_$wp = global.$_$wpe = global.$_$w = global.$_$wf = () => {});' + file.content
    },

    env: {
      type: 'node'
    }
  };
};
