import test from 'tape';
import merge from '../../source/merge-config';

test('Merge config override', assert => {
  const actual = merge(
    {a: 1, override: 'a'},
    {b: 2},
    {c: 3, override: 'c'});
  const expected = { a: 1, b: 2, c: 3, override: 'c' };

  assert.deepEqual(actual, expected,
    'merge-config should merge arguments.');

  assert.end();
});
