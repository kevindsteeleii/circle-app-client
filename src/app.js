import React from 'react';
import { render } from 'react-dom';
import './app.scss';

const App = () => {
  return (<div>
      <h1>React Works, it just works... IDK Ha ha</h1>
      <p>Yup</p>
    </div>);
}

render(<App/>, document.getElementById('root'));