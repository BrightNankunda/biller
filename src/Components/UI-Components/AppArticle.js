import React from 'react';
import { HandThumbsUp } from 'react-bootstrap-icons';
 
const AppArticle = () => {
   return (
      <div className="fluid-container p-2">
         
         <div className="post card">
            <div className="card-header p-zero">
               <div className="d-flex">
                  <img src="/logo192.png" className="rounded-circle" 
                  style={{height: 40 + 'px', width: 40 + 'px'}} alt="poster" />
                  <div className="" style={{height: 40 + 'px'}}>
                     <p className="text-primary bg-light my-auto">
                     Nankunda Bright <span className="text-dark ml-3">10 Minutes ago</span></p>
                  </div>
               </div>
            </div>
            <div className="card-body">
               <p>Open the Preferences to enable more docs and customize the UI.
                  You don't have to use your mouse — see the list of keyboard shortcuts.
                  The search supports fuzzy matching (e.g. "bgcp" brings up "background-clip").
                  To search a specific documentation, type its name (or an abbr.), then Tab.
                  You can search using your browser's address bar — learn how.
                  DevDocs works offline, on mobile, and can be installed on Chrome.
                  For the latest news, follow @DevDocs.
                  DevDocs is free and open source.</p>
            </div>
            <div className="card-footer p-zero">
               <p className="text-primary m-zero"><HandThumbsUp className="mx-2 cursor-pointer md-font text-primary"/> 122 likes <span className="text-primary ml-3">204 comments</span></p>
            </div>
         </div>
      </div>
   );
}
 
export default AppArticle;