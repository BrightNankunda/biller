import React from 'react';
import { Calendar, File, FileArrowUp, PlusCircleDotted, PlusSquare } from 'react-bootstrap-icons';
 
const ArticleForm = () => {
   return (
     <div className="fluid-container px-2 mt-2">
            <div className="w-100 border rounded-lg pb-2  pt-1">
               <form className="m-3">
                  <h4 className="text-center">Post Something</h4>
                  <div class="form-group">
                     <textarea type="text" className="form-control" rows="3" placeholder="CREATE AN ARTICLE"/>
                  </div>
                  <div className="d-flex justify-content-around">
                     <button className="btn btn-outline text-primary"><span>
                        <PlusCircleDotted className="new-navbar-icon mr-1"/> Post
                     </span></button>
                     <button className="btn btn-outline text-primary"><span>
                        <FileArrowUp className="new-navbar-icon mr-1"/> Image
                     </span></button>
                     <button className="btn btn-outline text-primary"><span>
                        <PlusSquare className="new-navbar-icon mr-1"/> Add Article
                     </span></button>
                     <button className="btn btn-outline text-primary"><span>
                        <Calendar className="new-navbar-icon mr-1"/> Create Event
                     </span></button>
                  </div>
               </form>
            </div>
         </div>
   );
}
 
export default ArticleForm;