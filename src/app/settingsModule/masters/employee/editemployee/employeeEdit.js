'use client'

import { useSearchParams } from 'next/navigation';
import React, { use } from 'react'
import { CreateEmployeeForm } from '@/components/Forms/createEmployeeForm';

export const EmployeeEdit = () => {
  const searchParams=useSearchParams();
  // const filledData=searchParams.get('filledData');
  const configFilled=searchParams.get('configFilleddata');
  // const formConfig=searchParams.get('formConfig');
  // const formConfig1=JSON.parse(formConfig);
  const configFilled1=JSON.parse(decodeURIComponent(configFilled));
  const {filledData,formConfig}=configFilled1;
  console.log('oy',filledData,'jdhf',formConfig);
  return (
    <div>
        <h3>Editing Employee Details</h3>
        <CreateEmployeeForm items={formConfig} filledData={filledData} />
    </div>
  )
}
