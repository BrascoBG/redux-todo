import * as actionTypes from "./actions";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      return {
        ...state,
        persons: state.persons.concat({
          id: new Date(),
          name: action.personData.name,
          age: action.personData.age,
          completed: false,
        }),
      };
    case actionTypes.DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter((person) => person.id !== action.resId),
      };
    case actionTypes.CHECK_PERSON:
      return {
        ...state,
        persons: state.persons.map((person) => {
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

export default reducer;
