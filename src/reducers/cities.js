const initialState = {
  cities: {},
  error: false
};

export default function CitiesReducer(state = initialState, action) {
  switch (action.type) {
    // ------------------------------------------------------------------
    case "STORE_CITY_DATA": {
      return {
        ...state,
        cities: action.data
      };
    }

    default:
      return state;
  }
}
