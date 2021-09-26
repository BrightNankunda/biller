import React from 'react';
import AppArticle from './AppArticle';
import ArticleForm from './ArticleForm';
import FriendsSidebar from './FriendsSidebar'
import Navbars from './Navbars';
import SidebarProfile from './SidebarProfile';
 
const UserProfile = () => {
   return (
      <div className="fluid-container">
         <Navbars />
         <div className="d-flex justify-content-center">
         {/* style={{minWidth: 250 + 'px', maxWidth: 270 + 'px'}} */}
            <div className="bg-dark-purpple col-lg-2" >
               <SidebarProfile />
            </div>
            <div>
            {/* style={{minWidth: 580 + 'px', maxWidth: 620 + 'px'}} */}
               <div className="px-2 rounded-lg col-lg-12">
                     <AppArticle />
                     <AppArticle />
                     <AppArticle />
                     <AppArticle />
                     <AppArticle />
                     <AppArticle />
               </div>
            </div>
            {/* style={{minWidth: 250 + 'px', maxWidth: 270 + 'px'}} */}
            <div className="mx-2 mt-2 px-2 position relative col-lg-3" >
               <div className="w-100">
                  <FriendsSidebar />
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default UserProfile;