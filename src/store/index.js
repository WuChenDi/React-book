// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from './reducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhancers(
// 	applyMiddleware(thunk)
// ));

// export default store;

import { createStore, compose } from "redux";
import reducer from "../common/header/store/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

export default store;
