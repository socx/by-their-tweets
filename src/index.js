import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import './overrides.css';
import './themes.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

const initialState = {}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
