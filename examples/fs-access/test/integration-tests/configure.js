import test from 'tape';
import configure from '../../source/index';

test('Configure', nest => {
  nest.test('...with file', assert => {

    configure({
      sources: [`file://${ __dirname }/fixtures/good.json`]
    }).then(data => {
      const actual = data;
      const expected = { a: 1 };

      assert.deepEqual(actual, expected,
        'should load data from file.');

      assert.end();
    }).catch(error => {

      assert.error(error, 'should not reject.');
      assert.end();

    });
  });
});
