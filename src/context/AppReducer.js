const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLANET_TO_LIST":
      return {
        ...state,
        FavouritePlanets: [action.payload, ...state.FavouritePlanets],
      };

    default:
      return state;
  }
};

export default AppReducer;
