import React from 'react';
 
const UserProfile = () => {
   return (
      <div className="fluid-container">
         <div className="row bg-danger">
            Navbar
         </div>
         <div className="row">
            <div className="col-lg-2 bg-success">
               SIMPLE LINKS
            </div>
            <div className="col-lg-8 bg-primary">
               DYNAMIC SECTION
            </div>
            <div className="col-lg-2 bg-light">
               FOLLOW SECTION
            </div>
         </div>
         <div className="row footer bg-dark">
            Suitors Inc 2021
         </div>
      </div>
   );
}
 
export default UserProfile;