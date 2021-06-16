import {LOGOUT_USER_FAILURE, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, USER_LOGIN_FAILURE, 
   USER_LOGIN_REQUEST, 
   USER_LOGIN_SUCCESS, 
   USER_SIGNIN_FAILURE, 
   USER_SIGNIN_REQUEST,
   USER_SIGNIN_SUCCESS} from '../Constants/UserConstants'
   
const initialState = {
   loading: false,
   user: {AuthedUser: null, token: null},
   error: null
}
function UserLoginReducer(state=initialState, action) {
   switch (action.type) {
      case USER_LOGIN_REQUEST:
         return {...state, loading: true}
      case USER_LOGIN_SUCCESS:
         return {...state, loading: false, user: action.payload}
      case USER_LOGIN_FAILURE:
         return {...state, loading: false, error: action.payload}
      default:
         return state;
   }
}

function UserSigninReducer(state=initialState, action) {
   switch (action.type) {
      case USER_SIGNIN_REQUEST:
         return {...state, loading: true}
      case USER_SIGNIN_SUCCESS:
         return {...state, loading: false, user: action.payload}
      case USER_SIGNIN_FAILURE:
         return {...state, loading: false, error: action.payload}
      default:
         return state;
   }
}

function LogoutUserReducer(state={loading: false}, action) {
   switch(action.type) {
      case LOGOUT_USER_REQUEST:
         return {...state, loading: true}
      case LOGOUT_USER_SUCCESS:
         return {...state, loading: false, loggedOut: true}
      case LOGOUT_USER_FAILURE:
         return {...state, loading: false, loggedOut: true, error: action.payload}
      default:
         return state
   }
}

export {UserLoginReducer, UserSigninReducer, LogoutUserReducer}