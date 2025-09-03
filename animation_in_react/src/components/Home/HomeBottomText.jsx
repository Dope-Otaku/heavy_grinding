import React from 'react'
import { Link } from 'react-router-dom'
import Projects from '../../pages/Projects'
import Agents from '../../pages/Agents'

const HomeBottomText = () => {
  return (
    <div className='font-[fontLarge] flex items-center justify-center gap-5'>
        <Link to={Projects} className='text-[7vw] border-3 border-white rounded-full px-10 pt-5 mb-2 uppercase overflow-hidden leading-[5vw]'>Projects</Link>
        <Link to={Agents} className='text-[7vw] border-3 border-white rounded-full px-10 pt-5 mb-2 uppercase overflow-hidden leading-[5vw]'>Agents</Link>
    </div>
  )
}

export default HomeBottomText