import React, {useState, useEffect}from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { FetchANote } from '../../Actions/NotesActions';
import PropTypes from 'prop-types';
 
const SingleNote = (props) => {

   const dispatch = useDispatch()
   const {error, singleNote, loading} = useSelector(state => state.singleNote)
   console.log('ERROR', error, 'SINGLENOTE', singleNote, 'LOADING',loading)

   // FETCH A NOTE
   useEffect(() => {
      dispatch(FetchANote(props.noteId))
      return () => {
         // cleanup
      }
   }, [props.noteId])

     
   // const {loading, singleNote} = useSelector(state => state.singleNote)

   // console.log(loading, singleNote)

   
   return (
   <div>
         {!loading && singleNote && <div className="fluid-container">
            <h1>{singleNote.noteHeader}</h1>
            <p>{singleNote.noteBody}</p>
         </div>
         }
      </div>
   );
}
SingleNote.propTypes = {
   noteId: {
      type: String
   }
};
 
export default SingleNote;

 