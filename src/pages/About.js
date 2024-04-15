import React from 'react'
import img1 from "../assets/img2.jpg"

const About = ({isLoggedIn}) => {
  return (
    <div className='flex flex-col gap-10px justify-center items-center text-white text-3xl h-full'>
      <p className='m-[200]'>Welcome to my sample ABOUT Page!!</p>
      <img src={img1} alt='img' width={500}/>
    </div>
  )
}

export default About;