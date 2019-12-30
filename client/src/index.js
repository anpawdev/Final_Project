import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Root = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));