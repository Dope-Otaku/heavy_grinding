import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[fontLarge] flex items-center justify-center gap-5'>
        <Link to='/projects' className='text-[7vw] hover:border-[#d3fd50] hover:text-[#d3fd50] border-3 border-white rounded-full px-10 pt-5 mb-2 uppercase overflow-hidden leading-[5vw]'>Projects</Link>
        <Link to='/agents' className='text-[7vw] hover:border-[#d3fd50] hover:text-[#d3fd50] border-3 border-white rounded-full px-10 pt-5 mb-2 uppercase overflow-hidden leading-[5vw]'>Agents</Link>
    </div>
  )
}

export default HomeBottomText