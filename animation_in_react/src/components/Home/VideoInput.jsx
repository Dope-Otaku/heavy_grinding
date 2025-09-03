import React from 'react'

const VideoInput = () => {

  const videoSource = import.meta.env.VITE_HomeVideo //currently i am using a public url
  console.log(videoSource)
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay muted loop src={videoSource}></video>
    </div>
  )
}

export default VideoInput