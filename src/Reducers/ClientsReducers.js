import { 
   CREATE_CLIENT_FAILURE, 
   CREATE_CLIENT_FINISHED, 
   CREATE_CLIENT_REQUEST, 
   CREATE_CLIENT_SUCCESS, 
   DELETE_SINGLE_CLIENT_SUCCESS,
   DELETE_SINGLE_CLIENT_REQUEST,
   DELETE_SINGLE_CLIENT_FAILURE, 
   FETCH_CLIENTS_FAILURE, 
   FETCH_CLIENTS_REQUEST, 
   FETCH_CLIENTS_SUCCESS, 
   FETCH_SINGLE_CLIENT_FAILURE, 
   FETCH_SINGLE_CLIENT_REQUEST, 
   FETCH_SINGLE_CLIENT_SUCCESS,
   UPDATE_SINGLE_CLIENT_REQUEST,
   UPDATE_SINGLE_CLIENT_SUCCESS,
   UPDATE_SINGLE_CLIENT_FAILURE,
   UPDATE_SINGLE_CLIENT_FINISHED,
   DELETE_SINGLE_CLIENT_FINISHED
} from "../Constants/ClientConstants"

const CreateNewClientReducer = (state={loading: false, redirectCreator: false}, action) => {
   switch(action.type) {
      case CREATE_CLIENT_REQUEST:
         return { ...state, loading: true, redirectCreator: false}
      case CREATE_CLIENT_SUCCESS:
         return {...state, loading: false, client: action.payload, redirectCreator: true}
      case CREATE_CLIENT_FINISHED:
         // CHANGE THE REDUX STATE ie THE CLIENT TO EMPTY, REDIRECT CREATOR TO TRUE SUCH THAT IT IS EASY TO MAINTAIN STATE AND AVOID GLITCHES
         return {...state, loading: false, client: null, redirectCreator: false}
      case CREATE_CLIENT_FAILURE:
         return {...state, loading:  false, error: action.payload, redirectCreator: false}
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

const FetchSingleClientReducer = (state={loading: false, client: null}, action) => {
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

const UpdateClientReducer = (state={loading: false, redirectUpdator: false}, action) => {
   switch(action.type) {
      case UPDATE_SINGLE_CLIENT_REQUEST:
         return {...state, loading: true}
      case UPDATE_SINGLE_CLIENT_SUCCESS:
         return {...state, loading: false, redirectUpdator: true, message: action.payload}
      case UPDATE_SINGLE_CLIENT_FINISHED:
         return {...state, loading: false, redirectUpdator: false}
      case UPDATE_SINGLE_CLIENT_FAILURE:
         return {...state, loading: false, error: action.payload}
      default:
         return state;
   }
}
const DeleteClientReducer = (state={loading: false, deleteClient: false, redirectDeletor: false}, action) => {
   switch(action.type) {
      case DELETE_SINGLE_CLIENT_REQUEST:
         return {...state, loading: true}
      case DELETE_SINGLE_CLIENT_SUCCESS:
         return {...state, loading: false, deletedClient: true, redirectDeletor: true}
      case DELETE_SINGLE_CLIENT_FINISHED:
         return {...state, loading: false, deleteClient: false, redirectDeletor: false}
      case DELETE_SINGLE_CLIENT_FAILURE:
         return {...state, loading: false, error: action.payload}
      default:
         return state;
   }
}

export {CreateNewClientReducer, FetchAllClientsReducer, FetchSingleClientReducer, UpdateClientReducer, DeleteClientReducer}