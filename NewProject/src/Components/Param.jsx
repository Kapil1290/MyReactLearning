import React from 'react'
import { useParams } from 'react-router-dom'

export default function Param() {
    const {id} = useParams()
  return (
    <div>
        Params : {id}
    </div>
  )
}
