import React from 'react'
import VideoInput from '../components/Home/VideoInput'
import HomeHeroText from '../components/Home/HomeHeroText'
import HomeBottomText from '../components/Home/HomeBottomText'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
            <VideoInput/>
        </div>
        <div className='h-screen w-screen relative flex flex-col text-white'>
            <HomeHeroText/>
            <HomeBottomText/>
        </div>
    </div>
  )
}

export default Home