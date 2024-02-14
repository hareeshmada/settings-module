'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import React, { use } from 'react'
import { CreateEmployeeForm } from '@/components/Forms/createEmployeeForm';

export const EmployeeEdit = () => {
  const router=useRouter();
  const searchParams=useSearchParams();
  // const filledData=searchParams.get('filledData');
  const configFilled=searchParams.get('configFilleddata');
  if(!configFilled){
    console.log("not there")
    router.push('/pageNotFound')
  }else{
  const configFilled1=JSON.parse(decodeURIComponent(configFilled));
  const {filledData,formConfig}=configFilled1;
  console.log('oy',filledData,'jdhf',formConfig);
  
  return (
    <div>
        <h3>Editing Employee Details</h3>
        {configFilled!==undefined &&<CreateEmployeeForm items={formConfig} filledData={filledData} />}
    </div>
  )
  }
}
