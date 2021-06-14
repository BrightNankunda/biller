import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'

const SingleClient = (props) => {

   let {clientId} = useParams()

   useEffect(() => {
      console.log(clientId)
      console.log(props.match.params.clientId)
      return () => {
         // cleanup
      }
   })
   console.log(props.match.params.clientId)
   console.log(clientId);

   return (
      <div>
         SingleClient
      </div>
   )
}

export default SingleClient