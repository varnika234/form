import React from 'react'
import img1 from "../assets/img1.avif"

const Home = ({isLoggedIn}) => {
  return (
    <div className='flex flex-col gap-10px justify-center items-center text-white text-3xl h-full'>
      <p className='m-[200]'>Welcome!!</p>
      <img src={img1} alt='img'/>
    </div>
  )
}

export default Home
