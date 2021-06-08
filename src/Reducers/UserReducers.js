import {USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS} from '../Constants/UserConstants'

function loginUser(state={}, action) {
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

function signinUser(state={}, action) {
   switch (action.type) {
      case:
   }
}

export {loginUser}