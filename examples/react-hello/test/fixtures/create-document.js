import { jsdom } from 'jsdom';

const createDocument = () => {
  const idoc = jsdom(`<!doctype html><html><body></body></html>`);
  const iframe = idoc.createElement('iframe');

  const document = global.document = iframe.contentDocument;

  global.window = iframe.contentWindow;

  idoc.body.appendChild(iframe);

  return document;
};

export default createDocument;
