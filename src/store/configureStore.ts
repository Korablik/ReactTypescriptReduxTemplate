import { createStore, applyMiddleware, AnyAction, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}