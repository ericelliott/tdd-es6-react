import test from 'tape';
import configure from '../../source/index';

test('Configure', nest => {

  nest.test('...with one overrides object', assert => {
    const testConfig = {setting: 'a setting'};

    configure(null, testConfig).then(value => {
      const actual = value;
      const expected = testConfig;

      assert.deepEqual(actual, expected,
        'should resolve with a config object');

      assert.end();
    }).catch((err) => {
      assert.error('should not reject');
      assert.end();
    });

  });

  nest.test('...with multiple overrides', assert => {
    const a = {a: 1, override: 'a'};
    const b = {b: 2};
    const c = {override: 'c'};

    configure(null, a, b, c).then(value => {
      const actual = value;
      const expected = { a: 1, b: 2, override: 'c' };

      assert.deepEqual(actual, expected,
        'should resolve with a config object');

      assert.end();
    }).catch((err) => {
      assert.error('should not reject');
      assert.end();
    });
  });
});
