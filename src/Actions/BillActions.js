import axios from 'axios'
import {
   BILL_SAVE_REQUEST, BILL_SAVE_SUCCESS, BILL_SAVE_ERROR,
   BILLS_FETCH_REQUEST, BILLS_FETCH_SUCCESS, BILLS_FETCH_ERROR
} from '../Constants/BillConstants'

const SaveBill = ({propertyType,landValue,scale,advocate, total}) => async (dispatch) => {

   try {
      dispatch({type: BILL_SAVE_REQUEST, payload: {propertyType,landValue,scale,advocate, total} })
      const {data} = await axios.post('http://localhost:7000/api/bill')
      console.log(data)
      dispatch({type: BILL_SAVE_SUCCESS, payload: data})
   } catch(error) {
      dispatch({type: BILL_SAVE_ERROR, payload: error.message})
      console.log(error)
   }
}

const AllBills = () => async (dispatch) => {

   try {
      dispatch({type:BILLS_FETCH_REQUEST})
      const {data} = await axios.get('http://localhost:7000/api/bill')
      dispatch({type: BILLS_FETCH_SUCCESS, payload:data})
   } catch (error) {
      dispatch({type: BILLS_FETCH_ERROR, payload: error.message})
      console.log(error)
   }
}

export {SaveBill, AllBills}