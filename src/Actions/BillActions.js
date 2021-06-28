import axios from 'axios'
import {
   BILL_SAVE_REQUEST, 
   BILL_SAVE_SUCCESS, 
   BILL_SAVE_ERROR,
   BILLS_FETCH_REQUEST, 
   BILLS_FETCH_SUCCESS, 
   BILLS_FETCH_ERROR, 
   CLIENT_BILLS_FETCH_REQUEST, 
   CLIENT_BILLS_FETCH_SUCCESS, 
   CLIENT_BILLS_FETCH_ERROR, 
   USER_BILLS_FETCH_REQUEST, 
   USER_BILLS_FETCH_SUCCESS, 
   USER_BILLS_FETCH_ERROR, 
   BILL_SAVE_FINISHED,
   FETCH_A_BILL_REQUEST,
   FETCH_A_BILL_SUCCESS,
   FETCH_A_BILL_FAILURE
} from '../Constants/BillConstants'

const SaveBill = ({clientId, propertyType,landValue,scale,rentalType,advocate,registered,total}) => async (dispatch, getState) => {
   // console.log(clientId, propertyType,landValue,scale,rentalType,advocate,registered,total)
   const {user} = getState()
   try {
      dispatch({type: BILL_SAVE_REQUEST, payload: {
         propertyType,landValue,scale,rentalType,advocate,registered,total
      } })
      const {data} = await axios.post('http://localhost:7000/api/bill', {
         clientId, propertyType,landValue,scale,rentalType,advocate,registered,total
      }, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log(data)
      dispatch({type: BILL_SAVE_SUCCESS, payload: data})
      dispatch({type: BILL_SAVE_FINISHED})
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

const AllClientBills = () => async (dispatch, getState) => {
   const {user} = getState()

   try {
      dispatch({type: CLIENT_BILLS_FETCH_REQUEST})
      const {data} = await axios.get('http://localhost:7000/api/bill/client', {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log(data);
      dispatch({type: CLIENT_BILLS_FETCH_SUCCESS, payload:data})
   } catch (error) {
      dispatch({type: CLIENT_BILLS_FETCH_ERROR, payload: error.message})
      console.log(error)
   }
}

const AllUserBills = () => async (dispatch, getState) => {
   const {user} = getState()

   try {
      dispatch({type: USER_BILLS_FETCH_REQUEST})
      const {data} = await axios.get('http://localhost:7000/api/bill/user', {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('ALL USER BILLS', data);
      dispatch({type: USER_BILLS_FETCH_SUCCESS, payload:data})
   } catch (error) {
      dispatch({type: USER_BILLS_FETCH_ERROR, payload: error.message})
      console.log(error)
   }
}

const FetchABill = (billId) => async (dispatch, getState) => {
   console.log('FROM REDUX', billId)
   try {
      dispatch({type: FETCH_A_BILL_REQUEST})
      const {user} = getState()
      const {data} = await axios.get("http://localhost:7000/api/bill/" + billId, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('FETCH SINGLE BILL REDUX', data)
      dispatch({type: FETCH_A_BILL_SUCCESS, payload: data})
   } catch(error) {
      console.log(error.message)
      dispatch({type: FETCH_A_BILL_FAILURE, payload: error.message})
   }
}

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

export {
   SaveBill, AllBills, 
   AllUserBills, AllClientBills, 
   FetchABill
}