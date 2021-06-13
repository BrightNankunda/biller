import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchClients } from '../../../Actions/ClientActions';
 
const Clients = () => {

   const dispatch = useDispatch()
   
   useEffect(() => {
      dispatch(FetchClients())
      return () => {
         // cleanup
      }
   }, [])

   const {clients} = useSelector(state => state.clients)

   return (
      <div className="bg-light">
      <div className="w-100">

         {clients && clients.map(client => 
            <div className="card col-lg-3 m-1" key={client._id}>
               <div className="card-body">
                  {client.clientName}
               </div>
               <div className="card-footer">
                  {client._id}
               </div>
            </div>
         )}
      </div>
      </div>
   );
}
 
export default Clients;