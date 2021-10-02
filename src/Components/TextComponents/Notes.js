import React, {useEffect, useState} from 'react';
import FriendsSidebar from '../UI-Components/FriendsSidebar'
import Navbars from '../UI-Components/Navbars';
import NewArticle from '../UI-Components/NewArticle';
import SideBars from '../UI-Components/SideBars';
import { Modal, Button } from 'react-bootstrap';
import { PlusSquareDotted } from 'react-bootstrap-icons';
import { FetchAllUserNotes, SaveNewNote } from '../../Actions/NotesActions';
import { useDispatch, useSelector } from 'react-redux';
 
const Notes = () => {
   // REDUX SPECIFIC
   const dispatch = useDispatch()
   const {notes, loading: loadingNotes}  = useSelector(state => state.allUserNotes)
   console.log(notes, loadingNotes)

   const {loading, redirectNoteCreator} = useSelector(state => state.newNote)
   console.log(newNote, redirectNoteCreator)

   // NOTE SAVING STATE
   const [loading, setLoding] = useState(false)
   const [noteHeader, setNoteHeader] = useState('')
   const [noteBody, setNoteBody] = useState('')

   // CREATED BY

   // SUBMIT TO REDUX
   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(SaveNewNote({noteHeader, noteBody}))
      console.log(noteBody, noteHeader)
   }

   // MODAL STATE
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   useEffect(() => {
      dispatch(FetchAllUserNotes())
      return () => {
         // cleanup
      }
   }, [])

   return (
      <div className="fluid-container">
         <Navbars />
         <div className="d-flex mt-3 d-flex justify-content-center">
            <div className="mx-2 px-2 mt-2" style={{minWidth: 250 + 'px', maxWidth: 270 + 'px'}}>
               <SideBars />
            </div>
            <div>
               <div className="px-2 rounded-lg " style={{minWidth: 580 + 'px', maxWidth: 620 + 'px'}}>
                  <div className="w-100">
                     <div className="d-flex justify-content-center align-content-center py-2 border rounded m-2">
                        <button className="btn btn-primary px-3" onClick={handleShow}>
                           <PlusSquareDotted className="text-white two-times my-auto mx-2" /> Add a note
                        </button>

                        <Modal show={show} onHide={handleClose}>
                           <Modal.Header closeButton>
                              <Modal.Title>Add note data</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                              {!loading && <form onSubmit={handleSubmit} className="border rounded-sm p-3">
                                    {/* FORM INPUTS */}
                                       <div className="form-group">
                                          <label htmlFor="noteHeder">Note Header</label>
                                          <input type="noteHeder" 
                                          value={noteHeader} onChange={e => setNoteHeader(e.target.value)}
                                          className="form-control form-control-sm" id="noteHeder" 
                                          placeholder="Enter note header"/>
                                       </div>
                                       <div className="form-group">
                                          <label htmlFor="noteBody">Note Body</label>
                                          <textarea className="form-control form-control-sm" 
                                          value={noteBody} onChange={e => setNoteBody(e.target.value)}
                                          id="noteBody" placeholder="Enter note body"/>
                                       </div>
                                    
                                       <div className="d-flex justify-content-center mb-2">
                                          <button className="btn btn-success px-4" >Save note</button>
                                       </div>
                                 
                              </form>}

                              {loading && <div className="w-100" style={{"height": '150px'}}>

                              </div>}
                           </Modal.Body>
                           <Modal.Footer>
                              <Button variant="warning" onClick={handleClose}>
                                 Close
                              </Button>
                           </Modal.Footer>
                        </Modal>
                     </div>
                     {/* FOR EACH RETURN THE NOTECOMPNENT, THAT HAS DELETE, UPDATE OPTIONS */}
                     <NewArticle />
                     <NewArticle />
                     <NewArticle />
                     <NewArticle />
                     <NewArticle />
                     <NewArticle />
                     <NewArticle />
                  </div>
               </div>
            </div>
            <div className="mx-2 px-2 mt-2 position relative" style={{minWidth: 250 + 'px', maxWidth: 270 + 'px'}}>
               <div className="w-100">
                  <FriendsSidebar />
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default Notes;