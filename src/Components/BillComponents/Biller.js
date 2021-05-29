import React, { useState, useReducer } from 'react';
import {useDispatch} from 'react-redux'
import { SaveBill } from '../../Actions/BillActions';

import Advocate from './Advocate';
import BillData from './BillData';
import Calculation from './Calculation';
import Front from './Front'
import Scale from './Scale';
import Title from './Title';
import Rental from './Rental'
 

const reducer = (state, action) => {
   switch(action.type) {
      case 'SHOWFRONT':
         return {...state, showFront: true, showScale: false, showAdvocate: false, showCalculation: false, calculatedValue: false, showRental: false}

      case 'SHOWSCALE':
         return {...state, showFront: false, showScale: true, showAdvocate: false, showCalculation: false, calculatedValue: false, showRental: false}

      case 'SHOWADVOCATE':
         return {...state, showFront: false, showScale: false, showAdvocate: true, showCalculation: false, calculatedValue: false, showRental: false}

      case 'SHOWCALCULATION':
         return {...state, showFront: false, showScale: false, showAdvocate: false, showCalculation: true, calculatedValue: false, showRental: false}
      case 'SHOWCALCULATEDVALUE':
         return {...state, showFront: false, showScale: false, showAdvocate: false, showCalculation: false, calculatedValue: true, showRental: false}
      case 'SHOWRENTAL':
         return {...state, showFront: false, showScale: false, showAdvocate: false, showCalculation: false, calculatedValue: false, showRental: true}
      default:
         return state
   }
}

//REDUCER STATE
const initialState = {
   showFront: true, 
   showScale: false, 
   showAdvocate: false, 
   showCalculation: false,
   calculatedValue: false,
   showRental: false
}

const Biller = ( ) => {

   //USEREDUCER
   const [state, dispatch] = useReducer(reducer, initialState)
   const ReducerDispatch = useDispatch()
   //USESTATE
   const [propertyType, setPropertyType] = useState(null)
   const [landValue, setLandValue] = useState(null)
   const [scale, setScale] = useState(null)
   const [advocate, setAdvocate] = useState(null)
   const [registered, setRegistered] = useState(null)
   const [rentalType, setRentalType] = useState(null)

   const [total, setTotal] = useState(null)
   

   //FUNCTIONS
   const handleSetProperty = (property) => {
      setPropertyType(property)
      console.log(property)
      if(property === 'rent') {
         dispatch({type: 'SHOWRENTAL'})
      } else if(property === 'land') {
         dispatch({type: 'SHOWSCALE'})
      }
   }

   const handleSetRental = (rentalTypeValue) => {
      console.log('Setting rental', rentalTypeValue)
      setRentalType(rentalTypeValue)
      dispatch({type: 'SHOWADVOCATE'})
      
   }

   const handleScale = (scaleValue) => {
      setScale(scaleValue)
      console.log(scaleValue)
      
      dispatch({type: 'SHOWADVOCATE'})
   }

   const handleAdvocate = (advocateValue) => {
      setAdvocate(advocateValue)
      console.log(advocateValue)
      dispatch({type: 'SHOWCALCULATION'})
   }

   //REGISTRATION CHECK
   const checkRegistrationStatus = (total, registered) => {
      
      if(parseInt(registered) === 1) {
         console.log(total)
         console.log(total)
         return setTotal(total)
      } else if (parseInt(registered) === 2) {
         total += 600000
         console.log(total)
         return setTotal(total)
      }
   }

   //TOTAL FUNCTION


   //CALCULATOR
   const handleCalculate = (landValue, registeredValue) => {
      setLandValue(landValue)
      setRegistered(registeredValue)

      if(propertyType === 'land') {
         if(parseInt(scale) === 1) {
            if(parseInt(advocate) === 1) {
               if(landValue < 11000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  checkRegistrationStatus(total, registeredValue)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               } else {
                  const a = 1000000 * 0.15  
                  const y = landValue - 11000000  
                  const b = 0.10 * y
                  const d = (.05 * y)
                  const total = (a + b + d)
                  checkRegistrationStatus(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               }
            } else if(parseInt(advocate) === 2) {
               
               if(landValue < 11000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  checkRegistrationStatus(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               } else {
                  const a = 10000000 * 0.15  
                  const y = landValue - 11000000  
                  const b = 0.10 * y
                  const d = (.05 * y)
                  const total = (a + b + d)
                  checkRegistrationStatus(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               }
            } else if(parseInt(advocate) === 3) {
               if(landValue < 11000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  checkRegistrationStatus(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               } else {
                  
                  const a = 1000000 * 0.15  
                  const y = landValue - 11000000  
                  const b = 0.10 * 10000000
                  const d = (.05 * y)
                  const total = (a + b + d)
                  checkRegistrationStatus(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               }
            } else if(parseInt(advocate) === 4) {
               if(landValue < 11000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  checkRegistrationStatus(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               } else {
                  const a = 1000000 * 0.15  
                  const y = landValue - 11000000  
                  const b = 0.10 * 10000000
                  const d = (.05 * y)
                  const total = (a + b + d)
                  checkRegistrationStatus(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               }
            }
         } else if(parseInt(scale) === 2) {
            setRegistered('1')
            if(parseInt(advocate) === 1) {
               if(landValue < 21000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  setTotal(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               } else {
                  
                  const a = 1000000 * 0.15  
                  const y = landValue - 21000000  
                  const b = 0.10 * 20000000
                  const d = (.05 * y)
                  const total = (a + b + d)
                  setTotal(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               }
            } else if(parseInt(advocate) === 2) {
               if(landValue < 21000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  setTotal(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               } else {
                  const a = 1000000 * 0.15  
                  const y = landValue - 21000000  
                  const b = 0.10 * 20000000
                  const d = (.05 * y)
                  const total = (a + b + d)
                  setTotal(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               }
            } else if(parseInt(advocate) === 3) {
               if(landValue < 21000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  setTotal(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               } else {
                  const a = 1000000 * 0.15  
                  const y = landValue - 21000000  
                  const b = 0.10 * 20000000
                  const d = (.05 * y)
                  const total = (a + b + d)
                  setTotal(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               }
            } else if(parseInt(advocate) === 4) {
               if(landValue < 21000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  setTotal(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               } else {
                  const a = 1000000 * 0.15  
                  const y = landValue - 21000000  
                  const b = 0.10 * 20000000
                  const d = (.05 * y)
                  const total = (a + b + d)
                  setTotal(total)
                  dispatch({type: 'SHOWCALCULATEDVALUE'})
               }
            }
         }
      } else {
         console.log('Type is Rent')
      }
   }

   //REDUX DISPATCHER
   const handleSaveBill = () => {
      ReducerDispatch(SaveBill({propertyType,landValue,scale,advocate,registered,total}))
   }

   //CANCELLINGS
   const handleCancel = () => {
      dispatch({type: 'SHOWFRONT'})
   }

   //COMPONENTS
   return (
      <div className="mt-1">
         {propertyType && 
         <Title propertyType={propertyType} registered={registered} rentalType={rentalType}

            scaleHeading={scale} advocateHeading={advocate}/>}


         {state.showFront && 
            <Front onSetProperty={handleSetProperty}/> }

         {state.showRental && 
         <Rental onSetRental={handleSetRental} propertyType={propertyType}/>}
         
         {state.showScale &&  
            <Scale onScale={handleScale} />}
            
         {state.showAdvocate && 
            <Advocate onAdvocate={handleAdvocate}  propertyType={propertyType} rentalType={rentalType}
            onCancelAdvocate={handleCancel}/>}

         {state.showCalculation && 
            <Calculation scale={scale}
            onCalculate={handleCalculate} total={total}/>}

         {state.calculatedValue && 
            <BillData  total={total} onSaveBill={handleSaveBill}/>}
      </div>
   );
}
 
export default Biller;