import axios from 'axios'
import {
   COMPANY_SAVE_REQUEST, 
   COMPANY_SAVE_SUCCESS, 
   COMPANY_SAVE_ERROR,
   COMPANIES_FETCH_REQUEST, 
   COMPANIES_FETCH_SUCCESS, 
   COMPANIES_FETCH_ERROR, 
   CLIENT_COMPANIES_FETCH_REQUEST, 
   CLIENT_COMPANIES_FETCH_SUCCESS, 
   CLIENT_COMPANIES_FETCH_ERROR, 
   USER_COMPANIES_FETCH_REQUEST, 
   USER_COMPANIES_FETCH_SUCCESS, 
   USER_COMPANIES_FETCH_ERROR, 
   COMPANY_SAVE_FINISHED,
   FETCH_A_COMPANY_REQUEST,
   FETCH_A_COMPANY_SUCCESS,
   FETCH_A_COMPANY_FAILURE,
   DELETE_A_COMPANY_REQUEST,
   DELETE_A_COMPANY_SUCCESS,
   DELETE_A_COMPANY_FINISHED,
   DELETE_A_COMPANY_FAILURE,
   COMPANY_UPDATE_ERROR,
   COMPANY_UPDATE_FINISHED,
   COMPANY_UPDATE_REQUEST,
   COMPANY_UPDATE_SUCCESS,
   COMPANY_FETCH_REQUEST,
   COMPANY_FETCH_SUCCESS,
   COMPANY_FETCH_ERROR,
} from '../Constants/CompanyConstants'

const SaveCompanyBill = ({clientId, assignedTo, capital, advocateInstructions, advocateExpenses, 
         total, openDate, closeDate}) => async (dispatch, getState) => {
   // console.log(clientId, assignedTo, capital, advocateInstructions, advocateExpenses, total, openDate, closeDate)
   const {user} = getState()
   try {
      dispatch({type: COMPANY_SAVE_REQUEST, payload: {
         clientId, assignedTo, capital, advocateInstructions, advocateExpenses, total, openDate, closeDate
      } })
      const {data} = await axios.post(process.env.REACT_APP_API_URL + '/api/company', {
         clientId, assignedTo, capital, advocateInstructions, advocateExpenses, total, openDate, closeDate
      }, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log(data)
      dispatch({type: COMPANY_SAVE_SUCCESS, payload: data})
      dispatch({type: COMPANY_SAVE_FINISHED})
   } catch(error) {
      dispatch({type: COMPANY_SAVE_ERROR, payload: error.message})
      console.log(error)
   }
}

const FetchACompanyBill = (companyId) => async (dispatch, getState) => {
   console.log('FROM REDUX', companyId)
   try {
      dispatch({type: FETCH_A_COMPANY_REQUEST})
      const {user} = getState()
      const {data} = await axios.get(process.env.REACT_APP_API_URL + "/api/company/" + companyId, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('FETCH SINGLE COMPANY REDUX', data)
      dispatch({type: FETCH_A_COMPANY_SUCCESS, payload: data})
   } catch(error) {
      console.log(error.message)
      dispatch({type: FETCH_A_COMPANY_FAILURE, payload: error.message})
   }
}
const AllCompanyBills = () => async (dispatch, getState) => {
   const {user} = getState()

   try {
      dispatch({type:COMPANIES_FETCH_REQUEST})
      const {data} = await axios.get(process.env.REACT_APP_API_URL + '/api/company', {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log(data);
      dispatch({type: COMPANIES_FETCH_SUCCESS, payload:data})
   } catch (error) {
      dispatch({type: COMPANIES_FETCH_ERROR, payload: error.message})
      console.log(error)
   }
}

// const AllClientCompaniess = () => async (dispatch, getState) => {
//    const {user} = getState()

//    try {
//       dispatch({type: CLIENT_COMPANY_FETCH_REQUEST})
//       const {data} = await axios.get(process.env.REACT_APP_API_URL + '/api/company/client', {
//          headers: {'Authorization': 'Bearer ' + user.token}
//       })
//       console.log(data);
//       dispatch({type: CLIENT_COMPANY_FETCH_SUCCESS, payload:data})
//    } catch (error) {
//       dispatch({type: CLIENT_COMPANY_FETCH_ERROR, payload: error.message})
//       console.log(error)
//    }
// }

const AllUserCompanyBills = () => async (dispatch, getState) => {
   const {user} = getState()

   try {
      dispatch({type: USER_COMPANIES_FETCH_REQUEST})
      const {data} = await axios.get(process.env.REACT_APP_API_URL + '/api/company/user', {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('ALL USER COMPANYS', data);
      dispatch({type: USER_COMPANIES_FETCH_SUCCESS, payload:data})
   } catch (error) {
      dispatch({type: USER_COMPANIES_FETCH_ERROR, payload: error.message})
      console.log(error)
   }
}


const DeleteACompanyBill = ({companyId}) => async (dispatch, getState) => {
   // console.log('FROM REDUX DELETE', companyId)
   try {
      dispatch({type: DELETE_A_COMPANY_REQUEST})
      const {user} = getState()
      const {data} = await axios.delete(process.env.REACT_APP_API_URL + "/api/company/" + companyId, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('DELETE SINGLE COMPANY REDUX', data)
      dispatch({type: DELETE_A_COMPANY_SUCCESS, payload: data})
      dispatch({type: DELETE_A_COMPANY_FINISHED})
   } catch(error) {
      console.log(error.message)
      dispatch({type: DELETE_A_COMPANY_FAILURE, payload: error.message})
   }

}

const UpdateACompanyBill = ({companyId, clientId, assignedTo, subjectValue, status, court, remand, offence, committed, firmExpenses, notes, advocateExpenses, closeDate, openDate,total}) => async (dispatch, getState) => {
   console.log('UPDATE BILL REDUX SAYS', companyId,clientId, assignedTo, subjectValue, status, court, remand, offence, committed, firmExpenses, notes, advocateExpenses, closeDate, openDate,total)
   try {
      dispatch({type: COMPANY_UPDATE_REQUEST})
      const {user} = getState()
      const {data} = await axios.put(process.env.REACT_APP_API_URL + "/api/company/" + companyId, 
      {companyId, clientId, assignedTo, subjectValue, status, court, remand, offence, committed, firmExpenses, notes, advocateExpenses, closeDate, openDate,total}, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log('UPDATE SINGLE BILL REDUX', data)
      dispatch({type: COMPANY_UPDATE_SUCCESS, payload: data})
      dispatch({type: COMPANY_UPDATE_FINISHED})
   } catch(error) {
      console.log(error.message)
      dispatch({type: COMPANY_UPDATE_ERROR, payload: error.message})
   }
   
}

export {
   SaveCompanyBill, 
   AllCompanyBills, 
   AllUserCompanyBills, 
   // AllClientCOMPANYs, 
   FetchACompanyBill,
   DeleteACompanyBill,
   UpdateACompanyBill
}