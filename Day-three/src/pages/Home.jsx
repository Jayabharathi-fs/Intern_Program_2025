import React from 'react';
import Logo from '../assets/logo.svg';
import Icon1 from '../assets/icon1.svg';
import ArrowIcon from '../assets/arrow_icon.svg';
import PolygonD1 from '../assets/PolygonD1.svg';

const Home = () => {
  return (
    <section className='relative overflow-x-hidden'>

      <div className='grid lg:grid-cols-2 gap-x-12 lg:pt-16 lg:pb-100'>

        <img src={PolygonD1} alt="background Image" className='absolute inset-0 -z-10 w-3/4 h-full object-cover' /> 

        <div className='flex lg:flex-col lg:gap-y-8 lg:justify-center pr-8 lg:pl-64'>
          <img src={Logo} className='w-44 h-auto' alt="Sifthire Logo" />
          <img src={Icon1} className='h-52 w-52' alt="Icon vector" />

          <p className='font-bold p-2 text-4xl w-full text-black'>Find top applicants in seconds.</p>

          <div className='max-w-[360px] h-auto border border-gray-300 reounded-xl'>
            <input className='w-full bg-white placeholder-gray-400 placeholder:text-base placeholder:font-medium text-center p-3' placeholder='Enter your email address' type="text" />
            <div className='bg-[#2252A5] justify-center p-3 flex gap-x-2 cursor-pointer'> 
              <p className='font-semibold text-base text-white'>Join Waitlist</p> 
              <img src={ArrowIcon} alt="Arrow icon" />
            </div>
          </div>

          <p className='font-medium text-2xl max-w-70 text-black'>Trusted by recruiters at fast-growing startups.</p>
        </div>

        <div className=''>
          Banner Image side
        </div>

      </div>

    </section>
  )
}

export default Home;