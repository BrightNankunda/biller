import axios from 'axios'
import { BILLS_FETCH_EMPTY, CLIENT_BILLS_EMPTY, USER_BILLS_EMPTY } from '../Constants/BillConstants'
import { CLIENT_CRIMINALS_EMPTY, CRIMINALS_FETCH_EMPTY, USER_CRIMINALS_EMPTY } from '../Constants/CriminalConstants'
// import {useHistory} from 'react-router-dom'
import {
   USER_LOGIN_REQUEST, 
   USER_LOGIN_SUCCESS, 
   USER_LOGIN_FAILURE,
   USER_SIGNIN_REQUEST,
   USER_SIGNIN_SUCCESS,
   LOGOUT_USER_REQUEST,
   LOGOUT_USER_SUCCESS,
   LOGOUT_USER_FAILURE,
   USER_SIGNIN_FINISHED,
   USER_LOGIN_FINISHED,
   USER_LOGIN_EMPTY,
   USER_SIGNIN_EMPTY
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
      dispatch({type: USER_LOGIN_FINISHED})
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
      dispatch({type: USER_SIGNIN_FINISHED})
   } catch(err) {
      console.log(err.message)
      dispatch({type: USER_SIGNIN_REQUEST, payload: err.message})
   }

}

const LogoutUser = () => (dispatch, getState) => {
   // const user = getState()

   try {
      dispatch({type: USER_BILLS_EMPTY})
      dispatch({type: CLIENT_BILLS_EMPTY})
      dispatch({type: BILLS_FETCH_EMPTY})
      dispatch({type: CRIMINALS_FETCH_EMPTY})
      dispatch({type: CLIENT_CRIMINALS_EMPTY})
      dispatch({type: USER_CRIMINALS_EMPTY})
      dispatch({type: LOGOUT_USER_REQUEST})
      localStorage.setItem('UgBillUser', null)
      dispatch({type: LOGOUT_USER_SUCCESS})
      dispatch({type: USER_LOGIN_EMPTY})
      dispatch({type: USER_SIGNIN_EMPTY})

   } catch(error) {
      localStorage.setItem('UgBillUser', null)
      dispatch({type: LOGOUT_USER_FAILURE, payload: error.message})
   }
}

export {UserLogin, UserSignin, LogoutUser}