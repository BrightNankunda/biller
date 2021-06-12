import axios from 'axios'
import { CREATE_CLIENT_FAILURE, CREATE_CLIENT_REQUEST, CREATE_CLIENT_SUCCESS } from '../Constants/ClientConstants'

const CreateNewClient = ({clientName}) => async (dispatch, getState) => {
   try {
      dispatch({type: CREATE_CLIENT_REQUEST, payload: clientName})
      const {user} = getState()
      const {data} = await axios.post("http://localhost:7000/api/client", {clientName}, {
         headers: {'Authorization': 'Bearer ' + user}
      })
      console.log(data)
      dispatch({type: CREATE_CLIENT_SUCCESS, payload: data})
   } catch (error) {
      console.log(error.message)
      dispatch({type: CREATE_CLIENT_FAILURE, payload: error.message})
   }
}

export {CreateNewClient}