import stamp from 'react-stampit';

const Hello = (React) => {
  const { string, func } = React.PropTypes;

  return stamp(React, {
    propTypes: {
      word: string,
      actions: React.PropTypes.shape({
        setWord: func.isRequired,
        setMode: func.isRequired
      })
    },

    render () {
      const {
        word = 'World'
      } = this.props;

      const { setMode } = this.props.actions;

      return (
        <p><h1
          className="hello-world"
          name="hello"
          onClick = { () => setMode('edit') }
          >Hello, { word }!</h1>
        </p>
      );
    }
  });
};

export default Hello;
