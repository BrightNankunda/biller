import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchACriminal } from '../../Actions/CriminalActions';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
 
const SingleCriminal = (props) => {

   const dispatch = useDispatch()
   let criminalId =  props.match.params.criminalId

   useEffect(() => {
      dispatch(FetchACriminal(props.match.params.criminalId))
      console.log('BILL ID', props.match.params.criminalId)
      return () => {
         // cleanup
      }
   }, [props.match.params.criminalId])

   const {loading, criminal} = useSelector(state => state.singleCriminal)
   console.log('LOADING', loading, 'CRIMINAL', criminal)

   useEffect(() => {
      if(criminal !== null) {

         console.log('CRIMINAL OPEN DATE', criminal.closeDate);
      }
      return () => {
         // cleanup
      }
   }, [criminal])
   const advocateOptions = [
      `To sue or defend anycase, whether commenced by plaint ,statement of claim, petition, originating summons or originating motions 
       or to present or oppose an appeal, where the claim or value of the subject matter can be determined from the pleading, settlement,
      a valuation or the judgement`,
      "To sue in ordinary suit in which no defense is filed or in a summary suit where no application for leave to appear and defend is made",
      "To sue or defend in summary suit in which an application for leave to appear and defend was made and refused",
      "A suit where settlement is reached prior to confirmation of the first hearing date of the suit the fee"
   ]
   return (
      <div>
         <AppNavbar />
         <div className="d-flex w-100">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
            <div className="col-lg-9">
               <h3 className="text-center">CRIMINAL MATTER</h3>
               
                {criminal && <div className="my-2 d-flex justify-content-center forty-height light-color">
                  <div className="col-lg-10 p-2">
                     {/* <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">CLIENT NAME: </span>
                        <span className="col-50 ml-2 text-primary">{criminal.clientName}</span></h5> */}
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">ASSIGNED TO: </span> 
                        <span className="col-50 ml-2 text-primary">{criminal.assignedTo}</span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                     <span className="col-50 mr-2">ADVOCATE: </span>
                           <span className="col-50 ml-2 text-primary">{advocateOptions[criminal.court - 1]}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">OFFENCE: </span>
                        <span className="ml-2 text-primary">
                           {criminal.offence}
                        </span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">COMMITTED: </span>
                        <span className="ml-2 text-primary">
                           {criminal.committed}
                        </span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">REMAND: </span>
                        <span className="ml-2 text-primary">
                           {criminal.remand}
                        </span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">NOTES: </span>
                        <span className="ml-2 text-primary">
                           {criminal.notes}
                        </span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">FIRM EXPENSES: </span>
                        <span className="col-50 ml-2 text-primary">{criminal.firmExpenses}</span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">ADVOCATE EXPENSES: </span>
                        <span className="col-50 ml-2 text-primary">{criminal.advocateExpenses}</span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">VALUE OF SUBJECT MATTER: </span>
                        <span className="col-50 ml-2 text-primary">{criminal.subjectValue}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">TOTAL: </span>
                        <span className="col-50 ml-2 text-primary">{criminal.total}</span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">OPEN DATE: </span>
                        <span className="col-50 ml-2 text-primary">{Date(criminal.openDate)}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">CLOSE DATE: </span>
                        <span className="col-50 ml-2 text-primary">{Date(criminal.closeDate)}</span></h5>
                     
                  </div>

               </div>} 
            </div>
         </div>
      </div>
      );
}

 
export default SingleCriminal;