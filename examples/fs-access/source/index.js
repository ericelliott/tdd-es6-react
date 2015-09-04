import loadFile from './load-file';
import mergeConfig from './merge-config';

export default (options, ...overrides) => {
  const { sources } = options || {};

  return new Promise((resolve, reject) => {
    if (sources) {
      const whenFilesLoaded = sources.map(file => loadFile(file));

      Promise.all(whenFilesLoaded).then(files => {
        const configs = [...files, ...overrides];
        resolve(mergeConfig(...configs));
      }).catch(err => {
        reject(err);
      });

    } else {
      return resolve(mergeConfig(...overrides));
    }
  });
};
