import React from 'react'
import VideoInput from './VideoInput'

const HomeHeroText = () => {
  return (
    <div className='font-[fontSmall] text-white text-center pt-4'>
        <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>
            the spark
        </div>
        <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>
            to
            <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-5 mb-5'>
                <VideoInput/>
            </div>
            generate
        </div>
        <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>
            creativity
        </div>
    </div>
  )
}

export default HomeHeroText