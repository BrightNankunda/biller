import React from 'react';
import { HandThumbsUp, ThreeDotsVertical } from 'react-bootstrap-icons';
 
const NewArticle = () => {
   return (
      <div className="fluid-container mx-2 my-3 rounded border">
         
         <div className="">
            <div className="w-100  m-zero">
               <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-center align-items-center pl-1 pt-1">
                     <img src="/logo192.png" className="rounded-circle border" 
                     style={{height: 40 + 'px', width: 40 + 'px'}} alt="poster" />
                     {/*  */}
                     <p className="text-primary my-auto ml-2">Nankunda Bright</p>

                  </div>
                     
                  <div className="d-flex" style={{height: 40 + 'px'}}>
                     <p className="text-primary my-auto">10 Minutes ago</p>
                     <div className="dots my-auto">
                        <ThreeDotsVertical className="two-times opacity-9"/>
                     </div>
                  </div>
               </div>
            </div>
            <div className="px-2 py-1 overflow-hidden" style={{maxHeight: '100px'}}>
               <p>Open the Preferences to enable more docs and customize the UI.
                  You don't have to use your mouse — see the list of keyboard shortcuts.
                  The search supports fuzzy matching (e.g. "bgcp" brings up "background-clip").
                  To search a specific documentation, type its name (or an abbr.), then Tab.
                  You can search using your browser's address bar — learn how.
                  DevDocs works offline, on mobile, and can be installed on Chrome.
                  For the latest news, follow @DevDocs.
                  DevDocs is free and open source.</p>
            </div>
            <div className="w-100 border-top p-zero">
               <div>
                  <p className="text-primary">
                  <HandThumbsUp 
                  className="mx-2 cursor-pointer md-font text-primary"/> 
                  122 likes <span className="text-primary ml-3">
                  204 comments</span>
                  </p>

                  <div className="w-100 d-flex justify-content-center">
                     <input className="form-control form-control-lg border-radius-30 mx-4 my-1" placeholder="Comment"/>
                  </div>

                  
                  <div className="d-flex justify-content-between w-100 pl-1">
                        <div className="d-flex justify-content-center align-items-center">
                           <img src="/logo192.png" className="rounded-circle border" 
                           style={{height: 40 + 'px', width: 40 + 'px'}} alt="poster" />
                           {/*  */}
                           <p className="text-primary my-auto ml-2">Nankunda Bright</p>

                        </div>
                     
                        <div className="d-flex" style={{height: 40 + 'px'}}>
                           <p className="text-primary my-auto">10 Minutes ago</p>
                           <div className="dots my-auto">
                              <ThreeDotsVertical className="two-times opacity-9"/>
                           </div>
                        </div>
                  </div>

                  <div className="pl-1">
                     <p className="opacity">This is the comment body</p>
                  </div>

               </div>
            </div>
         </div>
      </div>
   );
}
 
export default NewArticle;