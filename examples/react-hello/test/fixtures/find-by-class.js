import R from 'react/addons';

const TestUtils = R.addons.TestUtils;

const findByClass = (dom, selector) => {
  const subject = selector.slice(1);

  return TestUtils.findRenderedDOMComponentWithClass(dom, subject);
};

export default findByClass;
