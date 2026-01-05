import React from 'react';
import Logo from '../assets/logo-sift-hire.png';
import ConnectorLine from '../assets/connectorline.png';
import ConnectorMobile from '../assets/connectormobile.png';
import MobileBg from '../assets/banner_img3.png';

const imgImage = "https://www.figma.com/api/mcp/asset/702b7b43-6247-47c9-b5bb-ebb748e1fd4b";
const imgImage1 = "https://www.figma.com/api/mcp/asset/a885c90d-3875-4be8-9253-0b37b3dae734";
const imgImage5 = "https://www.figma.com/api/mcp/asset/ade2dbff-d084-48d7-b32f-66bc5d0c755a";
const imgImage2 = "https://www.figma.com/api/mcp/asset/cd5cee60-dcac-4a52-8289-344a565242e1";
const imgLine1 = "https://www.figma.com/api/mcp/asset/31d26536-d16e-43e3-a055-c4f6fbd343d1";
const imgLine2 = "https://www.figma.com/api/mcp/asset/ebdf5454-f634-4755-92d4-0429679d7d7f";
const imgLine3 = "https://www.figma.com/api/mcp/asset/7e38dd41-c780-4c03-bb1a-1fea92dda24f";
const imgLine4 = "https://www.figma.com/api/mcp/asset/c309aed8-64af-447e-89c3-479d61420d20";
const imgPolygon3 = "https://www.figma.com/api/mcp/asset/9805020b-371c-4009-8717-ca6a9637e38f";
const imgPolygon5 = "https://www.figma.com/api/mcp/asset/bf40c0da-d419-4f2e-b65f-0ca62b79f660";
const imgPolygon2 = "https://www.figma.com/api/mcp/asset/0cec008c-2efd-4a20-8960-0032f9da47da";

const imgLine1Mobile = "https://www.figma.com/api/mcp/asset/9f6817d2-80b6-462a-9450-372448e34f1b";
const imgLine2Mobile = "https://www.figma.com/api/mcp/asset/0d733e34-0dcd-4722-ad1b-f197f23e5cae";
const imgLine3Mobile = "https://www.figma.com/api/mcp/asset/31369e54-9382-4d03-91a6-acaf019d8339";
const imgLine4Mobile = "https://www.figma.com/api/mcp/asset/e8eccb37-4caa-4cf1-a30d-2cfc3f0d6f5f";

const Home = () => {
  return (
    <div className="bg-white relative min-h-screen w-full overflow-hidden font-['Instrument_Sans',sans-serif]">
      {/* Mobile curves */}
      <div className='block lg:hidden absolute w-full min-h-[1300px] h-svh'>
        <img src={MobileBg} className='w-full h-full object-cover' alt="hero image for mobile" />
      </div>

      {/* Desktop curves */}
      <div className="hidden lg:block absolute left-[-960px] top-[-1204px] w-[2552px] h-[2551px] rotate-180 pointer-events-none">
        <img src={imgPolygon3} alt="" className="w-full h-full object-contain opacity-60" />
      </div>
      <div className="hidden lg:block absolute left-[-861px] top-[-1093px] w-[2353px] h-[2353px] rotate-180 pointer-events-none">
        <img src={imgPolygon5} alt="" className="w-full h-full object-contain opacity-60" />
      </div>
      <div className="hidden lg:block absolute left-[-810px] top-[-1072px] w-[2252px] h-[2252px] rotate-180 pointer-events-none">
        <img src={imgPolygon2} alt="" className="w-full h-full object-contain opacity-60" />
      </div>

      {/* Header Logo */}
      <header className="relative z-10 pt-[50px] px-6 lg:px-[162px] flex justify-center lg:justify-start">
        <img 
          src={Logo} 
          alt="Sift Hire Logo" 
          className="w-auto h-7"
        />
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 lg:px-[162px]">

        <div className="mt-[63px] lg:mt-8 w-[209px] h-[209px] mx-auto lg:mx-0">
          <img 
            src={imgImage1} 
            alt="Box mascot" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Headline */}
        <h1 className="mt-6 lg:mt-8 text-[40px] font-bold text-black leading-tight max-w-[377px] mx-auto lg:mx-0 text-center lg:text-left">
          Find top applicants in seconds.
        </h1>

        {/* Email Form */}
        <div className="mt-8 lg:mt-10 max-w-[365px] mx-auto lg:mx-0">
          <div className="flex flex-col w-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="w-full px-[15px] py-[15px] border border-[#b4b4b4] border-b-0 rounded-t-[5px] text-[16px] text-[#585858] text-center lg:text-left font-medium focus:outline-none focus:border-[#2252a5] bg-white"
            />
            <button className="w-full bg-[#2252a5] text-white font-semibold text-[16px] py-2.5 px-2.5 rounded-b-[5px] flex items-center justify-center gap-2.5 hover:bg-[#1a4285] transition-colors">
              Join Waitlist
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Trust Badge */}
        <p className="mt-6 lg:mt-8 text-2xl font-medium text-black max-w-[294px] mx-auto lg:mx-0 text-center lg:text-left leading-snug">
          Trusted by recruiters at fast-growing startups.
        </p>

        {/* Dashboard Screenshot */}
        <div className="hidden lg:block absolute md:left-[580px] lg:right-[-200px] top-20 w-[1104px] h-[732px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)]">
          <img 
            src={imgImage5} 
            alt="Dashboard preview" 
            className="w-full h-full object-cover"
          />
        </div>
      </main>

      {/* ATS Section */}
      <section className="relative z-10 mt-[650px] md:mt-[640px] lg:mt-[700px] px-4 lg:px-0">
        {/* Background Mobile */}
        <div className="block lg:hidden absolute left-[-219px] top-[180px] w-[1117px] md:w-[1215px] lg:w-[1117px] h-[94px] pointer-events-none">
          <img src={imgLine1Mobile} alt="" className="w-full h-full opacity-50" />
        </div>
        <div className="block lg:hidden absolute left-[-219px] top-[190px] w-[1117px] md:w-[1215px] lg:w-[1117px] h-[132px] pointer-events-none">
          <img src={imgLine2Mobile} alt="" className="w-full h-full opacity-50" />
        </div>
        <div className="block lg:hidden absolute left-[-219px] top-[200px] w-[1117px] md:w-[1215px] lg:w-[1117px] h-44 pointer-events-none">
          <img src={imgLine3Mobile} alt="" className="w-full h-full opacity-50" />
        </div>
        <div className="block lg:hidden absolute left-[-219px] top-[210px] w-[1117px] md:w-[1215px] lg:w-[1117px] h-[216px] pointer-events-none">
          <img src={imgLine4Mobile} alt="" className="w-full h-full opacity-50" />
        </div>

        {/* Background Desktop */}
        <div className="hidden lg:block absolute left-0 top-24 w-full pointer-events-none">
          <img src={imgLine1} alt="" className="w-full opacity-40" />
        </div>
        <div className="hidden lg:block absolute left-0 top-38 w-full pointer-events-none">
          <img src={imgLine2} alt="" className="w-full opacity-40" />
        </div>
        <div className="hidden lg:block absolute left-0 top-52 w-full pointer-events-none">
          <img src={imgLine3} alt="" className="w-full opacity-40" />
        </div>
        <div className="hidden lg:block absolute left-0 top-64 w-full pointer-events-none">
          <img src={imgLine4} alt="" className="w-full opacity-40" />
        </div>

        {/* Integration Card */}
        <div className="relative w-full max-w-xl lg:max-w-[830px] min-h-[820px] border border-[#b6b6b6] rounded-[25px] shadow-[0px_0px_25px_0px_rgba(0,0,0,0.15)] mx-auto">
          {/* Card Background */}
          <div className="absolute inset-0 bg-white rounded-[25px]">
            <img 
              src={imgImage} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-[25px]"
            />
            <div 
              className="absolute inset-0 mix-blend-overlay rounded-[25px]" 
              style={{ backgroundImage: "linear-gradient(-54deg, rgba(255, 255, 255, 1) 43%, rgba(34, 82, 165, 1) 100%)" }}
            />
          </div>

          {/* Card Content */}
          <div className="relative z-10 p-8 lg:p-12 flex flex-col gap-8 h-full min-h-[820px]">
            {/* ATS Section */}
            <div className="text-center lg:text-left lg:ml-auto lg:mr-[50px] mt-16 lg:mt-20">
              <h2 className="text-[48px] text-black leading-tight">
                <span className="font-normal sm:text-[42px]">Have an ATS?<br /> </span>
                <span className="font-bold italic text-4xl text-[#ff6f00]">Perfect</span>
                <span className="font-bold">.</span>
              </h2>
              <p className="mt-4 text-2xl font-normal text-black">
                Integrate Sift Hire
              </p>
            </div>

            {/* No ATS Section - Centered on mobile */}
              <div className="text-center lg:text-right lg:mr-auto lg:ml-[50px] mt-24 lg:mt-12">
                <h2 className="text-[48px] text-black leading-tight">
                  <span className="font-normal text-4xl sm:text-[42px]">No ATS?</span>
                  <br />
                  <span className="font-bold text-4xl italic text-[#ff6f00]">No Problem</span>
                  <span className="font-bold">.</span>
                </h2>
                <p className="mt-4 text-2xl font-normal text-black">
                  Add JD → Add Candidates
                </p>
              </div>

            {/* View Top Candidates Section */}
            <div className='flex flex-col'>
              <div className='hidden lg:block absolute w-40 left-[400px] bottom-[24%]'>
                <img src={ConnectorLine} alt="connector_line" />
              </div>
              <div className='lg:hidden absolute w-[90px] h-[326px] z-[-1] left-1/2 bottom-[24%]'>
                <img src={ConnectorMobile} alt="Connector_Mobile" />
              </div>
              <div className="flex flex-row items-center justify-center mt-auto pt-[100px] lg:pt-24 pb-8">
                <p className="text-3xl sm:text-4xl font-normal text-black text-right leading-tight">
                  View Top<br />Candidates
                </p>
                <div className="w-[142px] h-[142px] ml-4">
                  <img 
                    src={imgImage2} 
                    alt="Document icon" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for bottom */}
      <div className="h-[100px] lg:h-[200px]"></div>
    </div>
  )
}

export default Home
