import * as actionTypes from "../actions";

const initialState = {
  data: [],
};

const functReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FUNCT_ADD:
      return {
        ...state,
        data: state.data.concat({
          id: new Date(),
          name: action.personData.name,
          age: action.personData.age,
          completed: false,
        }),
      };
    case actionTypes.FUNCT_DELETE:
      return {
        ...state,
        data: state.data.filter((person) => person.id !== action.resId),
      };
    case actionTypes.FUNCT_CHECK:
      return {
        ...state,
        data: state.data.map((person) => {
          if (person.id === action.changeId) {
            person.completed = !person.completed;
          }
          return person;
        }),
      };
    default:
      return state;
  }
};

export default functReducer;
