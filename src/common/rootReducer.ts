import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { DialogState } from '../dialog/dialogTypes';
import { dialogReducer } from '../dialog/dialogReducer';

export interface ApplicationState {
    router: RouterState;
    dialog: DialogState;
}

export default (history: History) =>
    combineReducers<ApplicationState>({
        router: connectRouter(history),
        dialog: dialogReducer,
    });
