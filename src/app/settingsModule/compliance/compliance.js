'use client'
import { Settings } from '@/app/settingsModule/settings'
import { SubSettings } from '@/components/subSettings/subSettings'
import React from 'react'
import { complianceItems } from './configuration'

export const Compliance = () => {
  return (
    <div>
      <SubSettings items={complianceItems}/>
      <div>Compliance</div>
    </div>
  )
}
