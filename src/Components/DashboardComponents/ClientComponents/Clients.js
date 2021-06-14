import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

import { FetchClients } from '../../../Actions/ClientActions';
 
const Clients = (props) => {

   const dispatch = useDispatch()
   
   useEffect(() => {
      dispatch(FetchClients())
      return () => {
         // cleanup
      }
   }, [])

   const {clients} = useSelector(state => state.clients)

   const handleClick = () => {
      props.history.replace('/schedules')
   }
   return (
      <div className="bg-light">
      <div className="w-100">

         {clients && clients.map(client => 

            <div className="card col-lg-3 m-1" key={client._id}>
               <div className="card-body">
                  {client.clientName}
               </div>
               <div className="card-footer">
                  <Link to={"/schedules/client/" + client._id} >{client._id}</Link>
                  <button onClick={handleClick} className="btn btn-primary">To Link</button>
                  
               </div>
            </div>
         )}
      </div>
      </div>
   );
}
 
export default Clients;