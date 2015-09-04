import test from 'tape';
import React from 'react';
import R from 'react/addons';

import hello from '../../source/hello';
import createActions from '../fixtures/create-actions';
import createDocument from '../fixtures/create-document';
import $find from '../fixtures/find-by-class';

const TestUtils = R.addons.TestUtils;
const renderDOM = TestUtils.renderIntoDocument;

test('Hello component', nest => {

  nest.test('...clicked for edit mode', assert => {
    const Hello = hello(React);
    const document = createDocument();
    let el, output;

    // Mock action
    const actions = createActions({
      setMode (mode) {
        const actual = mode;
        const expected = 'edit';

        assert.equal(actual, expected,
          `should trigger edit mode`);

        assert.end();
      }
    });

    // Render the DOM
    output = renderDOM(<Hello actions= { actions }/>, document.body);

    el = $find(output, '.hello-world');

    // Simulate a click
    TestUtils.Simulate.click(el);
  });

});
