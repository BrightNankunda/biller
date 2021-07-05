import axios from 'axios'
// import {useHistory} from 'react-router-dom'
import {
   USER_LOGIN_REQUEST, 
   USER_LOGIN_SUCCESS, 
   USER_LOGIN_FAILURE,
   USER_SIGNIN_REQUEST,
   USER_SIGNIN_SUCCESS,
   LOGOUT_USER_REQUEST,
   LOGOUT_USER_SUCCESS,
   LOGOUT_USER_FAILURE
} from '../Constants/UserConstants'


const UserLogin = ({email, password}) => async (dispatch) => {

   try {
      dispatch({type: USER_LOGIN_REQUEST, payload: {email, password}})
      const {data} = await axios.post(process.env.REACT_APP_API_URL + '/api/user/login', {email, password})
      if(data.token != undefined) {
         localStorage.setItem('UgBillUser', JSON.stringify(data))
         console.log(data.token)
      }
      dispatch({type: USER_LOGIN_SUCCESS, payload: data})
   } catch(err) {
      console.log(err.message)
      dispatch({type: USER_LOGIN_FAILURE, payload: err.message})
   }

}

const UserSignin = ({email, password}) => async (dispatch) => {

   try {
      dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}})
      const {data} = await axios.post(process.env.REACT_APP_API_URL + '/api/user/signin', {email, password})
      if(data.token != undefined) {
         localStorage.setItem('UgBillUser', JSON.stringify(data))
         console.log(data.token)
      }
      dispatch({type: USER_SIGNIN_SUCCESS, payload: data})
   } catch(err) {
      console.log(err.message)
      dispatch({type: USER_SIGNIN_REQUEST, payload: err.message})
   }

}

const LogoutUser = () => (dispatch, getState) => {
   // const user = getState()

   try {
      dispatch({type: LOGOUT_USER_REQUEST})
      localStorage.setItem('UgBillUser', null)
      dispatch({type: LOGOUT_USER_SUCCESS})

   } catch(error) {
      localStorage.setItem('UgBillUser', null)
      dispatch({type: LOGOUT_USER_FAILURE, payload: error.message})
   }
}

export {UserLogin, UserSignin, LogoutUser}