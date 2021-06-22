import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import App from './components/table';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/table" component={App} />    
                <Redirect from="/" to="/table" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));