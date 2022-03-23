import React from 'react'
import about from '../images/about.png'
const About = () => {
  return (
    <div id='about' className='min-h-screen flex flex-col md:flex-row bg-zinc-900 text-white px-10 pt-10 sm:pt-0 '>
         
        <div className='flex md:w-2/4  flex-col justify-center align-center'>
            <h1 className='flex font-bold text-6xl mb-5	'>About <span className='text-orange-700 ml-2'>me</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolorum qui similique inventore nesciunt aperiam possimus aliquam architecto quas maiores doloribus corporis, numquam,<br/> exercitationem error tenetur in reiciendis sit reprehenderit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium totam temporibus, itaque aliquid qui, nesciunt non eum vero obcaecati vitae quia praesentium provident sint, omnis laboriosam similique officia magni enim.</p>
        </div>
        <div className='md:w-2/4  flex justify-center align-center'>
            <img className='py-20 rounded-full w-2/3' src={about} alt="" />
        </div>
       
    </div>
  )
}

export default About