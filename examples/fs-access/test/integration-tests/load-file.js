import test from 'tape';
import loadFile from '../../source/load-file';

test('loadFile promise', nest => {
  nest.test('Rejects on bad file name', assert => {

    loadFile('file://bad/file/name.json').catch(err => {
      const actual = err.message.split(':').shift();
      const expected = 'Not a valid file';

      assert.equal(actual, expected,
        `loadFile should reject with a readable error
          on bad filename.`);

      assert.end();
    });

  });
});
