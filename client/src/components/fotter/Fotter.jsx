"use client"
import Link from 'next/link'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { PiFacebookLogoBold } from "react-icons/pi"
import { CgInstagram } from "react-icons/cg";
import { Button } from 'antd';



const Fotter = () => {
  return (
    <div className='bg-black h-fit mt-[100px] grid grid-cols-2 gap-[20px] px-[10px] md:px-[100px] '>
        <div className='py-[20px] flex flex-col gap-[30px] border border-lightgreen'>

            <label className='text-white font-Poppins text-[24px]'>Contact Us</label>
            <div className='flex '>
                  <IoLocationOutline className='text-lightGray text-[25px]'  />
                  <div className='px-[20px]'>
                    <label className='text-white font-Poppins text-[16px]'>Adress</label>
                    <p className='text-[14px] text-lightGray'>
                     Office 3030, 3rd Floor, Giga Mall (World Trade Center), Islamabad, Pakistan-45730
                    </p>
                  </div>

            </div>

            <div className='flex '>
                  <MdOutlineEmail  className='text-lightGray text-[25px]'  />
                  <div className='px-[20px]'>
                    <label className='text-white font-Poppins text-[16px]'>Email</label>
                    <p className='text-[14px] text-lightGray'>
                     ceo@gmail.com
                    </p>
                  </div>

            </div>


            <div className='flex '>
                  <IoCallOutline  className='text-lightGray text-[25px]'  />
                  <div className='px-[20px]'>
                    <label className='text-white font-Poppins text-[16px]'>Call Us</label>
                    <p className='text-[14px] text-lightGray'>
                     Pak Tel: +92-312-9952419
                    </p>
                  </div>

            </div>

                

        </div>


        {/* social Link is start from here */}
        <div className='py-[20px] flex flex-col gap-[30px] border border-lightgreen'>

            <label className='text-white font-Poppins text-[24px]'>Social Media</label>
            <label className='text-white font-Poppins text-[16px]'>E-COMMERCE HIVE</label>
                  <div className='px-[20px] flex gap-[40px]'>
                    {/* <Button href='https://www.facebook.com/profile.php?id=61561000816583'> */}
                  <a target="_blank" href="https://www.facebook.com/profile.php?id=61561000816583" className='cursor-pointer'><PiFacebookLogoBold className='text-white text-[25px]'  /></a>
                  {/* </Button> */}
                  <CgInstagram className='text-white text-[25px]' />

                   
                  </div>

            </div>  
        {/* social Link is end here */}

    </div>
  )
}

export default Fotter