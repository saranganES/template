import React from 'react'

export default function Header() {
  return (
    <>
      <div className='bg-gray-950 h-16 flex items-center justify-center'>
        <div className='xl:flex  justify-around items-center w-1/2'>
          <div className='flex items-center justify-center'>
            <img alt='' className='h-8 w-8' src='/images/DexCheck-logo.png' />
            <span className='text-white text-3xl mb-1'>DexCheck</span>
          </div>
          <div className='text-white text-xl xl:block hidden'>Join the airdrop to share $30000 TET</div>
          <div className='text-white text-l xl:block hidden'><span className='bg-slate-700 h-6 px-4 pb-1 rounded-lg'>Join airdrop</span></div>
        </div>
      </div>
    </>
  )
}
