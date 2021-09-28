import React from 'react';
import AppArticle from './AppArticle';
import ArticleForm from './ArticleForm';
import FriendsSidebar from './FriendsSidebar'
import Navbars from './Navbars';
import NewArticle from './NewArticle';
import SideBars from './SideBars';
 
const AuthPage = () => {
   return (
      <div className="fluid-container">
         <Navbars />
         <div className="d-flex mt-3 d-flex justify-content-center">
            <div className="mx-2 px-2 mt-2" style={{minWidth: 250 + 'px', maxWidth: 270 + 'px'}}>
               <SideBars />
            </div>
            <div>
               <div className="px-2 rounded-lg " style={{minWidth: 580 + 'px', maxWidth: 620 + 'px'}}>
                  <div className="w-100">
                     <ArticleForm />
                     <NewArticle />
                     <NewArticle />
                     <NewArticle />
                     <NewArticle />
                     <NewArticle />
                     <NewArticle />
                     <NewArticle />
                  </div>
               </div>
            </div>
            <div className="mx-2 px-2 mt-2 position relative" style={{minWidth: 250 + 'px', maxWidth: 270 + 'px'}}>
               <div className="w-100">
                  <FriendsSidebar />
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default AuthPage;