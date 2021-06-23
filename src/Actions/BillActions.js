import axios from 'axios'
import {
   BILL_SAVE_REQUEST, BILL_SAVE_SUCCESS, BILL_SAVE_ERROR,
   BILLS_FETCH_REQUEST, BILLS_FETCH_SUCCESS, BILLS_FETCH_ERROR
} from '../Constants/BillConstants'

const SaveBill = ({propertyType,landValue,scale,rentalType,advocate,registered,total}) => async (dispatch, getState) => {
   // console.log(landValue, scale, total)
   const {user} = getState()
   try {
      dispatch({type: BILL_SAVE_REQUEST, payload: {
         propertyType,landValue,scale,rentalType,advocate,registered,total
      } })
      const {data} = await axios.post('http://localhost:7000/api/bill', {
         propertyType,landValue,scale,rentalType,advocate,registered,total
      }, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log(data)
      dispatch({type: BILL_SAVE_SUCCESS, payload: data})
   } catch(error) {
      dispatch({type: BILL_SAVE_ERROR, payload: error.message})
      console.log(error)
   }
}

const AllBills = () => async (dispatch, getState) => {
   const {user} = getState()

   try {
      dispatch({type:BILLS_FETCH_REQUEST})
      const {data} = await axios.get('http://localhost:7000/api/bill', {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log(data);
      dispatch({type: BILLS_FETCH_SUCCESS, payload:data})
   } catch (error) {
      dispatch({type: BILLS_FETCH_ERROR, payload: error.message})
      console.log(error)
   }
}

// const FetchABill = ({billId}) => async (dispatch, getState) => {
//    try {
//       dispatch({type: FETCH_SINGLE_CLIENT_REQUEST})
//       const {user} = getState()
//       const {data} = await axios.get("http://localhost:7000/api/client/" + clientId, {
//          headers: {'Authorization': 'Bearer ' + user.token}
//       })
//       console.log('FETCH SINGLE CLIENT REDUX', data)
//       dispatch({type: FETCH_SINGLE_CLIENT_SUCCESS, payload: data})
//    } catch(error) {
//       console.log(error.message)
//       dispatch({type: FETCH_SINGLE_CLIENT_FAILURE, payload: error.message})
//    }
// }

// const DeleteABill = ({billId}) => async (dispatch, getState) => {
//    try {
//       dispatch({type: DELETE_SINGLE_CLIENT_REQUEST})
//       const {user} = getState()
//       const {data} = await axios.delete("http://localhost:7000/api/client/" + clientId, {
//          headers: {'Authorization': 'Bearer ' + user.token}
//       })
//       console.log('DELETE SINGLE CLIENT REDUX', data)
//       dispatch({type: DELETE_SINGLE_CLIENT_SUCCESS, payload: data})
//    } catch(error) {
//       console.log(error.message)
//       dispatch({type: DELETE_SINGLE_CLIENT_FAILURE, payload: error.message})
//    }

// }

// const UpdateABill = ({id, firstName, lastName, middleName, email, phoneNumber, occupation, address}) => async (dispatch, getState) => {
//    try {
//       dispatch({type: UPDATE_SINGLE_CLIENT_REQUEST})
//       const {user} = getState()
//       const {data} = await axios.put("http://localhost:7000/api/client/" + id, {firstName, lastName, middleName, email, phoneNumber, occupation, address}, {
//          headers: {'Authorization': 'Bearer ' + user.token}
//       })
//       console.log('UPDATE SINGLE CLIENT REDUX', data)
//       dispatch({type: UPDATE_SINGLE_CLIENT_SUCCESS, payload: data})
//       dispatch({type: UPDATE_SINGLE_CLIENT_FINISHED})
//    } catch(error) {
//       console.log(error.message)
//       dispatch({type: UPDATE_SINGLE_CLIENT_FAILURE, payload: error.message})
//    }
   
// }

export {SaveBill, AllBills}