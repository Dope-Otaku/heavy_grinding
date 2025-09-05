import { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Agents = () => {
  gsap.registerPlugin(ScrollTrigger)

  // reffrence section
  const firstImageDiv = useRef(null)
  const imageChangeRef = useRef(null)

  //image array
  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function(){
    gsap.to(firstImageDiv.current,{
      scrollTrigger:{
        trigger: firstImageDiv.current,
        // markers: true,
        start:'top 27.3%',
        end:'top -110%',
        scrub:true,
        pin:true,
        onUpdate:function(elem){
          let imageIndex = Math.round(elem.progress * imageArray.length)
          imageChangeRef.current.src = imageArray[imageIndex]
          // console.log(imageArray[imageIndex])
          // console.log(imageChangeRef.current)
        }
      }
    })
  })






  return (
    <div>
      <div className='section1'>
        <div ref={firstImageDiv} className='absolute overflow-hidden object-cover h-[20vw] w-[15vw]  top-60 left-[30vw] rounded-3xl bg-red-500'>
          <img ref={imageChangeRef} src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
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