import { createStore, combineReducers } from "redux";

const initialState1 = {
  data: null,
  title: "",
  body: "",
};

const initialState2 = {
  age: 22,
  bool: false,
};

const reducer = (state = initialState1, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "ADD_TITLE":
      return {
        ...state,
        title: "Testing",
      };
    case "ADD_BODY":
      return {
        ...state,
        body: "Body Test",
      };
    default:
      return state;
  }
};

const reducer2 = (state = initialState2, action) => {
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
      };
    case "ADD_BOOL":
      return {
        ...state,
        bool: !state.bool,
      };
    default:
      return state;
  }
};

const store = createStore(combineReducers({ reducer, reducer2 }));

export default store;
