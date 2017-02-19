import { createStore, applyMiddleware, compose } from 'redux';
import rootReduces from './reducers';


function _applyMiddleware() {

    const middleware = [];

    return applyMiddleware(...middleware);
    
}

export default function configureStore(initialState) {

    const store = compose(_applyMiddleware()(createStore)(rootReduces, initialState));

    return store;

}
