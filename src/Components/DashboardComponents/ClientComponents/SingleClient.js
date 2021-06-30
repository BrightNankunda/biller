import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteSingleClient, FetchSingleClient } from '../../../Actions/ClientActions'
import AppNavbar from '../../AppNavbar'
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

   const {loading: loadingDelete, redirectDeletor} = useSelector(state => state.deletedClient)

   useEffect(() => {
      if(redirectDeletor) {
         props.history.replace('/reports/clients')
      }
      return () => {
         // cleanup
      }
   }, [redirectDeletor])

   const deleteClient = (clientId) => {
      dispatch(DeleteSingleClient({clientId}))
   }

   const isClientEmpty = client === null ? true : false
   

   return (
      <div>
         <AppNavbar />
      
      <div className="d-flex">
         <div className="col-lg-3 blue">
            <SideBar />
         </div>
      
         <div className="col-lg-9 d-flex full-height bg-light">
            {loading && <div 
            className="col-lg-12 d-flex justify-content-center align-content-center align-items-center">
                  <div className="spinner-border text-primary " role="status">
                     <span className="sr-only">Loading...</span>
                  </div>
            </div>}
            <div className="col-lg-12 d-flex mx-auto mt-3">
               {!loading && client && <div className=" w-100">
               
                  <div className="light-color p-3">
                     <h4 className="text-center"> NAMES: {client.firstName + ' ' + client.lastName}</h4>
                  
                     <h4 className="text-center">EMAIL: {client.email}</h4>
                     <h4 className="text-center">PHONE NUMBER: {client.phoneNumber}</h4>
                     <h4 className="text-center">OCCUPATION: {client.occupation}</h4>
                     <h4 className="text-center">ADDRESS: {client.address.toUpperCase()}</h4>
                  </div>
                  <div className="actions w-60 d-flex justify-content-between">
                     <Link className="bill-btn text-success py-2 px-4" to={"/reports/clientToUpdate/" + client._id}>UPDATE</Link>
                     {/* <Link className="bill-btn update-btn" to={"/reports/clientToUpdate?Update=" + client._id}>UPDATE</Link> */}
                     {!loadingDelete && <span >
                        <button className="bill-btn delete-btn text-danger" onClick={() => deleteClient(client._id)}>DELETE</button>
                        </span> }

                       {loadingDelete && <button className="btn btn-danger" type="button" disabled>
                           <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                           <span className="sr-only">Loading...</span>
                        </button>}
                  </div>
                  </div>}
               {!loading && isClientEmpty && <div className="alert alert-danger align-items-center w-100 full-height d-flex justify-content-center">

                  <h4 className="text-danger text-center">CLIENT NOT FOUND</h4>
               </div>}
            </div>
         </div>
         </div>
         </div>
   )
}

export default SingleClient