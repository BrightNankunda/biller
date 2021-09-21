import React from 'react';
 
const GuestPage = () => {
   return (
      <div>
         <div className="banner" style={{minHeight: 94 + 'vh'}}>
            <div className="d-flex banner-content">
               <div className="col-lg-7">
                  <h1 className="text-center text-primary mt-5 mb-4">Welcome to the Biggest Legal Community</h1>
                  <h4 className="text-center my-4">Interact with the best legal minds all over the world</h4>
                  <p>Share your expertize, request for advice, manage your company performance with our free analytical tools, bill your clients.</p>
                  <div className="d-flex justify-content-center my-5">
                     <button className="btn btn-primary mx-3">Join</button>
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
         <div>
            <div className="">
            
            </div>
            <div className="">
               
            </div>
            <div className="">
               
            </div>
         </div>
         {/* FOOTER */}
         <div className="">
            Suitors Inc 2021
         </div>
      </div>
   );
}
 
export default GuestPage;