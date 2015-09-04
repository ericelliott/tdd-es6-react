import test from 'tape';
import myFactory from '../source/index';
import { spy } from 'sinon';

test('myFactory logging', assert => {
  const log = spy();
  const myComponent = myFactory({ log });

  const actual = log.called;
  const expected = true;

  assert.equal(actual, expected,
    'myFactory should log when called with injected logger.');

  assert.end();
});
