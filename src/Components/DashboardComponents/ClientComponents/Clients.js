import React, { useEffect } from 'react';
import { BookFill, PencilFill, Trash } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

import { DeleteSingleClient, FetchClients } from '../../../Actions/ClientActions';
import SideBar from '../../BillComponents/SideBar';
 
const Clients = () => {

   const dispatch = useDispatch()
   
   // DISPATCH GET CLIENTS ON INITIAL RENDER
   useEffect(() => {
      dispatch(FetchClients())
      return () => {
         // cleanup
      }
   }, [])

   // LOADING CLIENTS STATE GETTER FUNCTION
   const {loading, clients} = useSelector(state => state.clients)

   // FRONT END DELETE FUNCTION
   // clients.filter(client => client.id != clientId)
   // ON DELETE WE UPDATE THE DELETE BUTTON TO A LOADING BUTTON AND DISABLE THE ENTIRE CLIENT SCREEN
   
   console.log(clients)

   // DELETE A SINGLE CLIENT FUNCTION ON CLICKING DELETE BUTTON
   const deleteClient = (clientId) => {
      dispatch(DeleteSingleClient({clientId}))
   }
   
   return (
      <div className="d-flex">
         <div className="col-lg-3 blue">
            <SideBar />
         </div>
         <div className="w-100 bg-light col-lg-9">

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
                     <span  className="delete-btn text-danger">
                       <Trash onClick={() => deleteClient(client._id)}/>
                     </span>   
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}
 
export default Clients;