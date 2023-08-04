import React from 'react'

export default function Header() {
  return (
    <div className='bg-gray-950 h-16 flex items-center justify-center'>
        <div className='flex w-2/4 justify-around items-center'>
          <div className='flex items-center'><img className='h-8 w-8' src='/images/DexCheck-logo.png' /><span className='text-white text-3xl ml-3 mb-1'>DexCheck</span></div>
          <div className='text-white text-xl ml-3'>Join the airdrop to share $30000 TET</div>
          <div className='text-white text-l ml-3'><span className='bg-slate-700 h-6 px-4 pb-1 rounded-lg'>Join airdrop</span></div>
        </div>
      </div>
  )
}
