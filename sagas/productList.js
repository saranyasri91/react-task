import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST_API, GET_PRODUCT_LIST } from "../actionTypes/productList";
import {
  receiveApi,
  productAvailable,
  productUnAvailable
} from "../actionCreators/productList";
import { fetchJsonData } from "../api/api";

function* getProductList(action) {
  try {
    let product = yield fetch("https://api.myjson.com/bins/87lgk").then(r =>
      r.json()
    );
    yield put(productAvailable(product));
  } catch (error) {
    yield put(productUnAvailable(error));
  }
}

function* getApiData(action) {
  try {
    const products = yield call(fetchJsonData);
    yield put(receiveApi(products));
  } catch (e) {
    console.log(e);
  }
}

export default function* productSaga() {
  yield takeLatest(REQUEST_API, getApiData);
  yield takeLatest(GET_PRODUCT_LIST, getProductList);
}
