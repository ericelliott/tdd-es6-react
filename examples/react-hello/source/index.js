import React from 'react';
import app from './app';

const App = app(React);
const root = document.getElementById('root');

React.render(<App />, root);
