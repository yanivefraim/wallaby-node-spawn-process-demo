'use strict';

/**
 * @module src/hello
 */

import util from 'util';
const fork = require('child_process').fork;
const join = require('path').join;
/**
 * Gets greeting message in format "Hello, %s"
 *
 * @param {string} [name=world] Name to insert
 *
 * @return {string} Greeting message
 *
 * @example
 *
 *  import hello from 'src/hello';
 *
 *  hello('username'); // 'Hello, username'
 */
export default function hello(name) {
  name = name || 'world';

  const child = fork(join(__dirname, '..', 'lib', 'launch.js'), [], {});

  return util.format('Hello, %s!', name);
}
