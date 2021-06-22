import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import cars from './reducers/cars';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const reducers = combineReducers({
    cars,
});

const store = createStoreWithMiddleware(reducers);

export default store;
