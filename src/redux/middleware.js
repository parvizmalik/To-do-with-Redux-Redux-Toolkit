import { ADD_TODO } from "./actions";

import { takeEvery } from "redux-saga/effects";

export function* addTodo() {
  yield takeEvery(ADD_TODO, function* () {
    // We can perform async operations here
    // No need of async calls for now
  });
}

export default function* () {
  yield* addTodo();
}
