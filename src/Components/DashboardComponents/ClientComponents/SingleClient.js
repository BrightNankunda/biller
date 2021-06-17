import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { FetchSingleClient } from '../../../Actions/ClientActions'

const SingleClient = (props) => {

   let {clientId} = useParams()
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(FetchSingleClient(props.match.params.clientId))
      console.log(clientId)
      return () => {
         // cleanup
      }
   }, [props.match.params.id])

   const singleClient = useSelector(state => state.singleClient)
   console.log(singleClient)

   return (
      <div className="d-flex justify-content-center flex-col full-height bg-light">
         <div className="">
            <h4 className="text-center">CLIENT FIRST NAME CLIENT LAST NAME</h4>
            <h4 className="text-center">CLIENT EMAIL</h4>
            <h4 className="text-center">CLIENT OCCUPATION</h4>
         </div>
         <div className="actions d-flex justify-content-between">
            <button className="bill-btn">DELETE</button>
            <button className="bill-btn">UPDATE</button>
         </div>
      </div>
   )
}

export default SingleClient