"use client"
// import Link from 'next/link'
import React from 'react'
import { Link } from 'react-scroll';
import { CgMenuRightAlt } from "react-icons/cg";


const Navbar = () => {

  const gotoContactUs=()=>{

  }
  return (
    <div className='bg-black max-w-full min-h-[80px] flex items-center justify-between pl-[30px] pr-[30px]'  >
        {/* <div className='border border-white'><img src="./4.png" alt="" className='w-[100px]'  /></div> */}
        <div className=''><img src="./logo3.png" alt="" className='w-[100px]'  /></div>
        <div className='hidden md:flex items-center gap-[20px] lg:gap-[40px]'>
        <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white'>Home</Link>
        <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white'>Our Team</Link>
        <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white' to='services' smooth={true}
          duration={1000}>Our Services</Link>
        <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white'>Trainings</Link>
        <Link href={"/"} className='font-Poppins text-[17px] xl:text-[22px] text-white' to='contactus' smooth={true}
          duration={1000} >Contact Us</Link>
        </div>
        <div className='md:hidden block'>
        <CgMenuRightAlt  className='text-[30px] text-white'/>

        </div>
    </div>
  )
}

export default Navbar