import axios from 'axios'

import { 
   FETCH_ALL_USER_NOTES_FAILURE, FETCH_ALL_USER_NOTES_REQUEST, 
   FETCH_ALL_USER_NOTES_SUCCESS, SAVE_NOTE_FAILURE, SAVE_NOTE_FINISHED, 
   SAVE_NOTE_REQUEST, SAVE_NOTE_SUCCESS 
} from '../Constants/NotesConstants'

const SaveNewNote = ({noteHeader, noteBody}) => async (dispatch, getState) => {
   try {
      dispatch({type: SAVE_NOTE_REQUEST, payload: noteHeader, noteBody})
      const {user} = getState()
      const {data} = await axios.post(process.env.REACT_APP_API_URL + "/api/notes", 
      {noteHeader, noteBody}, {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log(data);
      dispatch({type: SAVE_NOTE_SUCCESS, payload: data})
      dispatch({type: SAVE_NOTE_FINISHED})
   } catch (error) {
      console.log(error.message)
      dispatch({type: SAVE_NOTE_FAILURE, payload: error.message})
   }
}

const FetchAllUserNotes = () => async (dispatch, getState) => {

   try {
      dispatch({type: FETCH_ALL_USER_NOTES_REQUEST})
      const {user} = getState()
      const {data} = await axios.get(process.env.REACT_APP_API_URL + "/api/notes/user", {
         headers: {'Authorization': 'Bearer ' + user.token}
      })
      console.log(data)
      dispatch({type: FETCH_ALL_USER_NOTES_SUCCESS, payload: data})
   } catch(error) {
      console.log(error.message)
      dispatch({type: FETCH_ALL_USER_NOTES_FAILURE, payload: error.message})
   }
}

export {
   SaveNewNote,
   FetchAllUserNotes
}