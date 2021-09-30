import React, { useEffect } from 'react';
import { Files, ForwardFill, People, PeopleFill, PersonFill } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { AllUserBills } from '../../Actions/BillActions';
import { FetchClients } from '../../Actions/ClientActions';
import { AllUserCriminals } from '../../Actions/CriminalActions';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
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
               <div className="w-100 mt-1 ml-2 bg-white z-index-ten row top-bar d-flex align-content-center">
                  <h3 className="text-bold mx-1 my-2 text-primary" >Tony Advocates</h3>
                  
                  <div className="d-flex ml-auto">
                     {/* <PersonFill className="my-auto mx-2 two-times"/> */}
                     <h3 className="lead mx-1 my-auto text-primary" >ADMIN DASHBOARD</h3>
                     {/* <ForwardFill className="my-auto mx-2 two-times"/> */}

                  </div>
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
                  <div className="clients-count col-lg-4 m-2 bg-white d-flex flex-col cursor-pointer">
                     <PeopleFill className="my-2 two-times"/>
                     <h4 >{clients.length} CLIENTS</h4>
                     <div className="border-top">
                        <p className="text-primary">Company Clients</p>
                     </div>
                  </div>
                  <div className="projects col-lg-4 m-2 bg-white d-flex flex-col cursor-pointer">
                     <Files className="my-2 two-times"/>
                     <h4>{billsCount + criminalsCount} PROJECTS</h4>
                     <div className="border-top">
                        <p className="text-primary">Company Projects</p>
                     </div>
                  </div>
                  <div className="advocates col-lg-4 m-2 bg-white d-flex flex-col cursor-pointer">
                     <People className="my-2 two-times"/>
                     <h4>42 ADVOCATES</h4>
                     <div className="border-top">
                        <p className="text-primary">Company Advocates</p>
                     </div>
                  </div>
               </div>}
            </div>
            <div className="d-flex my-1 forty-height">
               <div className="col-lg-7 bg-white m-2">
                  <LineGraph />
               </div>
               <div className="col-lg-5 bg-white m-2 forty-height">
                  <h3>CALENDAR</h3>
                  <FullCalendar
                     plugins={[ dayGridPlugin ]}
                     initialView="dayGridMonth"
                     events={[
                        { title: 'event 1', date: '2021-09-30' },
                        { title: 'event 2', date: '2019-09-10' }
                     ]}
                     />
               </div>
            </div>
         </div>
      </div>
      </div>
   );
}
 
export default Dashboard;