import * as actionTypes from "../actionTypes/actionTypes";
import userService from "../../services/userService";

const startUserList = () => {
  return {
    type: actionTypes.USER_START,
  };
};

const successUserList = (data) => {
  return {
    type: actionTypes.USER_SUCCESS,
    payload: data,
  };
};
const userListError = (error) => {
  return {
    type: actionTypes.USER_ERROR,
    payload: error,
  };
};

export function getUserList() {
  return (dispatch) => {
    dispatch(startUserList());
    return userService
      .getUsers()
      .then((res) => {
        dispatch(successUserList(res));
        return res;
      })
      .catch((err) => {
        dispatch(userListError(err));
        throw err;
      });
  };
}




