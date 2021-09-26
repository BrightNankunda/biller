import React from 'react';
import { People } from 'react-bootstrap-icons';
 
const FriendsSidebar = () => {
   return (
      <div className="fluid-container position-relative">
         <div className="" style={{minHeight: 97+'vh'}}>
            <div className="w-100">
               <div className="h-100 border rounded overflow-hidden" style={{minHeight: 45 + 'vh'}}>
               
                  <div>
                     <div className="d-flex justify-content-center">
                        <p className="xl-font text-secondary "><span className="my-auto">
                           <People className="new-navbar-icon"/>
                        </span>Friends</p>
                     </div>
                     <div className="d-flex justify-content-center">
                        <img src="../../logo512.png" className="user-image" alt="user" />
                     </div>
                     <div className="d-flex flex-col align-items-center pb-2">
                        <p className="m-zero p-zero l-font font-weight-450">CEO KK Advocates</p>
                        <p className="m-zero p-zero font-weight-370">Kakooza Kage</p>
                        <button className="m-zero connection-button text-primary px-5"> + Connection Request</button>
                     </div>
                  </div>
                  <div>
                     <div className="d-flex justify-content-center">
                        <img src="../../logo512.png" className="user-image" alt="user" />
                     </div>
                     <div className="d-flex flex-col align-items-center pb-2">
                        <p className="m-zero p-zero l-font font-weight-450">CEO KK Advocates</p>
                        <p className="m-zero p-zero font-weight-370">Kakooza Kage</p>
                        <button className="m-zero connection-button text-primary px-5"> + Connection Request</button>
                     </div>
                  </div>

                  <div>
                     <div className="d-flex justify-content-center">
                        <img src="../../logo512.png" className="user-image" alt="user" />
                     </div>
                     <div className="d-flex flex-col align-items-center pb-2">
                        <p className="m-zero p-zero l-font font-weight-450">CEO KK Advocates</p>
                        <p className="m-zero p-zero font-weight-370">Kakooza Kage</p>
                        <button className="m-zero connection-button text-primary px-5"> + Connection Request</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-100 mt-3 position-sticky-150">
               <div className="h-100 w-100 border rounded" style={{minHeight: 45 + 'vh'}}>
               
                  <div>
                     <div className="d-flex justify-content-center">
                        <img src="../../logo512.png" className="user-image" alt="user" />
                     </div>
                     <div className="d-flex flex-col align-items-center pb-2">
                        <p className="m-zero p-zero l-font font-weight-450">CEO KK Advocates</p>
                        <p className="m-zero p-zero font-weight-370">Kakooza Kage</p>
                        <button className="m-zero connection-button text-primary px-5"> + Connection Request</button>
                     </div>
                  </div>
                  <div>
                     <div className="d-flex justify-content-center">
                        <img src="../../logo512.png" className="user-image" alt="user" />
                     </div>
                     <div className="d-flex flex-col align-items-center pb-2">
                        <p className="m-zero p-zero l-font font-weight-450">CEO KK Advocates</p>
                        <p className="m-zero p-zero font-weight-370">Kakooza Kage</p>
                        <button className="m-zero connection-button text-primary px-5"> + Connection Request</button>
                     </div>
                  </div>

                  <div>
                     <div className="d-flex justify-content-center">
                        <img src="../../logo512.png" className="user-image" alt="user" />
                     </div>
                     <div className="d-flex flex-col align-items-center pb-2">
                        <p className="m-zero p-zero l-font font-weight-450">CEO KK Advocates</p>
                        <p className="m-zero p-zero font-weight-370">Kakooza Kage</p>
                        <button className="m-zero connection-button text-primary px-5"> + Connection Request</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default FriendsSidebar;