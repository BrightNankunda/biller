import axios from 'axios'
import {
   USER_LOGIN_REQUEST, 
   USER_LOGIN_SUCCESS, 
   USER_LOGIN_FAILURE,
   USER_SIGNIN_REQUEST,
   USER_SIGNIN_SUCCESS
} from '../Constants/UserConstants'

const UserLogin = ({email, password}) => async (dispatch) => {
   try {
      dispatch({type: USER_LOGIN_REQUEST, payload: {email, password}})
      const {data} = await axios.post('http://localhost:7000/api/user/login', {email, password})
      console.log(data)
      dispatch({type: USER_LOGIN_SUCCESS, payload: data})
   } catch(err) {
      console.log(err.message)
      dispatch({type: USER_LOGIN_FAILURE, payload: err.message})
   }
}

const UserSignin = ({email, password}) => async (dispatch) => {
   try {
      dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}})
      const {data} = await axios.post('http://localhost:7000/api/user/signin', {email, password})
      console.log(data)
   } catch(err) {
      console.log(err.message)
      dispatch({typpe: USER_SIGNIN_REQUEST, payload: err.message})
   }
}

export {UserLogin, UserSignin}