import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { CardChecklist, List, ListCheck, PencilFill, PencilSquare, PlusSquare } from 'react-bootstrap-icons';
import Navbars from './Navbars';
import SidebarAdvocate from './SidebarAdvocate';
 
const AdvocateDashboard = () => {
   const series = [
      {name: 'Legal Tips', data: [1,2,0]},
      {name: 'Tasks', data: [2,1,1]},
      {name: 'Projects', data: [0,1,0]}
   ]
   const options = {
      chart: {height: 250, type: 'area'}, dataLabels: {enabled: true}
   }
   return (
      <div className="fluid-container position-relative">
         <Navbars />
         <div className="d-flex mt-1">
            <div className="bg-light col-lg-3">
               <div className="position-fixed col-lg-3 pt-3 ">
                  <div className="px-3 w-100">
                     <SidebarAdvocate />
                  </div>
               </div>
            </div>
            <div className="col-lg-9">
               <div className="p-2 rounded-lg shadow-sm" 
               // style={{minWidth: 1070 + 'px', maxWidth: 1100 + 'px'}}
               >
                  <div className="w-100">
                     {/* <h1 className="l-font text-center text-primary underline">ADVOCATE DASHBOARD</h1> */}
                     <div className="mb-5 mt-2 rounded-lg my-2 blue">
                        <div className="w-100 d-flex justify-content-center position-relative"
                           style={{minHeight: '150px'}}
                        >
                           <div className="w-100">
                              <div className="d-flex flex-col justify-content-center align-items-center">
                                 <p className="xl-font font-weight-450 text-white">KK Advocates</p>
                                 <p className="xl-font font-weight-450 text-secondary">Managing Partner</p>
                                 <p className="xl-font font-weight-450 text-white">Nankunda BRIGHT</p>
                              </div>
                           </div>
                           <img src="/logo192.png" alt="user profile"
                              className="rounded-circle bg-white border new-user-profile"
                              style={{height: 100 + 'px', width: 100 + 'px'}}/>
                           <div className="d-flex user-community-section">
                              <p className="opacity-9 mr-2">10 Followers</p>
                              <p className="opacity-9 mr-2">11 Following</p>
                              <p className="opacity-9">21 Friends</p>
                           </div>
                        </div>
                     </div>
                     <div className="d-flex">
                        <div className="col-lg-4 p-2">
                           <div className="bg-dashboard-bars bg-light w-100 h-100 d-flex justify-content-center py-3 align-items-center flex-col">
                              <div className="d-flex justify-content-around align-items-center w-100">
                                 <div className="d-flex justify-content-center align-items-center">
                                    <CardChecklist className="two-times text-primary mx-2"/>
                                    <p className="text-primary my-auto">5 PROJECTS</p>
                                 </div>
                                 <p 
                                    className="my-auto font-weight-650 text-white d-block cursor-pointer" 
                                    title="ADD A PROJECT">
                                    <PlusSquare className="two-times text-primary" />
                                 </p>
                              </div>
                              <div className="d-flex justify-content-center align-items-center">
                                 <div className="d-flex flex-col mr-3 justify-content-center align-items-center">
                                    <p className="my-0 text-primary font-weight-bold xl-font">2</p>
                                    <p className="my-0 text-primary opacity-9 md-font">PERSONAL</p>
                                 </div>
                                 <div className="d-flex flex-col justify-content-center align-items-center">
                                    <p className="my-0 text-primary font-weight-bold xl-font">1</p>
                                    <p className="my-0 text-primary opacity-9 md-font">ASSIGNED</p>
                                 </div>
                              </div>
                              
                           </div>                    
                        </div>
                        <div className="col-lg-4 p-2">
                           <div className="bg-dashboard-bars bg-light w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                              <div className="d-flex justify-content-around align-items-center w-100">
                                 <div className="d-flex justify-content-center align-items-center">
                                    <List className="two-times text-primary mx-2"/>
                                    <p className="text-primary my-auto">TASKS</p>
                                 </div>
                                 <p 
                                    className="my-auto font-weight-650 text-white d-block cursor-pointer" 
                                    title="ADD A TASK">
                                    <PlusSquare className="two-times text-primary" />
                                 </p>
                              </div>
                              <div className="d-flex justify-content-center align-items-center">
                                 <p className="text-primary my-auto xl-font font-weight-bold">5</p>
                              </div>
                           </div>                    
                        </div>
                        <div className="col-lg-4 p-2">
                           <div className="bg-dashboard-bars bg-light w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                              <div className="d-flex justify-content-around align-items-center w-100">
                                 <div className="d-flex justify-content-center align-items-center">
                                    <PencilSquare className="two-times text-primary mx-2"/>
                                    <p className="text-primary my-auto">ARTICLES</p>
                                 </div>
                                 <p 
                                    className="my-auto font-weight-650 text-white d-block cursor-pointer" 
                                    title="ADD AN ARTICLE">
                                    <PlusSquare className="two-times text-primary" />
                                 </p>
                              </div>
                              <div className="d-flex justify-content-center align-items-center">
                                 <p className="text-primary my-auto xl-font font-weight-bold">17</p>
                              </div>
                           </div>                    
                        </div>
                     </div>
                  </div>
                  <div className="w-100">
                     <div className="d-flex">
                        <div className="col-lg-4 p-2">
                           <div className="border rounded border-primary bg-info w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                              <PencilSquare className="three-times text-white mt-2"/>
                              <p className="l-font d-block my-0 text-white">4</p>
                              <p className="xl-font d-block text-white">LEGAL TIPS</p>
                              <p className="three-times font-weight-650 text-white d-block cursor-pointer" title="ADD AN ARTICLE">+</p>
                           </div>                    
                        </div>
                        <div className="col-lg-4 p-2">
                           <div className="border rounded border-primary bg-info w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                              <ListCheck className="three-times text-white mt-2"/>
                              <p className="l-font d-block my-0 text-white">3</p>
                              <p className="xl-font d-block text-white">DRAFTS</p>
                              <p className="three-times font-weight-650 text-white d-block cursor-pointer" title="ADD A TASK">+</p>
                           </div>                    
                        </div>
                        <div className="col-lg-4 p-2">
                           <div className="border rounded border-primary bg-info w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                              <PencilFill className="three-times text-white mt-2"/>
                              <p className="l-font d-block my-0 text-white">7</p>
                              <p className="xl-font d-block text-white">NOTES</p>
                              <p className="three-times font-weight-650 text-white d-block cursor-pointer" title="ADD A PROJECT">+</p>
                           </div>                    
                        </div>
                     </div>
                  </div>
                  
               </div>
               <div className="graph-section-wrapper shadow-sm rounded-lg my-4">
                  <h2 className="text-center text-primary">STATISTICS</h2>
                  <div className="graph">
                     <ReactApexChart series={series} options={options} type="area"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default AdvocateDashboard;