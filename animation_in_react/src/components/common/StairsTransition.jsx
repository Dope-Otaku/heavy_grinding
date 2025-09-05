import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const StairsTransition = () => {
    const transitionRef = useRef(null)

  useGSAP(function(){
    const tl = gsap.timeline()

    tl.to(transitionRef.current,{
      display: 'block'
    })

    tl.from('.stairs',{
      height:0,
      stagger:{
        amount: -0.3
      }
    })

    tl.to('.stairs',{
      y:'100%',
      stagger:{
        amount: -0.3
      }
    })

    tl.to(transitionRef.current,{
      display: 'none'
    })

    tl.to('.stairs',{
      y:'0%'
    })
  })


  return (
    <div ref={transitionRef} className="h-screen w-full fixed z-20 top-0">
        <div className="h-full w-full flex">
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
        </div>
      </div>
  )
}

export default StairsTransition