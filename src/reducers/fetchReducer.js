import * as actionTypes from '../actions/actionTypes/actionTypes'

const initialState = {
    loading: false,
    posts: [],
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                posts: []

            }
        case actionTypes.FETCH_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: false
            }
        case actionTypes.FETCH_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload
            }
        case actionTypes.ADD_DATA:
            const newPosts = state.posts.concat(action.payload);
            return {
                ...state,
                newPosts
            }
        default:
            return state
    }
}

export default reducer