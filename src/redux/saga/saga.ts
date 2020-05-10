import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import { Api } from "../../config/config";
import { searchActionTypes } from "../reducers/searchReducer";
import { IResult } from "../../components/result";

function* searchMulti(action: any) {
  try {
    //search for matching titles
    const response = yield call(() =>
      axios.get(Api.getMulti, {
        params: {
          query: action.payload,
        },
      })
    );
    //add titles to store
    yield put({
      type: searchActionTypes.search.success,
      payload: response.data,
    });

    //search for videos of recieved titles
    let videos = yield all(
      response.data.results.map((result: IResult) => call(() => axios.get(Api.getVideos(result.id))))
    );

    //sort data
    videos = videos.map((vid: any) => {
      return vid.data;
    });

    yield put({ type: searchActionTypes.videos.success, payload: videos });
  } catch (e) {
    yield put({ type: searchActionTypes.search.fail, message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(searchActionTypes.search.request, searchMulti);
}

export default mySaga;
