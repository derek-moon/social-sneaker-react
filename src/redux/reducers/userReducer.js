import {
  SET_USER,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  LOADING_USER,
  LIKE_SCREAM,
  UNLIKE_SCREAM
} from "../types";

//Initial state of the user
const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
  notifications: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };

    case LIKE_SCREAM:
      return {
        ...state,
        //returns state but also new 'like' on scream w/ user handle
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            screamId: action.payload.screamId
          }
        ]
      };

    case UNLIKE_SCREAM:
      return {
        ...state,
        //removes like from scream and leaves the rest
        likes: state.likes.filter(
          like => like.screamId !== action.payload.screamId
        )
      };

    default:
      return state;
  }
}
