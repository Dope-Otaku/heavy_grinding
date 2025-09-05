import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Agents from "./pages/Agents"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function App() {

  useGSAP(function(){
    const tl = gsap.timeline()

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
  })


  return (
    <>
      <div className="h-screen w-full fixed z-20 flex top-0">
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
      </div>
      <h1 className="text-6xl text-black">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/agents" element={<Agents/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </h1>
    </>
  )
}

export default App
