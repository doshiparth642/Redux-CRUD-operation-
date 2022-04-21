import * as actionTypes from '../actionTypes/actionTypes';
import axios from 'axios';

export const fetchRequest = () => {
    return {
        type: actionTypes.FETCH_REQUEST
    }
}

export const fetchRequestSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_REQUEST_SUCCESS,
        payload: posts
    }
}

export const fetchRequestFail = (error) => {
    return {
        type: actionTypes.FETCH_REQUEST_FAIL,
        payload: error
    };
};

export function fetchPosts() {
    return (dispatch) => {
        dispatch(fetchRequest)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data
                dispatch(fetchRequestSuccess(posts));


            }, err => {
                dispatch(fetchRequestFail(err));
                return err


            });
    };
};

export const addUser = addPosts => {
    return (dispatch) => {
        axios.post('https://jsonplaceholder.typicode.com/posts', addPosts)
            .then(response => {
                dispatch({
                    type: actionTypes.ADD_DATA,
                    payload: response.data
                })
                console.log(response);         
            })
            .catch(error => {
                console.log(error);

            })
    }
}
