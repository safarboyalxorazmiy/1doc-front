import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import UserState from './function/state/UserState.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './function/i18n/i18next.jsx';

import { HelmetProvider } from 'react-helmet-async';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './index.css';
import './assets/css/style.scss';
import 'swiper/css';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserState(),
  }}>
    <I18nextProvider i18n={i18n}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </I18nextProvider>
  </Context.Provider>
);