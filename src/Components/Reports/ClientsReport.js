import React, { useEffect, useState } from 'react';
import {  PencilFill, PlusLg, Trash } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router'
import { DeleteSingleClient, FetchClients } from '../../Actions/ClientActions';

import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
 
const ClientsReport = (props) => {

   const dispatch = useDispatch()
   const [deletedId, setDeletedId] = useState(null)
   const [clientSearch, setClientSearch] = useState('')
   
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
   const history = useHistory()

   const createClientLink = () => {
      history.push('/reports/addClient')
   }
   const clientLostFocus = () => {
      console.log('LOST FOCUS')
   }
   const focusedClientSearch = () => {
      console.log('GAINED FOCUS')
   }

   return (
      <div>
         <AppNavbar />
         <div className="d-flex">
            <div className="blue col-lg-3">
               <SideBar />
            </div>
            <div className="col-lg-9">
               <div className="m-3">
                  <div className="client-report-header mb-2">
                     <h5>Reports/Clients</h5>
                  </div>
                  <div className="d-flex justify-content-between ">
                     <input 
                     value={clientSearch}
                     onBlur={() => clientLostFocus()}
                     onFocus={() => focusedClientSearch()}
                     onChange={(e) => setClientSearch(e.target.value)}
                     className="search-client-input my-3 light-color py-2 px-1 col-lg-5" 
                     placeholder="SEARCH A CLIENT "
                     type="text"/>

                     <button 
                        onClick={() => createClientLink()}
                        className="col-lg-3 py-1 create-client bg-light d-flex my-3 justify-content-center align-content-center align-items-center">
                        <PlusLg className="my-auto nav-icon mx-2"/>CREATE NEW CLIENT
                     </button>
                  </div>
                  {loading && 
                     <div className="w-100">
                        <div className="d-flex justify-content-center my-auto align-content-center">
                           <div className="spinner-border text-primary" role="status">
                              <span className="sr-only">Loading...</span>
                           </div>
                        </div>
                     </div>
                  }

                  {!loading && <div className="light-color clients-table my-1 pb-3 pt-3 px-4">
                     <table className="w-100 ">
                        <thead>
                           <tr>
                              <th>#</th>
                              <th>FIRST NAME</th>
                              <th>LAST NAME</th>
                              <th></th>
                              <th></th>
                              <th></th>
                           </tr>
                        </thead>
                        <tbody>
                        { clients && clients.map(client => (

                           <tr className="border-bottom border-dark" key={client._id}>
                              <td>1</td>
                              <td><Link to={"/reports/client/" + client._id}>{client.firstName}</Link></td>
                              <td>{client.lastName}</td>
                              <td>
                                 <Link to={"/schedule/createBill/" + client._id} title="ADD A SCHEDULE"  className="add-schedule-icon px-2">
                                    <PlusLg className="two-times" 
                                  /></Link>
                                 
                              </td>
                              <td>
                                 <Link className="update-link-client" to={"/reports/clientToUpdate/" + client._id}>
                                    <PencilFill />
                                 </Link>
                              </td>
                              <td className="mb-2">{!loadingDelete && <span  className="delete-btn-client text-danger">
                              <Trash onClick={() => deleteClient(client._id)}/>
                              </span> }

                              {loadingDelete && <button className="btn btn-danger" type="button" disabled>
                                 <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                 <span className="sr-only">Loading...</span>
                              </button>}
                        </td>
                           </tr>
            
                        ))}
                        </tbody>

                     </table>
                  </div>}
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default ClientsReport;