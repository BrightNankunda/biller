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
   FETCH_A_BILL_FAILURE,
   DELETE_A_BILL_REQUEST,
   DELETE_A_BILL_SUCCESS,
   DELETE_A_BILL_FINISHED,
   DELETE_A_BILL_FAILURE,
   BILL_UPDATE_ERROR,
   BILL_UPDATE_FINISHED,
   BILL_UPDATE_REQUEST,
   BILL_UPDATE_SUCCESS,
} from '../Constants/BillConstants'

const SaveBill = ({clientId, propertyType,landValue,scale,rentalType,advocate,registered,total}) => async (dispatch, getState) => {
   // console.log(clientId, propertyType,landValue,scale,rentalType,advocate,registered,total)
   const {user} = getState()
   try {
      dispatch({type: BILL_SAVE_REQUEST, payload: {
         propertyType,landValue,scale,rentalType,advocate,registered,total
      } })
      const {data} = await axios.post(process.env.REACT_APP_API_URL + '/api/bill', {
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
      const {data} = await axios.get(process.env.REACT_APP_API_URL + '/api/bill', {
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
      const {data} = await axios.get(process.env.REACT_APP_API_URL + '/api/bill/client', {
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
      const {data} = await axios.get(process.env.REACT_APP_API_URL + '/api/bill/user', {
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
      const {data} = await axios.get(process.env.REACT_APP_API_URL + "/api/bill/" + billId, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('FETCH SINGLE BILL REDUX', data)
      dispatch({type: FETCH_A_BILL_SUCCESS, payload: data})
   } catch(error) {
      console.log(error.message)
      dispatch({type: FETCH_A_BILL_FAILURE, payload: error.message})
   }
}

const DeleteABill = ({billId}) => async (dispatch, getState) => {
   // console.log('FROM REDUX DELETE', billId)
   try {
      dispatch({type: DELETE_A_BILL_REQUEST})
      const {user} = getState()
      const {data} = await axios.delete(process.env.REACT_APP_API_URL + "/api/bill/" + billId, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('DELETE SINGLE BILL REDUX', data)
      dispatch({type: DELETE_A_BILL_SUCCESS, payload: data})
      dispatch({type: DELETE_A_BILL_FINISHED})
   } catch(error) {
      console.log(error.message)
      dispatch({type: DELETE_A_BILL_FAILURE, payload: error.message})
   }

}

const UpdateABill = ({billId, clientId, propertyType,landValue,scale,rentalType,advocate,registered,total}) => async (dispatch, getState) => {
   // console.log('UPDATE BILL REDUX SAYS', billId,clientId, propertyType,landValue,scale,rentalType,advocate,registered,total)
   try {
      dispatch({type: BILL_UPDATE_REQUEST})
      const {user} = getState()
      const {data} = await axios.put(process.env.REACT_APP_API_URL + "/api/bill/" + billId, 
      {billId, clientId, propertyType,landValue,scale,rentalType,advocate,registered,total}, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('UPDATE SINGLE BILL REDUX', data)
      dispatch({type: BILL_UPDATE_SUCCESS, payload: data})
      dispatch({type: BILL_UPDATE_FINISHED})
   } catch(error) {
      console.log(error.message)
      dispatch({type: BILL_UPDATE_ERROR, payload: error.message})
   }
   
}

export {
   SaveBill, 
   AllBills, 
   AllUserBills, 
   AllClientBills, 
   FetchABill,
   DeleteABill,
   UpdateABill
}