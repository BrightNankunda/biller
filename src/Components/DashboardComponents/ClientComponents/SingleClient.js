import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteSingleClient, FetchSingleClient } from '../../../Actions/ClientActions'
import SideBar from '../../BillComponents/SideBar'

const SingleClient = (props) => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(FetchSingleClient(props.match.params.clientId))
      return () => {
         // cleanup
      }
   }, [])

   const {loading, client} = useSelector(state => state.singleClient)
   console.log('LOADING', loading, 'CLIENT', client)



   const deleteClient = (clientId) => {
      dispatch(DeleteSingleClient({clientId}))
   }

   const isClientEmpty = client === null ? true : false
   

   return (
      <div className="d-flex">
         <div className="col-lg-3 blue">
            <SideBar />
         </div>
      
         <div className="col-lg-9 d-flex justify-content-center flex-col full-height bg-light">
            {loading && <div className="w-100 full-height d-flex justify-content-center">

               <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
               </div>
            </div>}
            <div className="w-60 d-flex justify-content-center">
               {!loading && client && <div className=" w-100">
               
                  <div className="bg light list-group">
                     <h4 className="text-center list-group-item">{client.firstName + ' ' + client.lastName}</h4>
                     <h4 className="text-center list-group-item">{client.email}</h4>
                     <h4 className="text-center list-group-item">{client.phoneNumber}</h4>
                     <h4 className="text-center list-group-item">{client.occupation}</h4>
                     <h4 className="text-center list-group-item">{client.address.toUpperCase()}</h4>
                  </div>
                  <div className="actions w-60 d-flex justify-content-between">
                     <Link className="bill-btn text-success py-2 px-4" to={"/schedules/clientToUpdate/" + client._id}>UPDATE</Link>
                     {/* <Link className="bill-btn update-btn" to={"/schedules/clientToUpdate?Update=" + client._id}>UPDATE</Link> */}
                     <button className="bill-btn delete-btn text-danger" onClick={() => deleteClient(client._id)}>DELETE</button>
                  </div>
                  </div>}
               {!loading && isClientEmpty && <div className="alert alert-danger align-items-center w-100 full-height d-flex justify-content-center">

                  <h4 className="text-danger text-center">CLIENT NOT FOUND</h4>
               </div>}
            </div>
         </div>
      </div>
   )
}

export default SingleClient