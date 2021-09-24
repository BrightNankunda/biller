import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { CardChecklist, List, ListCheck, PencilFill, PencilSquare } from 'react-bootstrap-icons';
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
      <div className="fluid-container">
         <Navbars />
         <div className="d-flex mt-2">
            <div className="mx-3" style={{minWidth: 230 + 'px', maxWidth: 260 + 'px'}}>
               <SidebarAdvocate />
            </div>
            <div>
               <div className="p-2 rounded-lg shadow-sm " style={{minWidth: 1070 + 'px', maxWidth: 1100 + 'px'}}>
                  <div className="w-100">
                     <h1 className="l-font text-center text-primary underline">ADVOCATE DASHBOARD</h1>
                     <div className="d-flex">
                        <div className="col-lg-4 p-2">
                           <div className="border bg-info rounded border-primary w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                              <CardChecklist className="three-times text-white mt-2"/>
                              <p className="l-font d-block my-0 text-white">5</p>
                              <p className="xl-font d-block text-white">PROJECTS</p>
                              <p className="my-0 text-white">PERSONAL: 3</p>
                              <p className="my-0 text-white">ASSIGNED: 2</p>
                              <p className="three-times font-weight-650 text-white d-block cursor-pointer" title="ADD A PROJECT">+</p>
                           </div>                    
                        </div>
                        <div className="col-lg-4 p-2">
                           <div className="border rounded border-primary bg-info w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                              <PencilSquare className="three-times text-white mt-2"/>
                              <p className="l-font d-block my-0 text-white">5</p>
                              <p className="xl-font d-block text-white">ARTICLES</p>
                              <p className="three-times font-weight-650 text-white d-block cursor-pointer" title="ADD AN ARTICLE">+</p>
                           </div>                    
                        </div>
                        <div className="col-lg-4 p-2">
                           <div className="border rounded border-primary bg-info w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                              <List className="three-times text-white mt-2"/>
                              <p className="l-font d-block my-0 text-white">3</p>
                              <p className="xl-font d-block text-white">PENDING TASKS</p>
                              <p className="three-times font-weight-650 text-white d-block cursor-pointer" title="ADD A TASK">+</p>
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