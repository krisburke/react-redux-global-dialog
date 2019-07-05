import React from 'react';
import { Route, Switch } from 'react-router';
import App from './App';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route key="app" path="/" exact={true} component={App} />
        </Switch>
    );
};
