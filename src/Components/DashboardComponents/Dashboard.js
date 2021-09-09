import React, { useEffect } from 'react';
import { Files, ForwardFill, People, PeopleFill, PersonFill } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { AllUserBills } from '../../Actions/BillActions';
import { FetchClients } from '../../Actions/ClientActions';
import { AllUserCriminals } from '../../Actions/CriminalActions';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
import Calendar from './Calendar';
import LineGraph from './LineGraph';

const Dashboard = () => {
   const {billsCount} = useSelector(state => state.userBills)
   const {criminalsCount} = useSelector(state =>state.userCriminals)
   const {loading, clients} = useSelector(state => state.clients)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(AllUserBills())
      dispatch(AllUserCriminals())
      dispatch(FetchClients())
      return () => {
         // cleanup
      }
   }, [])

   return (
      <div>
      <AppNavbar />
      <div className="d-flex">
         <div className="col-lg-3 blue">
            <SideBar />

         </div>
         <div className="col-lg-9 w-100 bg-light">
            <div className="w-100">
               <div className="w-100 mt-1 ml-auto bg-white z-index-ten row top-bar d-flex justify-content-end align-content-center">

                  <PersonFill className="my-auto mx-2 two-times"/>
                  <h3 className="lead mx-1 my-2" >ADMIN DASHBOARD</h3>
                  <ForwardFill className="my-auto mx-2 two-times"/>
               </div>

               {loading && 
                  <div className="w-100 my-2" style={{"minHeight": "100px"}}>
                     <div className="d-flex justify-content-center my-auto align-content-center">
                        <div className="spinner-border text-primary" role="status">
                           <span className="sr-only">Loading...</span>
                        </div>
                     </div>
                  </div>
               }
               {!loading && clients && <div className="d-flex w-100">
                  <div className="clients-count col-lg-4 m-2 bg-white d-flex flex-col">
                     <PeopleFill className="my-2 two-times"/>
                     <h4>{clients.length} CLIENTS</h4>
                  </div>
                  <div className="projects col-lg-4 m-2 bg-white d-flex flex-col">
                     <Files className="my-2 two-times"/>
                     <h4>{billsCount + criminalsCount} PROJECTS</h4>
                  </div>
                  <div className="advocates col-lg-4 m-2 bg-white d-flex flex-col">
                     <People className="my-2 two-times"/>
                     <h4>42 ADVOCATES</h4>
                  </div>
               </div>}
            </div>
            <div className="d-flex m-1 forty-height">
               <div className="col-lg-7 bg-white m-2">
                  <LineGraph />
               </div>
               <div className="col-lg-5 bg-white m-2 forty-height">
                  <h3>CALENDAR</h3>
               </div>
            </div>
         </div>
      </div>
      </div>
   );
}
 
export default Dashboard;