import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Agents from "./pages/Agents"

function App() {


  return (
    <>
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
