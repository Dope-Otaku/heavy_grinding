import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[fontLarge] flex items-center justify-center gap-5'>
        <Link className='text-[6.5vw] border-3 border-white rounded-full px-10 pt-1 pb-0 uppercase overflow-hidden'>Projects</Link>
        <Link className='text-[6.5vw] border-3 border-white rounded-full px-10 pt-1 pb-0 uppercase overflow-hidden'>Agents</Link>
    </div>
  )
}

export default HomeBottomText