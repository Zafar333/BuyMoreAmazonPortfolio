import ContactUsForm from '@/components/contactUsForm/ContactUsForm'
import { Button } from 'antd'
import React from 'react'

const Home = () => {
  return (
    <div className='max-w-[1700px] m-auto'>
      {/* bUssines Intro Section is start from here */}
      <div className='mt-[100px] bg-darkblack pt-[100px] pb-[100px] px-[10px] xs:px-[50px] sm:px-[100px] rounded-md '>
        <div className='flex flex-col gap-[20px]'>
        <div className=' text-center '><label className='text-yellow text-[16px] font-bold xs:text-[18px] sm:text-[22px] font-Poppins p-[8px] px-[15px] rounded-md'>E-COMMERCE HIVE & SOLUTIONS</label></div>
        <div className='text-center'>
          <label className='text-white text-[16px] xs:text-[22px] sm:text-[24px] font-Poppins'>Where Ideas Ignite and
            Businesses Thrive.</label>
        </div>
        <div className='max-w-full sm:max-w-[700px] sm:m-auto'>
          <label className='text-[18px] text-[#c2c2c2] font-Poppins'>
          E-COMMERCE HIVE Private Limited is a dynamic and innovative company dedicated to providing comprehensive solutions in E-commerce, and Incubation. With a passion for excellence and a commitment to fostering growth, E-COMMERCE HIVE has established itself as a trusted partner for businesses and individuals seeking success in the digital age.
          </label>
        </div>
        <div className='text-center mt-[10px]'>
        <Button className='bg-black text-white p-[25px] text-[20px] sm:text-[22px] font-Poppins'>Our Team</Button>
        </div>
        
        <div>

        </div>
      </div>
      </div>
      {/* bUssines Intro Section is end here */}


      {/* our Department and our Services section is start from here */}
      <div id="services" className=' mt-[100px] flex flex-col gap-[20px] bg-lightGray py-[100px]  px-[10px] xs:px-[50px] sm:px-[100px]'>
      <div className=' mt-[30px] font-Poppins font-bold text-[20px] sm:text-[24px] text-black text-center '>
      OUR DEPARTMENTS

      </div>
      <div className='font-Poppins text-[20px] sm:text-[30px] text-center text-yellow'>
      Dive into Our Diverse Services
      </div>

      <div className='mt-[50px] max-w-[700px] grid grid-cols-1 md:grid-cols-2 gap-[30px] m-auto'>
        <div className='border border-gray-400 rounded-md p-[10px]'>
          <label className='text-yellow font-Poppins text-[20px]'>E-COMMERCE HIVE</label>
          <div className='text-[18px] font-Poppins'>We offer a wide range of E-commerce business solutions, including product evaluation, proper sourcing, budget maintenance, and market analysis and Providing A to Z services on top E-commerce platforms such as Amazon , Walmart, eBay, Shopify, TikTok, and more.</div>
        </div>

        <div className='border border-gray-400 rounded-md p-[10px] font-Poppins text-[20px]'>
        <label className='text-yellow'>HIVE (Incubation & Mentorship)</label>
          <div className='text-[18px] font-Poppins'>Hive offers a physical workspace for aspiring E-commerce entrepreneurs & receive a unique advantage : the chance to manage live Amazon accounts, gaining hands-on experience and insights into the E-commerce industry</div>
        </div>

      </div>

      </div >
      {/* our Department and our Services section is end here */}


      {/* our Mission content is start from here */}
      <div className='mt-[100px] flex flex-col gap-[80px] bg-lightGray py-[100px]  px-[10px] xs:px-[50px] sm:px-[100px]'>
        <div className='m-auto'>
          <div className='text-center mb-[50px]'><label className='text-black font-Poppins text-[20px] sm:text-[24px] font-bold'>Our Mission</label></div>
          <div className='text-[18px] font-Poppins max-w-[900px]'>
          At E-COMMERCE HIVE our mission is to empower businesses and individuals with innovative solutions and knowledge, fostering their success in the ever-evolving digital landscape. We are committed to delivering exceptional E-commerce expertise, cutting-edge and nurturing the next generation of talent through mentorship and incubation. Our passion for excellence drives us to be a trusted partner in your journey to digital success.
          </div>
        </div>


        <div className='m-auto '>
          <div className='text-center mb-[50px]'><label className='text-black font-Poppins text-[20px] sm:text-[24px] font-bold'>Our Vision</label></div>
          <div className='text-[18px] font-Poppins max-w-[900px]'>
          Our vision at E-COMMERCE HIVE is to be a global leader in E-commerce and Incubation services. We aspire to continuously push the boundaries of innovation, setting new standards for excellence in these fields. We envision a future where businesses thrive in the digital world, individuals achieve their full potential, and emerging talent finds a nurturing environment to flourish. Together, we shape a brighter and more connected digital future.
          </div>
        </div>

      </div>
      {/* our Mission content is end here */}


      {/* video section is start from here */}
      <div className='mt-[100px] flex flex-col gap-[80px] bg-lightGray py-[100px]  px-[10px] xs:px-[50px] sm:px-[100px]'>
       <video width="full" className='h-[700px]' aria-label="Video player" controls preload="none">
      <source  src="video1.mp4"  type="video/mp4" />
      {/* <track
        
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      /> */}
      Your browser does not support the video tag.
    </video>

{/* 
    <iframe
      src="https://www.youtube.com/watch?v=xBSCXdbukTk"
      frameborder="0"
      allowfullscreen
      onPlay={Button}
    /> */}
      </div>
      {/* video section is start ends here */}



      {/* ContactUs section is start from here */}
      <div id='contactus' className='mt-[100px] flex flex-col bg-lightGray py-[100px]  px-[10px] xs:px-[50px] sm:px-[100px]'>
        <div className='font-Poppins text-[24px] text-center' >CONTACT US</div>
        <div className='text-center text-[30px] text-yellow mt-[20px] mb-[40px]'>Let's Get in Touch And Make <br /> Magic Together.</div>

      <ContactUsForm />
      </div>
      {/* ContactUs section is end here */}

    </div>
  )
}

export default Home