import React from 'react'
import img1 from "../assets/img2.jpg"

const About = ({isLoggedIn}) => {
  return (
    <div className='flex flex-col gap-10px justify-center items-center text-white text-3xl h-full'>
      <p className='m-[200]'>Contact Us..</p>
      <p>Email id : abc123@gmail.com</p>
      <p>Phone No : 79058XXXX4 </p>
      <p>For more details follow us.</p>
    </div>
  )
}

export default About;