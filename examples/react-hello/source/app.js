import stamp from 'react-stampit';
import hello from './hello';

const data = {
  mode: 'display',
  word: 'World'
};

const actions = {
  setMode (mode) {
    data.mode = mode;
  },

  setWord (word) {
    data.word = word;
  }
};

const App = React => {
  const Hello = hello(React);

  return stamp(React, {
    render () {
      return (
        <Hello actions={ actions }
          mode={ data.mode }
          word= { data.word }
        />
      );
    }
  });
};

export default App;
