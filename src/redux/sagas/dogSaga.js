import { call, put, takeEvery } from 'redux-saga/effects';
import axios from "axios";

// const apiUrl = `https://dog.ceo/api/breeds/image/random`;
// function getApi() {
//   return fetch(apiUrl, {
//       method: 'get',
//       mode: 'no-cors',
//       headers: {
//           'Content-Type': 'application/json',
//       }
//   }).then(response => response.json())
//     .catch((error) => {throw error})
// }

// Must use axios for this applicationCache, why? What is the deffirence with axios and fetch?

function getApi() {
   return axios({
       method: "get",
       url: "https://dog.ceo/api/breeds/image/random"
   });
}

function* fetchDog(action) {
   try {
      const response = yield call(getApi);
      const dog = response.data.message;
      yield put({type: 'GET_DOG_SUCCESS', dog: dog});
   } catch (e) {
      yield put({type: 'GET_DOG_FAILED', message: e.message});
   }
}

function* dogSaga() {
   yield takeEvery('GET_DOG_REQUESTED', fetchDog);
}

export default dogSaga;