
import * as actionTypes from '../actions/actionTypes/actionTypes'

const initialState = {
    loading: false,
    posts: [],
    error: false,
    
}

const listReducer = (state = initialState, action) => {
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

      case actionTypes.DELETE_POST:

      
        return  {
                ...state,   
               posts: state.posts.filter(post => post.id !== action.payload)
            
            }
         
        case actionTypes.ADD_POST:

           // const newPost = state.posts.concat(action.payload)
          
            return{
                ...state,
              posts : [...state.posts,action.payload]
              // posts: newPost
            }
        
        case actionTypes.EDIT_POST:
            console.log(action.payload)
            return{
          ...state,

        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post),
        loading:false

        
            }

      

        default:
            return state

    }
}

export default listReducer