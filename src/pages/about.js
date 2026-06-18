import Link from 'next/link'
import React from 'react'

const About = () => {
  const obj={name:'hareesh',
              age:'22'}
  return (
    <div>
      <div>about in pages router</div>
      <Link href={{
        pathname:'/lazyLoading',
        query:{person:JSON.stringify(obj)}
      }}>To lazy loading</Link>
    </div>
  )
}
export default About
