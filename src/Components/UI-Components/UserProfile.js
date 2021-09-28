import React from 'react';
import AppArticle from './AppArticle';
import ArticleForm from './ArticleForm';
import FriendsSidebar from './FriendsSidebar'
import Navbars from './Navbars';
import SidebarProfile from './SidebarProfile';
 
const UserProfile = () => {
   return (
      <div className="fluid-container position-relative">
         <Navbars />
         <div className="d-flex justify-content-center">
            <div className="bg-light col-lg-3">
               <div className="position-fixed col-lg-3 pt-2 ">
                  <div className="px-3 w-100">
                     <SidebarProfile />
                  </div>
               </div>
            </div>
            
            <div>
               <div className="px-2 rounded-lg col-lg-12">
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
                  
                  <div className="mt-5">
                     <div className="my-2">
                        <h3 className="opacity-9 text-center">Events</h3>
                        <div className="events w-100 d-flex">
                           <div className="rounded border p-5">
                              <p>Event one</p>
                           </div>
                           <div className="rounded border p-5">
                              <p>Event two</p>
                           </div>
                           <div className="rounded border p-5">
                              <p>Event three</p>
                           </div>
                           <div className="rounded border p-5">
                              <p>Event four</p>
                           </div>
                        </div>
                     </div>
                     <div className="my-2">
                        <h3 className="opacity-9 text-center">Tips</h3>
                        <div className="events w-100 d-flex">
                           <div className="rounded border p-5">
                              <p>Tip one</p>
                           </div>
                           <div className="rounded border p-5">
                              <p>Tip two</p>
                           </div>
                           <div className="rounded border p-5">
                              <p>Tip three</p>
                           </div>
                           <div className="rounded border p-5">
                              <p>Tip four</p>
                           </div>
                           
                        </div>
                     </div>
                     <div className="my-2">
                        <h3 className="opacity-9 text-center">Education</h3>
                        <div className="events w-100">
                           <div className="rounded border p-2">
                              <p>Education Institution  one</p>
                           </div>
                           <div className="rounded border p-2 my-1">
                              <p>Education Institution  two</p>
                           </div>
                           
                        </div>
                     </div>
                     
                     <AppArticle />
                     <AppArticle />
                     <AppArticle />
                     <AppArticle />
                     <AppArticle />
                     <AppArticle />
                  </div>
               </div>
            </div>
            <div className="px-3 pt-2 position relative col-lg-3 bg-light" >
               <div className="w-100 ">
                  <FriendsSidebar />
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default UserProfile;