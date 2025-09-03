import React from 'react'
import VideoInput from './VideoInput'

const HomeHeroText = () => {
  return (
    <div className='font-[fontSmall] text-white text-center pt-4'>
        <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>
            L'étincelle
        </div>
        <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>
            qui
            <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-5 mb-5'>
                <VideoInput/>
            </div>
            génère
        </div>
        <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>
            la créativité
        </div>
    </div>
  )
}

export default HomeHeroText