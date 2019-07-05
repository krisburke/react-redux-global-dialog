import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './utils/serviceWorker';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import { Routes } from './app/Routes';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './assets/styles/index.css';

const history = createBrowserHistory();
export const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
