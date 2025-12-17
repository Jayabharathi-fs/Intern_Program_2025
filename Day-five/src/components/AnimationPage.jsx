import React from 'react'
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.jpg';

const AnimationPage = () => {
  return (
    <section className='px-24 py-20 bg-[#FBFCFA]'>

        <div className='flex justify-between '>
            <div className='flex gap-x-3'>
                <p className='text-[#2D6105] font-roboto font-bold text-5xl'>FEATURED</p>
                <p className='text-black font-roboto font-bold text-5xl'>COLLECTION</p>
            </div>
            <button className='font-semibold text-base border-2 border-black rounded-3xl py-3 px-6'> View all </button>
        </div>

        <div className='flex gap-x-10 mt-12'>

            <div className='flex border shadow-sm border-gray-50 rounded-4xl overflow-hidden w-2/4'>
                <img className='rounded-tl-4xl rounded-bl-4xl w-1/2' src={Image1} alt=" Slide1" />

                <div className='flex flex-col gap-y-10 px-10 py-14 bg-white'>
                    <div className='flex flex-col gap-y-4'>
                        <div className='w-fit py-1 px-2 bg-[#6CF6001A] text-roboto text-[#2D6105] text-xs'>FLAT 40%</div>
                        <p className='font-roboto text-black font-semibold text-5xl leading-[120%]'>Timeless tribal jewellery</p>
                        <p className='font-medium text-[#273025] text-base leading-[150%]'>Make a bold statement with our classic eye wear selection from Italy. These are sure to turn some heads.</p>
                    </div>

                    <button className='bg-black w-fit h-auto text-white font-semibold text-base py-4 px-6 rounded-4xl'> Buy now  → </button>
                </div>
            </div> 

            <div className='flex border shadow-sm border-gray-50 rounded-4xl overflow-hidden w-1/4'>
                <img className='w-full h-full object-cover rounded-4xl' src={Image2} alt=" Slide2" />
            </div>

            <div className='flex border shadow-sm border-gray-50 rounded-4xl overflow-hidden w-1/4'>
                <img className='w-full h-full object-cover rounded-4xl' src={Image3} alt=" Slide3" />
            </div>

        </div>

    </section>
  )
}

export default AnimationPage;