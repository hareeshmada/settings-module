'use client'
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useState } from 'react'
// import { CompA } from '../src/components/lazyComps/CompA';
const CompA = React.lazy(()=> import("../src/components/lazyComps/CompA"));
const CompB = React.lazy(()=> import('../src/components/lazyComps/CompB'));

const LazyLoading = () => {
  const searchParams=useSearchParams();
  const person=searchParams.get('person');
  const person_data=JSON.parse(person);
  console.log(person_data);
  const [data,setData]=useState();
  const [checker, setChecker]=useState();
    const handleLazy=()=>{
      setChecker(data)
      
    }
    const handleChange=(eve)=>{
      setData(eve.target.value);
    }
  return (
    <div>

        

        <input type='text' onChange={handleChange}></input>
        <button onClick={handleLazy}>give it!</button>
        <CompC check={checker}/>
        <h3>{person_data.name}</h3>
        <h3>{person_data.age}</h3>
        
    </div>
  )
}

const CompC=(props)=>{
  if(props.check === 'compa'){
    return (<Suspense fallback={<div>Loading...</div>}>
      <CompA/>
    </Suspense>);
  }else if(props.check === 'compb'){
    return (<Suspense fallback={<div>Loading...</div>}>
      <CompB/>
    </Suspense>);
  }
  
  else{
    return <div>no such component</div>
  }
}

export default LazyLoading