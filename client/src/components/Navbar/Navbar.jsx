"use client"
// import Link from 'next/link'
import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { CgMenuRightAlt } from "react-icons/cg";


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)

  const openSidebar = () => {
    if (sidebar == true) {
      setSidebar(false)


    }
    if (sidebar == false) {

      setSidebar(true)
    }

  }
  return (
    <div className='flex flex-col'>
      <div className='bg-black max-w-full h-fit flex items-center justify-between pl-[30px] pr-[30px]'  >
        {/* <div className='border border-white'><img src="./4.png" alt="" className='w-[100px]'  /></div> */}
        <div className=''><img src="./logo3.png" alt="" className='w-[100px]' /></div>
        <div className='hidden md:flex items-center gap-[20px] lg:gap-[40px]'>
          <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white'>Home</Link>
          <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white'>Our Team</Link>
          <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white' to='services' smooth={true}
            duration={1000}>Our Services</Link>
          <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white'>Trainings</Link>
          <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white' to='contactus' smooth={true}
            duration={1000} >Contact Us</Link>
        </div>
        <div className='md:hidden block' onClick={openSidebar}>
          <CgMenuRightAlt className='text-[30px] text-white' />

        </div>



        {/*  */}
      </div>
      {/* mobile view sidebar is start from here */}
      <div className={`${sidebar === false ? "hidden" : "flex"} py-[20px] bg-darkblack flex flex-col items-center md:hidden gap-[20px] lg:gap-[40px]`}>
        <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white hover:bg-red-500 '  onClick={openSidebar}>Home</Link>
        <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white hover:before:bg-red-500' onClick={openSidebar}>Our Team</Link>
        <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white' to='services' smooth={true} duration={1000} onClick={openSidebar}>Our Services</Link>
        <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white' onClick={openSidebar}>Trainings</Link>
        <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white' to='contactus' smooth={true} duration={1000} onClick={openSidebar} >Contact Us</Link>

      </div>
      {/* mobile view sidebar is end here */}
    </div>
  )
}

export default Navbar