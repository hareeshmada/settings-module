'use client'
import { Settings } from '@/app/settingsModule/settings'
import { SubSettings } from '@/components/subSettings/subSettings'
import React from 'react'
import { complianceItems } from './configuration'
import isAuth from '@/components/authentication/isAuth'

const Compliance = () => {
  return (
    <div>
      <SubSettings items={complianceItems}/>
    </div>
  )
}
// export default Compliance;
export default isAuth(Compliance);
