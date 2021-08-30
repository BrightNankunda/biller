import {
   CRIMINAL_SAVE_REQUEST, 
   CRIMINAL_SAVE_SUCCESS, 
   CRIMINAL_SAVE_ERROR,
   CRIMINALS_FETCH_REQUEST, 
   CRIMINALS_FETCH_SUCCESS, 
   CRIMINALS_FETCH_ERROR, 
   CRIMINAL_SAVE_FINISHED, 
   USER_CRIMINALS_FETCH_REQUEST, 
   USER_CRIMINALS_FETCH_SUCCESS, 
   USER_CRIMINALS_FETCH_ERROR, 
   CLIENT_CRIMINALS_FETCH_REQUEST, 
   CLIENT_CRIMINALS_FETCH_SUCCESS, 
   CLIENT_CRIMINALS_FETCH_ERROR,
   FETCH_A_CRIMINAL_REQUEST,
   FETCH_A_CRIMINAL_SUCCESS,
   FETCH_A_CRIMINAL_FAILURE,
   CRIMINAL_UPDATE_REQUEST,
   CRIMINAL_UPDATE_SUCCESS,
   CRIMINAL_UPDATE_FINISHED,
   CRIMINAL_UPDATE_ERROR,
   DELETE_A_CRIMINAL_REQUEST,
   DELETE_A_CRIMINAL_SUCCESS,
   DELETE_A_CRIMINAL_FINISHED,
   DELETE_A_CRIMINAL_FAILURE
} from '../Constants/CriminalConstants'

function SaveCriminalReducer(state={loading: false, newCriminal: null, redirectCriminalCreator: false}, action) {
   switch(action.type) {
      case CRIMINAL_SAVE_REQUEST: 
         return {loading: true}
      case CRIMINAL_SAVE_SUCCESS:
         return {
            loading: false, 
            newCriminal: action.payload, 
            redirectCriminalCreator: true
         }
      case CRIMINAL_SAVE_FINISHED:
         return {
            loading: false, 
            newCriminal: null, 
            redirectCriminalCreator: false
         }
      case CRIMINAL_SAVE_ERROR:
         return {loading: false, error: action.payload}
      default:
         return state
   }
}

function FetchCriminalsReducer(state={criminals: [], loading: false, criminalsCount: 0}, action) {
   switch(action.type) {
      case CRIMINALS_FETCH_REQUEST:
         return {...state, loading: true}
      case CRIMINALS_FETCH_SUCCESS:
         return {...state, loading: false, 
            criminals: action.payload, criminalsCount: action.payload.length}
         
      case CRIMINALS_FETCH_ERROR:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function FetchUserCriminalsReducer(state = 
   {criminals: [], loading: false, criminalsCount: 0}, action) {
   switch(action.type) {
      case USER_CRIMINALS_FETCH_REQUEST:
         return {...state, loading: true}
      case USER_CRIMINALS_FETCH_SUCCESS:
         return {...state, loading: false, criminals: action.payload, 
            criminalsCount: action.payload.length}
         
      case USER_CRIMINALS_FETCH_ERROR:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function FetchClientCriminalsReducer(state={criminals: [], loading: false, criminalsCount: 0}, action) {
   switch(action.type) {
      case CLIENT_CRIMINALS_FETCH_REQUEST:
         return {...state, loading: true}
      case CLIENT_CRIMINALS_FETCH_SUCCESS:
         return {...state, loading: false, criminals: action.payload, 
            criminalsCount: action.payload.length}
         
      case CLIENT_CRIMINALS_FETCH_ERROR:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function FetchACriminalReducer(state={criminal: null, loading: false}, action) {
   switch(action.type) {
      case FETCH_A_CRIMINAL_REQUEST:
         return {...state, loading: true}
      case FETCH_A_CRIMINAL_SUCCESS:
         return {...state, loading: false, criminal: action.payload} 
      case FETCH_A_CRIMINAL_FAILURE:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function DeleteACriminalReducer(state={redirectCriminalDeletor: false, loading: false, }, action) {
   switch(action.type) {
      case DELETE_A_CRIMINAL_REQUEST:
         return {...state, loading: true}
      case DELETE_A_CRIMINAL_SUCCESS:
         return {...state, loading: false, redirectCriminalDeletor: true}
      case DELETE_A_CRIMINAL_FINISHED:
         return {...state, loading: false, redirectCriminalDeletor: false}  
      case DELETE_A_CRIMINAL_FAILURE:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function UpdateACriminalReducer(state={redirectCriminalUpdator: false, loading: false, }, action) {
   switch(action.type) {
      case CRIMINAL_UPDATE_REQUEST:
         return {...state, loading: true}
      case CRIMINAL_UPDATE_SUCCESS:
         return {...state, loading: false, redirectCriminalUpdator: true}
      case CRIMINAL_UPDATE_FINISHED:
         return {...state, loading: false, redirectCriminalUpdator: false}  
      case CRIMINAL_UPDATE_ERROR:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

export {
   SaveCriminalReducer, 
   FetchCriminalsReducer, 
   FetchUserCriminalsReducer, 
   FetchACriminalReducer,
   FetchClientCriminalsReducer,
   UpdateACriminalReducer,
   DeleteACriminalReducer
}