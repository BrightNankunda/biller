import axios from 'axios'
import {
   CRIMINAL_SAVE_REQUEST, 
   CRIMINAL_SAVE_SUCCESS, 
   CRIMINAL_SAVE_ERROR,
   CRIMINALS_FETCH_REQUEST, 
   CRIMINALS_FETCH_SUCCESS, 
   CRIMINALS_FETCH_ERROR, 
   CLIENT_CRIMINALS_FETCH_REQUEST, 
   CLIENT_CRIMINALS_FETCH_SUCCESS, 
   CLIENT_CRIMINALS_FETCH_ERROR, 
   USER_CRIMINALS_FETCH_REQUEST, 
   USER_CRIMINALS_FETCH_SUCCESS, 
   USER_CRIMINALS_FETCH_ERROR, 
   CRIMINAL_SAVE_FINISHED,
   FETCH_A_CRIMINAL_REQUEST,
   FETCH_A_CRIMINAL_SUCCESS,
   FETCH_A_CRIMINAL_FAILURE,
   DELETE_A_CRIMINAL_REQUEST,
   DELETE_A_CRIMINAL_SUCCESS,
   DELETE_A_CRIMINAL_FINISHED,
   DELETE_A_CRIMINAL_FAILURE,
   CRIMINAL_UPDATE_ERROR,
   CRIMINAL_UPDATE_FINISHED,
   CRIMINAL_UPDATE_REQUEST,
   CRIMINAL_UPDATE_SUCCESS,
   CRIMINAL_FETCH_REQUEST,
   CRIMINAL_FETCH_SUCCESS,
   CRIMINAL_FETCH_ERROR,
} from '../Constants/CriminalConstants'

const SaveCriminal = ({clientId, assignedTo, subjectValue, status, court, remand, offence, committed, firmExpenses, notes, advocateExpenses, closeDate, openDate,total}) => async (dispatch, getState) => {
   // console.log(clientId, assignedTo, subjectValue, status, court, remand, offence, committed, firmExpenses, advocateExpenses, closeDate, openDate,total)
   const {user} = getState()
   try {
      dispatch({type: CRIMINAL_SAVE_REQUEST, payload: {
         assignedTo, subjectValue, status, court, remand, offence, committed, firmExpenses, notes, advocateExpenses, closeDate, openDate,total
      } })
      const {data} = await axios.post(process.env.REACT_APP_API_URL + '/api/criminal', {
         clientId, assignedTo, subjectValue, status, court, remand, offence, committed, firmExpenses, notes, advocateExpenses, closeDate, openDate,total
      }, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log(data)
      dispatch({type: CRIMINAL_SAVE_SUCCESS, payload: data})
      dispatch({type: CRIMINAL_SAVE_FINISHED})
   } catch(error) {
      dispatch({type: CRIMINAL_SAVE_ERROR, payload: error.message})
      console.log(error)
   }
}

const FetchACriminal = (criminalId) => async (dispatch, getState) => {
   console.log('FROM REDUX', criminalId)
   try {
      dispatch({type: FETCH_A_CRIMINAL_REQUEST})
      const {user} = getState()
      const {data} = await axios.get(process.env.REACT_APP_API_URL + "/api/criminal/" + criminalId, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('FETCH SINGLE CRIMINAL REDUX', data)
      dispatch({type: FETCH_A_CRIMINAL_SUCCESS, payload: data})
   } catch(error) {
      console.log(error.message)
      dispatch({type: FETCH_A_CRIMINAL_FAILURE, payload: error.message})
   }
}
const AllCriminals = () => async (dispatch, getState) => {
   const {user} = getState()

   try {
      dispatch({type:CRIMINALS_FETCH_REQUEST})
      const {data} = await axios.get(process.env.REACT_APP_API_URL + '/api/criminal', {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log(data);
      dispatch({type: CRIMINALS_FETCH_SUCCESS, payload:data})
   } catch (error) {
      dispatch({type: CRIMINALS_FETCH_ERROR, payload: error.message})
      console.log(error)
   }
}

// const AllClientCriminals = () => async (dispatch, getState) => {
//    const {user} = getState()

//    try {
//       dispatch({type: CLIENT_CRIMINAL_FETCH_REQUEST})
//       const {data} = await axios.get(process.env.REACT_APP_API_URL + '/api/criminal/client', {
//          headers: {'Authorization': 'Bearer ' + user.token}
//       })
//       console.log(data);
//       dispatch({type: CLIENT_CRIMINAL_FETCH_SUCCESS, payload:data})
//    } catch (error) {
//       dispatch({type: CLIENT_CRIMINAL_FETCH_ERROR, payload: error.message})
//       console.log(error)
//    }
// }

const AllUserCriminals = () => async (dispatch, getState) => {
   const {user} = getState()

   try {
      dispatch({type: USER_CRIMINALS_FETCH_REQUEST})
      const {data} = await axios.get(process.env.REACT_APP_API_URL + '/api/criminal/user', {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('ALL USER CRIMINALS', data);
      dispatch({type: USER_CRIMINALS_FETCH_SUCCESS, payload:data})
   } catch (error) {
      dispatch({type: USER_CRIMINALS_FETCH_ERROR, payload: error.message})
      console.log(error)
   }
}


const DeleteACriminal = ({criminalId}) => async (dispatch, getState) => {
   // console.log('FROM REDUX DELETE', criminalId)
   try {
      dispatch({type: DELETE_A_CRIMINAL_REQUEST})
      const {user} = getState()
      const {data} = await axios.delete(process.env.REACT_APP_API_URL + "/api/criminal/" + criminalId, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('DELETE SINGLE CRIMINAL REDUX', data)
      dispatch({type: DELETE_A_CRIMINAL_SUCCESS, payload: data})
      dispatch({type: DELETE_A_CRIMINAL_FINISHED})
   } catch(error) {
      console.log(error.message)
      dispatch({type: DELETE_A_CRIMINAL_FAILURE, payload: error.message})
   }

}

const UpdateACriminal = ({criminalId, clientId, assignedTo, subjectValue, status, court, remand, offence, committed, firmExpenses, notes, advocateExpenses, closeDate, openDate,total}) => async (dispatch, getState) => {
   console.log('UPDATE BILL REDUX SAYS', criminalId,clientId, assignedTo, subjectValue, status, court, remand, offence, committed, firmExpenses, notes, advocateExpenses, closeDate, openDate,total)
   // try {
   //    dispatch({type: CRIMINAL_UPDATE_REQUEST})
   //    const {user} = getState()
   //    const {data} = await axios.put(process.env.REACT_APP_API_URL + "/api/criminal/" + criminalId, 
   //    {criminalId, clientId, propertyType,landValue,scale,rentalType,advocate,registered,total}, {
   //       headers: {'Authorization': 'Bearer ' + user.token}
   //    })
   //    console.log('UPDATE SINGLE BILL REDUX', data)
   //    dispatch({type: CRIMINAL_UPDATE_SUCCESS, payload: data})
   //    dispatch({type: CRIMINAL_UPDATE_FINISHED})
   // } catch(error) {
   //    console.log(error.message)
   //    dispatch({type: CRIMINAL_UPDATE_ERROR, payload: error.message})
   // }
   
}

export {
   SaveCriminal, 
   AllCriminals, 
   AllUserCriminals, 
   // AllClientCriminals, 
   FetchACriminal,
   DeleteACriminal,
   UpdateACriminal
}