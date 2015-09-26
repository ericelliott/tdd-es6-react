import { jsdom } from 'jsdom';

const createDocument = () => {
  
  const document = jsdom(undefined);
  const window = document.defaultView;
  global.document = document;
  global.window= window;
  return document;

};

export default createDocument;
