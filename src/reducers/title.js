const titleReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_TITLE":
      return {
        state,
      };
  }
  return state;
};
