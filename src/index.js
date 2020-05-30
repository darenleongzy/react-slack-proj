// Set up your application entry point here...

import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Dashboard from './components/dashboard'

function App() {
  return (
    // <Button variant="contained" color="primary">
    //   Hello World
    // </Button>
    <Dashboard />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));