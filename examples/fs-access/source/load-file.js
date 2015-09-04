import yamlParser from 'js-yaml';
import fs from 'fs';
import path from 'path';

const commandMap = {
  'json': JSON.parse,
  'yml' : yamlParser.safeLoad
};

export default function loadFile(url) {
  return new Promise((resolve, reject) => {
    const file = url.split('//')[1],
      ext = file.split('.').pop(),
      parser = commandMap[ext.toLowerCase()];

    let resolvedPath, data, parsed;

    if (!parser) {
      reject( new Error (`Extension '${ ext }' not supported.
        Supported extensions: json, yml`) );
    }

    resolvedPath = path.resolve(file);

    fs.readFile(resolvedPath, 'utf-8', (err, data) => {
      if (err) reject(new Error(`Not a valid file: ${ resolvedPath }`));

      try {
        parsed = parser(data);
      } catch(parseError) {
        reject(parseError);
      }

      resolve(parsed);
    });
  });
};
