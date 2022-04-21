import * as actionTypes from "../actionTypes/actionTypes";
import userService from "../../services/userService";


const fetchRequest = () => {
    return {
        type: actionTypes.FETCH_REQUEST
    }
}

const fetchRequestSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_REQUEST_SUCCESS,
        payload: posts
    }
}

const fetchRequestFail = (error) => {
    return {
        type: actionTypes.FETCH_REQUEST_FAIL,
        payload: error
    };
};

const deleteUser = (id) => {
    return {
        type: actionTypes.DELETE_POST,
        payload: id
    }
}

const addPosts = (data) => {
    return {
        type: actionTypes.ADD_POST,
        payload: data

    }
}

const editPosts = (data) => {
    return {
        type: actionTypes.EDIT_POST,
        payload: data

    }
}


export function fetchUserList() {
    return (dispatch) => {
        dispatch(fetchRequest())
        return userService
            .getUsers()

            .then((res) => {
                dispatch(fetchRequestSuccess(res))
                console.log(res)
                return res
            })
            .catch((err) => {
                dispatch(fetchRequestFail(err))
                console.log(err)

            })
    }
}


export const deletePost = id => {
    return (dispatch) => {

        return userService.deleteUsers(id)
            .then(res => {
                dispatch(deleteUser(id))
                return res

            })
            .catch(error => {
                console.log(error);

            })
    }

}


export const addPost = (data) => {
    data.address.street = data.street;
    return (dispatch) => {
           userService.postUsers(data)

            .then(res => { 
                dispatch(addPosts(res))
                console.log(res);
                return res
            })
            .catch(error => {
                console.log(error);

            })
    }
}

export const editPost = (id, data) => {
    data.address.street = data.street;

    return (dispatch) => {
        userService.patchUsers(id, data)
            .then(response => {
                dispatch(editPosts(response))
                console.log(response);
                return response
            })
            .catch(error => {
                console.log(error);

            })
    }
}




