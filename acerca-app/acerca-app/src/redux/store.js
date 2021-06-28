import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import carsDeliveriesReducer from './reducers/carsDeliveriesReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const reducers = combineReducers({
    carsDeliveries: carsDeliveriesReducer 
});

const store = createStoreWithMiddleware(reducers);

export default store;