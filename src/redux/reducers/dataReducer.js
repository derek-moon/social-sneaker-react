import {
  SET_SCREAMS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA
} from "../types";

//array that contains all screams, home or user
const initialState = {
  screams: [],
  scream: {},
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_SCREAMS:
      return {
        ...state,
        //payload from res.data of GETALLSCREAM
        screams: action.payload,
        loading: false
      };
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      let index = state.screams.findIndex(
        scream => scream.screamId === action.payload.screamId
      );
      //replace scream in state w/ scream payload
      state.screams[index] = action.payload;
      return {
        ...state
      };
    default:
      return state;
  }
}
