import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/modern-normalize/modern-normalize.css';
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './common/theme';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
