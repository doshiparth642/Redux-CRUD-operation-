import * as actionTypes from "../actions/actionTypes/actionTypes";

export const defaultState = {
  loading: false,
  data: [],
  error: null,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case actionTypes.USER_START:
      return {
        ...state,
        loading: true,
        data: [],
        error: null,
      };
    case actionTypes.USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case actionTypes.USER_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };



    default:
      return state;
  }
};
