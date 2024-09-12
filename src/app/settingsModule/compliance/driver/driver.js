'use client'
import React, { useEffect, useState } from 'react'
import { SubSettings } from '@/components/subSettings/subSettings'
import { complianceItems } from '../configuration'
import Compliance from '../compliance'

const Driver = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false);
  },[]);
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div>
      <Compliance/>
      <h3>Driver</h3>
    </div>
  )
}
export default Driver