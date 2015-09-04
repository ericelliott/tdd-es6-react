import test from 'tape';
import compose from '../source/index';

test('Compose function output type', assert => {
  const actual = typeof compose();
  const expected = 'function';

  assert.equal(actual, expected,
    'compose() should return a function.');

  assert.end();
});
