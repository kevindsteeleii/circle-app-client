import React from 'react';
import { render } from 'react-dom';
import './app.scss';
import wbIcon from './public/imgs/webpack.png';
import dictEntry from './export';

const App = () => {
  let unit = new dictEntry('unit', 'a single measure of something');
  return (<div>
      <h1>React Works, it just works... IDK Ha ha</h1>
      <p>Yup</p>
      <p>{unit.getEntry()}</p>
      <img src={wbIcon} alt="webpack icon"/>
    </div>);
};

render(<App/>, document.getElementById('root'));