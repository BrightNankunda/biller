import axios from 'axios'

import { CREATE_CLIENT_FAILURE, CREATE_CLIENT_REQUEST, CREATE_CLIENT_SUCCESS, DELETE_SINGLE_CLIENT_FAILURE, DELETE_SINGLE_CLIENT_REQUEST, DELETE_SINGLE_CLIENT_SUCCESS, FETCH_CLIENTS_FAILURE, FETCH_CLIENTS_REQUEST, FETCH_CLIENTS_SUCCESS, FETCH_SINGLE_CLIENT_FAILURE, FETCH_SINGLE_CLIENT_REQUEST, FETCH_SINGLE_CLIENT_SUCCESS, UPDATE_SINGLE_CLIENT_FAILURE, UPDATE_SINGLE_CLIENT_REQUEST, UPDATE_SINGLE_CLIENT_SUCCESS } from '../Constants/ClientConstants'

const CreateNewClient = ({firstName, lastName, middleName, email, phoneNumber, occupation, address}) => async (dispatch, getState) => {
   try {
      dispatch({type: CREATE_CLIENT_REQUEST, payload: firstName, lastName, middleName, email, phoneNumber, occupation, address})
      const {user} = getState()
      const {data} = await axios.post("http://localhost:7000/api/client", {firstName, lastName, middleName, email, phoneNumber, occupation, address}, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log(data);
      // window.location = "/schedules/clients"
      dispatch({type: CREATE_CLIENT_SUCCESS, payload: data})
   } catch (error) {
      console.log(error.message)
      dispatch({type: CREATE_CLIENT_FAILURE, payload: error.message})
   }
}

const FetchClients = () => async (dispatch, getState) => {

   try {
      dispatch({type: FETCH_CLIENTS_REQUEST})
      const {user} = getState()
      const {data} = await axios.get("http://localhost:7000/api/client", {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log(data)
      dispatch({type: FETCH_CLIENTS_SUCCESS, payload: data})
   } catch(error) {
      console.log(error.message)
      dispatch({type: FETCH_CLIENTS_FAILURE, payload: error.message})
   }
}

const FetchSingleClient = (clientId) => async (dispatch, getState) => {
   try {
      dispatch({type: FETCH_SINGLE_CLIENT_REQUEST})
      const {user} = getState()
      const {data} = await axios.get("http://localhost:7000/api/client/" + clientId, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('FETCH SINGLE CLIENT REDUX', data)
      dispatch({type: FETCH_SINGLE_CLIENT_SUCCESS, payload: data})
   } catch(error) {
      console.log(error.message)
      dispatch({type: FETCH_SINGLE_CLIENT_FAILURE, payload: error.message})
   }
}

const DeleteSingleClient = ({clientId}) => async (dispatch, getState) => {
   try {
      dispatch({type: DELETE_SINGLE_CLIENT_REQUEST})
      const {user} = getState()
      const {data} = await axios.delete("http://localhost:7000/api/client/" + clientId, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('FETCH SINGLE CLIENT REDUX', data)
      dispatch({type: DELETE_SINGLE_CLIENT_SUCCESS, payload: data})
   } catch(error) {
      console.log(error.message)
      dispatch({type: DELETE_SINGLE_CLIENT_FAILURE, payload: error.message})
   }
}

const UpdateSingleClient = ({clientId}) => async (dispatch, getState) => {
   try {
      dispatch({type: UPDATE_SINGLE_CLIENT_REQUEST})
      const {user} = getState()
      const {data} = await axios.put("http://localhost:7000/api/client/" + clientId, {}, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('UPDATE SINGLE CLIENT REDUX', data)
      dispatch({type: UPDATE_SINGLE_CLIENT_SUCCESS, payload: data})
   } catch(error) {
      console.log(error.message)
      dispatch({type: UPDATE_SINGLE_CLIENT_FAILURE, payload: error.message})
   }
}

export {CreateNewClient, FetchClients, FetchSingleClient, DeleteSingleClient, UpdateSingleClient}