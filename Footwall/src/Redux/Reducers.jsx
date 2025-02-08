const initialState = {
    isLoading: false,
    isError: false,
    footballMatches: [],
  };

const footballReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MATCHES":
            return {...state, isLoading: true };
        case "GET_MATCHES_SUCCESS":
            return {...state, isLoading: false, footballMatches: action.payload };
        case "GET_MATCHES_FAILURE":
            return {...state, isLoading: false, isError: true };
        case "FILTER_BY_TEAM_NAME":
            return {...state, footballMatches: state.footballMatches.filter((match) => (match.team1|| match.team2) === action.payload) };
        default:
            return state;
    }
}

export default footballReducer;