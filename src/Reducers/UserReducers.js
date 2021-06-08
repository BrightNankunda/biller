import {USER_LOGIN_REQUEST} from '../Constants/UserConstants'

function loginUser(state={}, action) {
   switch (action.type) {
      case USER_LOGIN_REQUEST:
         return {...state, loading: true}
      default:
         return state;
   }
}

export {loginUser}