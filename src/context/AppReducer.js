const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLANET_TO_LIST":
      return {
        ...state,
        FavouritePlanets: [action.payload, ...state.FavouritePlanets],
      };

    case "REMOVE_PLANET_FROM_LIST":
      return {
        ...state,
        FavouritePlanets: state.FavouritePlanets.filter(
          (planet) => planet.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;
