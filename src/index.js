import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/store';
import { BrowserRouter } from "react-router-dom";
import { App } from './components/App';

import './assets/fonts/Roboto/Roboto-Black.ttf';
import './assets/fonts/Roboto/Roboto-Bold.ttf';
import './assets/fonts/Roboto/Roboto-Light.ttf';
import './assets/fonts/Roboto/Roboto-Medium.ttf';
import './assets/fonts/Roboto/Roboto-Regular.ttf';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/bantech'>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

);