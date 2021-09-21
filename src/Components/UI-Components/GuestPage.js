import React from 'react';
import { Bookshelf, CloudArrowUp, CurrencyDollar, GraphUp, Paperclip, People } from 'react-bootstrap-icons';
 
const GuestPage = () => {
   return (
      <div>
         <div className="banner" style={{minHeight: 94 + 'vh'}}>
            <div className="d-flex banner-content">
               <div className="col-lg-6">
                  <h1 className="text-center text-primary mt-5 mb-4">Welcome to the Biggest Legal Community</h1>
                  <h4 className="text-center my-4">Interact with the best legal minds all over the world</h4>
                  <div className="w-100 d-flex justify-content-center align-items-center my-2">
                     <p>Share your expertize, request for advice, manage your company performance with our free analytical tools, bill your clients.</p>
                  </div>

                  <div className="d-flex justify-content-center my-5">
                     <button className="btn btn-primary mx-3">Join Now</button>
                  </div>

               </div>
               <div className="col-lg-6 banner-image-wrapper" style={{height: 94 + 'vh'}}>
                  <img src="/logo512.png" className="w-100 h-100 shadow-lg" alt="what we do"/>
               </div>
            </div>
         </div>
         {/* QOUTE */}
         <div className="container bg-light shadow-sm my-3 p-3 rounded">
            <h5>"I am a goal oriented Full stack developer working for Suitors Inc with JS, Python, PHP, Laravel, React, jQuery, Vue, Express, Django, Flask, CSS"</h5>
            <h4 className="text-primary"><em>- Nankunda Bright</em></h4>
         </div>
         {/* WHY JOIN SUITORS */}
         <div className="mt-3 row b-1 shadow-sm p-2 d-flex">
            <div className="col-lg-4 my-5 p-3 border-right">
               <div className="w-100 d-flex justify-content-center flex-col align-items-center">
                  <People className="new-navbar-icon text-primary mx-auto" />
                  <p className="xl-font font-weight-450">Connect with the best Legal experts</p>
                  
               </div>
            </div>
            <div className="col-lg-4 my-5 p-3 border-right">
               <div className="w-100 d-flex justify-content-center flex-col align-items-center">
                  <Bookshelf className="new-navbar-icon text-primary mx-auto" />
                  <p className="xl-font font-weight-450">Seek counsel from legal experts</p>
               </div>
            </div>
            <div className="col-lg-4 my-5 p-3">
               <div className="w-100 d-flex justify-content-center flex-col align-items-center">
                  <Paperclip className="new-navbar-icon text-primary mx-auto" />
                  <p className="xl-font font-weight-450">Share Legal expertise with the ones in need</p>   
               </div>
            </div>
         </div>
         <div className="mt-3 row b-1 shadow-sm p-2 d-flex">
            <div className="col-lg-4 my-5 p-3 border-right">
               <div className="w-100 d-flex justify-content-center flex-col align-items-center">
                  <CloudArrowUp className="new-navbar-icon text-primary mx-auto" />
                  <p className="xl-font font-weight-450">List your firm and display your services</p>
                  
               </div>
            </div>
            <div className="col-lg-4 my-5 p-3 border-right">
               <div className="w-100 d-flex justify-content-center flex-col align-items-center">
                  <CurrencyDollar className="new-navbar-icon text-primary mx-auto" />
                  <p className="xl-font font-weight-450">Stream line your firm's legal billing requirements</p>
               </div>
            </div>
            <div className="col-lg-4 my-5 p-3">
               <div className="w-100 d-flex justify-content-center flex-col align-items-center">
                  <GraphUp className="new-navbar-icon text-primary mx-auto" />
                  <p className="xl-font font-weight-450">Track your firm's advocates performance</p>   
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