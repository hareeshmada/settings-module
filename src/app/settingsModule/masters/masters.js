'use client'
import React,{useState,useEffect} from 'react'
import { masterItems } from './configuration'
import { usePathname } from 'next/navigation'
import { SubSettings } from '@/components/subSettings/subSettings'
import { Loading } from '@/components/customHooks/loading'

export const Masters = () => {
    const pathname=usePathname();
    
  return (
    <div>
        <SubSettings items={masterItems}/>
        
    </div>
  )
}
