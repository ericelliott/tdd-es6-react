import test from 'tape';
import React from 'react';
import dom from 'cheerio';

import hello from '../../source/hello';
import createActions from '../fixtures/create-actions';

const renderText = React.renderToStaticMarkup;

test('Hello component', nest => {
  nest.test('...with no props', assert => {
    const Hello = hello(React);
    const actions = createActions();
    const el = <Hello actions={ actions } />;
    const $ = dom.load(renderText(el));

    const output = $('.hello-world').html();

    const actual = output;
    const expected = 'Hello, World!';

    assert.equal(actual, expected,
      `should render default message`);

    assert.end();
  });

  nest.test('...with custom word prop', assert => {
    const Hello = hello(React);
    const actions = createActions();
    const el = <Hello actions={ actions } word="Puppy" />;
    const $ = dom.load(renderText(el));

    const output = $('.hello-world').html();

    const actual = output;
    const expected = 'Hello, Puppy!';

    assert.equal(actual, expected,
      `should render customized message`);

    assert.end();
  });
});
