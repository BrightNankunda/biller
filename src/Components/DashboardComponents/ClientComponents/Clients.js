import React, { useEffect, useState } from 'react';
import {  PencilFill, Trash } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

import { DeleteSingleClient, FetchClients } from '../../../Actions/ClientActions';
import AppNavbar from '../../AppNavbar';
import SideBar from '../../BillComponents/SideBar';
 
const Clients = (props) => {

   const dispatch = useDispatch()
   const [deletedId, setDeletedId] = useState(null)
   
   // DISPATCH GET CLIENTS ON INITIAL RENDER
   useEffect(() => {
      dispatch(FetchClients())
      console.log('FETCHING')
      return () => {
         // cleanup
      }
   }, [])

   // LOADING CLIENTS STATE GETTER FUNCTION
   const {loading, clients} = useSelector(state => state.clients)

   // FRONT END DELETE FUNCTION
   // clients.filter(client => client.id != clientId)
   // ON DELETE WE UPDATE THE DELETE BUTTON TO A LOADING BUTTON AND DISABLE THE ENTIRE CLIENT SCREEN
   
   console.log('CLIENTS',clients)

   // DELETE CLIENT STATE
   const {loading: loadingDelete, redirectDeletor} = useSelector(state => state.deletedClient)

   useEffect(() => {
      if(redirectDeletor) {
         dispatch(FetchClients())
         // removeDeletedClient(deletedId)
      }
      return () => {
         // cleanup
      }
   }, [redirectDeletor])

   // DELETE A SINGLE CLIENT FUNCTION ON CLICKING DELETE BUTTON
   const deleteClient = (clientId) => {
      setDeletedId(clientId)
      dispatch(DeleteSingleClient({clientId}))
   }

   const removeDeletedClient = (deletedId) => {
      console.log('DELETE ID', deletedId)
      // clients.filter(client => client._id != deletedId)
   }
   
   return (
      <div>
      <AppNavbar />
      <div className="d-flex">
         <div className="col-lg-3 blue">
            <SideBar />
         </div>
         <div className="w-100 bg-light col-lg-9 full-height">
            {loading && <div className="w-100">
               <div className="d-flex justify-content-center my-auto align-content-center">
                  <div class="spinner-border text-primary" role="status">
                     <span class="sr-only">Loading...</span>
                  </div>
               </div>
            </div>}
            {clients && clients.map(client => 
               <div className="m-2 rounded bg-white w-95 d-flex justify-content-between" key={client._id}>
                  <div className="col-lg-6 m-1" >
                     <Link to={"/schedule/client/" + client._id}><h4 className="text-center p-2">{client.firstName.toUpperCase() + ' ' + client.lastName.toUpperCase()}</h4></Link>
                     
                     <h4 className="text-center">{client.phoneNumber}</h4>
                     <h4 className="text-center">{client.occupation.toUpperCase()}</h4>
                  </div>
                  <div className="my-auto mr-3">
                     <Link className="update-link" to={"/schedules/clientToUpdate/" + client._id}>
                        <PencilFill />
                     </Link>
                     {/* <Link className="update-link" to={"/schedules/clientToUpdate?Update=" + client._id}>
                        <PencilFill />
                     </Link> */}
                        {!loadingDelete && <span  className="delete-btn text-danger">
                        <Trash onClick={() => deleteClient(client._id)}/>
                        </span> }

                       {loadingDelete && <button className="btn btn-danger" type="button" disabled>
                           <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                           <span className="sr-only">Loading...</span>
                        </button>}
                  </div>
               </div>
            )}
            {/* {clients.length === 0 || clients === undefined && 
            <div 
            className="alert alert-danger d-flex justify-content-center my-auto">
               <h6 className="text-center text-danger">YOU HAVE NO CLIENTS!</h6>
            </div>} */}
         </div>
      </div>
      </div>
   );
}
 
export default Clients;