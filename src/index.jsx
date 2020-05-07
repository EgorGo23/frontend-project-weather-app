import React from 'react';
import ReactDOM from 'react-dom';
import '../public/styles/styles.scss';
import App from './components/App';
import { StateProvider } from './store';


ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root'),
);
