import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { CurrentUserProvider } from './contexts/currentUser';

ReactDOM.render(
  <CurrentUserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </CurrentUserProvider>,
  document.getElementById('root')
);
