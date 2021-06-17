import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

import { FetchClients } from '../../../Actions/ClientActions';
 
const Clients = () => {

   const dispatch = useDispatch()
   
   useEffect(() => {
      dispatch(FetchClients())
      return () => {
         // cleanup
      }
   }, [])

   const {loading, clients} = useSelector(state => state.clients)
   console.log(clients)

   return (
      <div className="bg-light">
         <div className="w-100">

            {clients && clients.map(client => 

               <div className="col-lg-3 m-1" key={client._id}>
                  <div className="">
                     {client.firstName + ' ' + client.lastName}
                  </div>
                  <div className="">
                     <Link to={"/schedules/client/" + client._id} >{client._id}</Link>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}
 
export default Clients;