import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

ReactDOM.render(
  <React.StrictMode>
    <SimpleHabit/>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


