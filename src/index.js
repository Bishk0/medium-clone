import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import CurrentUserChecker from './components/CurrentUserChecker';
import { CurrentUserProvider } from './contexts/currentUser';

ReactDOM.render(
  <CurrentUserProvider>
    <CurrentUserChecker>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CurrentUserChecker>,
  </CurrentUserProvider>,
  document.getElementById('root')
);
