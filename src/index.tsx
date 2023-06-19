import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore, { history } from './modules/configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './consts/styles';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { messages } from './locales/en/messages';
import { messages as csMessages } from './locales/cs/messages';
import { Langs } from './consts/common';
import { getLang } from './modules/app/selectors';

const store = configureStore();

i18n.load(Langs.En, messages);
i18n.load(Langs.Cs, csMessages);
store.subscribe(() => i18n.activate(getLang(store.getState())));
i18n.activate(store.getState().app.lang);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <I18nProvider i18n={i18n}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </I18nProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
