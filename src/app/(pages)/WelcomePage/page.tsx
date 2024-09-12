'use client'

import WelcomeButton from '@/app/Components/WelcomeButton';
import { Button } from '@nextui-org/react'
import React from 'react'

const WelcomePage = () => {
  console.log('hey im here');
  return (
    <>
        <h1 className="text-center text-3xl mt-3">Welcome to the Blog</h1>
        <p className="text-center mb-[20%]">click to see anything and everything</p>
        <div className='flex justify-center'>
           <WelcomeButton/>
        </div>
    </>
  )
}

export default WelcomePage