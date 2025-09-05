import { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Agents = () => {
  gsap.registerPlugin(ScrollTrigger)
  const firstImageDiv = useRef(null)

  useGSAP(function(){
    gsap.to(firstImageDiv.current,{
      scrollTrigger:{
        trigger: firstImageDiv.current,
        // markers: true,
        start:'top 27.3%',
        end:'top -110%',
        scrub:true,
        pin:true,
      }
    })
  })






  return (
    <div>
      <div className='section1'>
        <div ref={firstImageDiv} className='absolute overflow-hidden object-cover h-[20vw] w-[15vw]  top-60 left-[30vw] rounded-3xl bg-red-500'>
          <img src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className=' relative font-[fontLarge]'>
          <div className='mt-[56vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[17.3vw]'>Soixan7e<br/>Douze</h1>
          </div>
          <div className='pl-[40%]'>
            <p className='text-[6xl]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">
      </div>
    </div>
  )
}

export default Agents