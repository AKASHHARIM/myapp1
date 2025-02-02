'use client';

import React from 'react'


import Link from 'next/link'
import DarkModeSwitch from './DarkmodeSwitch'
function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
    <ul className='flex gap-4'>
      <li>
        <Link href={'/sign-in'}>Sign in</Link>
      </li>
      <li className='hidden sm:block'>
        <Link href={'/'}>Home</Link>
      </li>
      <li className='hidden sm:block'>    
        <Link href={'/about'}>About</Link>
      </li>
    </ul>
    <div className='flex items-center gap-4'>
           <DarkModeSwitch/>
    <Link href={'/'} className='flex gap-1 items-center'>
      <span className='text-2xl font-bold bg-blue-400 py-1 px-2 rounded-lg'>
        MOVIEZZ
      </span>
      <span className='text-xl hidden sm:inline'>Corner</span>
    </Link>
    </div>
  </div>  )
}

export default Header