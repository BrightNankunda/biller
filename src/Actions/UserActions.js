import axios from 'axios'
import {
   USER_LOGIN_REQUEST, 
   USER_LOGIN_SUCCESS, 
   USER_LOGIN_FAILURE
} from '../Constants/UserConstants'

const UserLogin = ({email, password}) => async (dispatch) => {
   try {
      dispatch({type: USER_LOGIN_REQUEST, payload: {email, password}})
      const {data} = await axios.post('http://localhost:7000/api/user/login', {email, password})
      console.log(data)

   } catch(err) {
      console.log(err.message)
      dispatch({type: USER_LOGIN_FAILURE, payload: err.message})
   }
}

export {UserLogin}