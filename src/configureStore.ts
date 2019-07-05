import { Store, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import createRootReducer, { ApplicationState } from './common/rootReducer';

function configureStore(history: History): Store<ApplicationState> {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        createRootReducer(history),
        composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))),
    );

    if (module.hot) {
        module.hot.accept('./common/rootReducer', () => {
            store.replaceReducer(require('./common/rootReducer').default);
        });
    }

    return store;
}

export default configureStore;
