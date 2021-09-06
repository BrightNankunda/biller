import {
   COMPANY_SAVE_REQUEST, 
   COMPANY_SAVE_SUCCESS, 
   COMPANY_SAVE_ERROR,
   COMPANIES_FETCH_REQUEST, 
   COMPANIES_FETCH_SUCCESS, 
   COMPANIES_FETCH_ERROR, 
   COMPANY_SAVE_FINISHED, 
   USER_COMPANIES_FETCH_REQUEST, 
   USER_COMPANIES_FETCH_SUCCESS, 
   USER_COMPANIES_FETCH_ERROR, 
   CLIENT_COMPANIES_FETCH_REQUEST, 
   CLIENT_COMPANIES_FETCH_SUCCESS, 
   CLIENT_COMPANIES_FETCH_ERROR,
   FETCH_A_COMPANY_REQUEST,
   FETCH_A_COMPANY_SUCCESS,
   FETCH_A_COMPANY_FAILURE,
   COMPANY_UPDATE_REQUEST,
   COMPANY_UPDATE_SUCCESS,
   COMPANY_UPDATE_FINISHED,
   COMPANY_UPDATE_ERROR,
   DELETE_A_COMPANY_REQUEST,
   DELETE_A_COMPANY_SUCCESS,
   DELETE_A_COMPANY_FINISHED,
   DELETE_A_COMPANY_FAILURE,
   COMPANIES_FETCH_EMPTY,
   USER_COMPANIES_EMPTY,
   CLIENT_COMPANIES_EMPTY
} from '../Constants/CompanyConstants'

function SaveCompanyBillReducer(state={loading: false, newCompanyBill: null, redirectCompanyBillCreator: false}, action) {
   switch(action.type) {
      case COMPANY_SAVE_REQUEST: 
         return {loading: true}
      case COMPANY_SAVE_SUCCESS:
         return {
            loading: false, 
            newCompanyBill: action.payload, 
            redirectCompanyBillCreator: true
         }
      case COMPANY_SAVE_FINISHED:
         return {
            loading: false, 
            newCompanyBill: null, 
            redirectCompanyBillCreator: false
         }
      case COMPANY_SAVE_ERROR:
         return {loading: false, error: action.payload}
      default:
         return state
   }
}

function FetchCompanyBillsReducer(state={companyBills: [], loading: false, companyBillsCount: 0}, action) {
   switch(action.type) {
      case COMPANIES_FETCH_REQUEST:
         return {...state, loading: true}
      case COMPANIES_FETCH_SUCCESS:
         return {...state, loading: false, 
            companyBills: action.payload, companyBillsCount: action.payload.length}
      case COMPANIES_FETCH_EMPTY:
         return {...state, companyBills: [], loading: false, companyBillsCount: 0} 
      case COMPANIES_FETCH_ERROR:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function FetchUserCompanyBillsReducer(state = 
   {companyBills: [], loading: false, companyBillsCount: 0}, action) {
   switch(action.type) {
      case USER_COMPANIES_FETCH_REQUEST:
         return {...state, loading: true}
      case USER_COMPANIES_FETCH_SUCCESS:
         return {...state, loading: false, companyBills: action.payload, 
            companyBillsCount: action.payload.length}
      case USER_COMPANIES_EMPTY: 
            return {...state, companyBills: [], loading: false, companyBillsCount: 0}
      case USER_COMPANIES_FETCH_ERROR:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function FetchClientCompanyBillsReducer(state={companyBills: [], loading: false, companyBillsCount: 0}, action) {
   switch(action.type) {
      case CLIENT_COMPANIES_FETCH_REQUEST:
         return {...state, loading: true}
      case CLIENT_COMPANIES_FETCH_SUCCESS:
         return {...state, loading: false, companyBills: action.payload, 
            companyBillsCount: action.payload.length}
      case CLIENT_COMPANIES_EMPTY:
         return {...state, companyBills: [], loading: false, companyBillsCount: 0}   
      case CLIENT_COMPANIES_FETCH_ERROR:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function FetchACompanyBillReducer(state={companyBill: null, loading: false}, action) {
   switch(action.type) {
      case FETCH_A_COMPANY_REQUEST:
         return {...state, loading: true}
      case FETCH_A_COMPANY_SUCCESS:
         return {...state, loading: false, companyBill: action.payload} 
      case FETCH_A_COMPANY_FAILURE:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function DeleteACompanyBillReducer(state={redirectCompanyBillDeletor: false, loading: false, }, action) {
   switch(action.type) {
      case DELETE_A_COMPANY_REQUEST:
         return {...state, loading: true}
      case DELETE_A_COMPANY_SUCCESS:
         return {...state, loading: false, redirectCompanyBillDeletor: true}
      case DELETE_A_COMPANY_FINISHED:
         return {...state, loading: false, redirectCompanyBillDeletor: false}  
      case DELETE_A_COMPANY_FAILURE:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function UpdateACompanyReducer(state={redirectCompanyBillUpdator: false, loading: false, }, action) {
   switch(action.type) {
      case COMPANY_UPDATE_REQUEST:
         return {...state, loading: true}
      case COMPANY_UPDATE_SUCCESS:
         return {...state, loading: false, redirectCompanyBillUpdator: true}
      case COMPANY_UPDATE_FINISHED:
         return {...state, loading: false, redirectCompanyBillUpdator: false}  
      case COMPANY_UPDATE_ERROR:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

export {
   SaveCompanyBillReducer, 
   FetchCompanyBillsReducer, 
   FetchUserCompanyBillsReducer, 
   FetchACompanyBillReducer,
   FetchClientCompanyBillsReducer,
   UpdateACompanyReducer,
   DeleteACompanyBillReducer
}