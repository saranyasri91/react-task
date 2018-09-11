import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
import productSaga from "../sagas/productList";

const getSaga = createSagaMiddleware();

export default createStore(reducer, applyMiddleware(getSaga));

getSaga.run(productSaga);
