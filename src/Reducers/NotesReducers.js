import { NodePlusFill } from 'react-bootstrap-icons'
import { 
   FETCH_ALL_USER_NOTES_FAILURE, FETCH_ALL_USER_NOTES_REQUEST, FETCH_ALL_USER_NOTES_SUCCESS, 
   FETCH_A_NOTE_FAILURE, 
   FETCH_A_NOTE_REQUEST, 
   FETCH_A_NOTE_SUCCESS, 
   SAVE_NOTE_FAILURE, SAVE_NOTE_FINISHED, SAVE_NOTE_REQUEST, SAVE_NOTE_SUCCESS, 
   USER_NOTES_EMPTY } from '../Constants/NotesConstants'

function SaveNewNoteReducer(state={loading: false, newNote: null, redirectNoteCreator: false}, action) {
   switch(action.type) {
      case SAVE_NOTE_REQUEST: 
         return {loading: true}
      case SAVE_NOTE_SUCCESS:
         return {
            loading: false, 
            newNote: action.payload, 
            redirectNoteCreator: true
         }
      case SAVE_NOTE_FINISHED:
         return {
            loading: false, 
            newNote: null, 
            redirectNoteCreator: false
         }
      case SAVE_NOTE_FAILURE:
         return {loading: false, error: action.payload}
      default:
         return state
   }
}

function FetchAllUserNotesReducer(state={notes: [], loading: false, notesCount: 0}, action) {
   switch(action.type) {
      case FETCH_ALL_USER_NOTES_REQUEST:
         return {...state, loading: true}
      case FETCH_ALL_USER_NOTES_SUCCESS:
         return {...state, loading: false, notes: action.payload, notesCount: action.payload.length}
      case USER_NOTES_EMPTY:
         return {...state, loading: false, notes: [], notesCount: 0}  
      case FETCH_ALL_USER_NOTES_FAILURE:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function DeleteANoteReducer(state={redirectNoteDeletor: false, loading: false, }, action) {
   switch(action.type) {
//       case DELETE_A_NOTE_REQUEST:
//          return {...state, loading: true}
//       case DELETE_A_NOTE_SUCCESS:
//          return {...state, loading: false, redirectNoteDeletor: true}
//       case DELETE_A_NOTE_FINISHED:
//          return {...state, loading: false, redirectNoteDeletor: false}  
//       case DELETE_A_NOTE_FAILURE:
//          return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function FetchANoteReducer(state={singleNote: null, loading: false, error: null}, action) {
   switch(action.type) {
      case FETCH_A_NOTE_REQUEST:
         return {...state, loading: true}
      case FETCH_A_NOTE_SUCCESS:
         return {...state, loading: false, singleNote: action.payload} 
      case FETCH_A_NOTE_FAILURE:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

export {
   SaveNewNoteReducer,  
   FetchAllUserNotesReducer, 
   DeleteANoteReducer,
   FetchANoteReducer
}