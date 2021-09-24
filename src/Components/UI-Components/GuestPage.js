import React from 'react';
import { ArrowLeftRight, ArrowsCollapse, ArrowsFullscreen, CloudArrowUp, GraphUp, Table } from 'react-bootstrap-icons';
 
const GuestPage = () => {
   return (
      <div>
         <div className="banner" style={{minHeight: 94 + 'vh'}}>
            <div className="d-flex banner-content">
               <div className="col-lg-6">
                  <h1 className="text-center text-primary mt-5 mb-5">Welcome to the Biggest Legal Community</h1>
                  <h4 className="text-center my-4">Interact with the best legal minds all over the world</h4>
                  <div className="w-100 d-flex justify-content-center align-items-center my-4">
                     <p className="xl-font">Share your expertize, manage notes and tasks, seek expertize, manage your company performance with our free analytical tools, bill your clients uniformly.</p>
                  </div>

                  <div className="d-flex justify-content-center my-5">
                     <button className="btn btn-primary mx-4">Get Started</button>
                  </div>

               </div>
               <div className="col-lg-6 banner-image-wrapper" style={{height: 94 + 'vh'}}>
                  <img src="/logo512.png" className="w-100 h-100 shadow-lg rounded-lg" alt="what we do"/>
               </div>
            </div>
         </div>
         {/* QOUTE */}
         <div className="container bg-light shadow-sm my-3 p-5 rounded-lg">
            <h5>"I am a goal oriented Full stack developer working for Suitors Inc with JS, Python, PHP, Laravel, React, jQuery, Vue, Express, Django, Flask, CSS"</h5>
            <h4 className="text-primary"><em>- Nankunda Bright</em></h4>
         </div>
         {/* WHY JOIN SUITORS */}
         <div className="mt-4 row b-1 shadow-sm p-4 d-flex">
            <div className="col-lg-4 my-5">
               <div className="w-100 h-100 p-3 border rounded border-primary">
                  <div className="w-100 d-flex justify-content-center flex-col align-items-center">
                     <ArrowsFullscreen className="two-times mb-2 text-primary mx-auto" />
                     <p className="l-font">Connect</p>
                     <p className="xl-font font-weight-450 text-primary">Connect with the best Legal experts</p>
                     
                  </div>
               </div>
            </div>
            <div className="col-lg-4 my-5">
               <div className="w-100 h-100 p-3 border rounded border-primary">
                  <div className="w-100 d-flex justify-content-center flex-col align-items-center">
                     <ArrowsCollapse className="two-times mb-2 text-primary mx-auto" />
                     <p className="l-font">Find Counsel</p>
                     <p className="xl-font font-weight-450 text-primary">Seek counsel from legal experts</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 my-5">
               <div className="w-100 h-100 p-3 border rounded border-primary">
                  <div className="w-100 d-flex justify-content-center flex-col align-items-center">
                     <ArrowLeftRight className="two-times mb-2 text-primary mx-auto" />
                     <p className="l-font">Share Advice</p>
                     <p className="xl-font font-weight-450 text-primary">Share Legal expertise with the ones in need</p>   
                  </div>
               </div>
            </div>
         </div>
         <div className="mt-3 row b-1 shadow-sm p-2 d-flex">
            <div className="col-lg-4 my-5">
               <div className="w-100 h-100 p-3 border rounded border-primary">
                  <div className="w-100 d-flex justify-content-center flex-col align-items-center">
                     <CloudArrowUp className="two-times mb-2 text-primary mx-auto" />
                     <p className="l-font">Inform the public about your Sevices</p>
                     <p className="xl-font font-weight-450 text-primary">List your firm and display your services</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 my-5">
               <div className="w-100  p-3 border rounded border-primary">
                  <div className="w-100 d-flex justify-content-center flex-col align-items-center">
                     <Table className="two-times mb-2 text-primary mx-auto" />
                     <p className="l-font">Unify your Billing scale</p>
                     <p className="xl-font font-weight-450 text-primary">Stream line your firm's legal billing requirements</p>
                  </div>
               </div>
            </div>
            {/* <div className="col-lg-4 p-2">
                        <div className="border rounded border-primary w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                           <CardChecklist className="three-times text-primary mt-2"/>
                           <p className="l-font d-block my-0">5</p>
                           <p className="xl-font d-block text-primary">PROJECTS</p>
                           <p className="my-0">PERSONAL: 3</p>
                           <p className="my-0">ASSIGNED: 2</p>
                           <p className="three-times font-weight-650 text-primary d-block cursor-pointer" title="ADD A PROJECT">+</p>
                        </div>                    
                     </div> */}
            <div className="col-lg-4 my-5">
               <div className="w-100 h-100 p-3 border rounded border-primary">
                  <div className="w-100 d-flex justify-content-center flex-col align-items-center">
                     <GraphUp className="two-times mb-2 text-primary mx-auto" />
                     <p className="l-font">Firm Performance</p>
                     <p className="xl-font font-weight-450 text-primary">Track your firm's advocates performance</p>   
                  </div>
               </div>
            </div>
         </div>
         <div>
            
            <div className="">
               <p></p>
            </div>
            <div className="">
               
            </div>
         </div>
         {/* FOOTER */}
         <div className="d-flex justify-content-center w-100">
           <h6 className="text-center"><span className="mx-1">&copy;</span>Suitors Inc 2021</h6>
         </div>
      </div>
   );
}
 
export default GuestPage;