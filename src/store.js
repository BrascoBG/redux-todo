import { createStore } from "redux";

const initialState = {
  title: "",
  body: "",
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

store.dispatch({type: "ADD_TITLE"})
store.dispatch({type: "ADD_BODY"})

export default store;
