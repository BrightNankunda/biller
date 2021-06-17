import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { FetchSingleClient } from '../../../Actions/ClientActions'
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
      
         {!loading && client && <div className="w-100">
         
            <div className="">
               <h4 className="text-center">{client.firstName + ' ' + client.lastName}</h4>
               <h4 className="text-center">{client.email}</h4>
               <h4 className="text-center">{client.phoneNumber}</h4>
               <h4 className="text-center">{client.occupation}</h4>
            </div>
            <div className="actions d-flex justify-content-between">
               <button className="bill-btn">DELETE</button>
               <button className="bill-btn">UPDATE</button>
            </div>
            </div>}
         </div>
      </div>
   )
}

export default SingleClient