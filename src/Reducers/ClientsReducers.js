import { 
   CREATE_CLIENT_FAILURE, 
   CREATE_CLIENT_REQUEST, 
   CREATE_CLIENT_SUCCESS, 
   FETCH_CLIENTS_FAILURE, 
   FETCH_CLIENTS_REQUEST, 
   FETCH_CLIENTS_SUCCESS, 
   FETCH_SINGLE_CLIENT_FAILURE, 
   FETCH_SINGLE_CLIENT_REQUEST, 
   FETCH_SINGLE_CLIENT_SUCCESS
} from "../Constants/ClientConstants"

const CreateNewClientReducer = (state={}, action) => {
   switch(action.type) {
      case CREATE_CLIENT_REQUEST:
         return { ...state, loading: true}
      case CREATE_CLIENT_SUCCESS:
         return {...state, loading: false, clients: action.payload}
      case CREATE_CLIENT_FAILURE:
         return {...state, loading:  false, error: action.payload}
      default:
         return state;
   }
}

const FetchAllClientsReducer = (state={}, action) => {
   switch(action.type) {
      case FETCH_CLIENTS_REQUEST:
         return { ...state, loading: true}
      case FETCH_CLIENTS_SUCCESS:
         return {...state, loading: false, clients: action.payload}
      case FETCH_CLIENTS_FAILURE:
         return {...state, loading:  false, error: action.payload}
      default:
         return state;
   }
}

const FetchSingleClientReducer = (state={loading: false}, action) => {
   switch(action.type) {
      case FETCH_SINGLE_CLIENT_REQUEST:
         return {...state, loading: true}
      case FETCH_SINGLE_CLIENT_SUCCESS:
         return {...state, loading: false, client: action.payload}
      case FETCH_SINGLE_CLIENT_FAILURE:
         return {...state, loading: false, error: action.payload}
      default:
         return state;
   }
}

export {CreateNewClientReducer, FetchAllClientsReducer, FetchSingleClientReducer}