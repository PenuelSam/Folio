"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa'; // Import a spinner icon

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);

    // Simulate download delay (3 seconds)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className='sticky top-0 left-0 right-0  w-full max-w-[1500px] mx-auto  flex items-center justify-between py-[16px] px-3 z-[999] '>
      <div>
        <Link href="/" className='font-HelveticaMid uppercase text-black md:text-[14px] text-[12px]'>Penuel</Link>
      </div>
      <div className='flex items-center gap-1'>
        <ul className='flex items-center gap-1'>
          <Link href="/info"><li className='font-medium font-HelveticaMid uppercase md:text-[14px] text-[12px] leading-[19.2px] tracking-[-2%] text-[#000]'>Info,</li></Link>
          <Link href="/"><li className='font-medium font-HelveticaMid uppercase md:text-[14px] text-[12px] leading-[19.2px] tracking-[-2%] text-[#000]'>Projects,</li></Link>
        </ul>
        
        {/* Download CV Button */}
        <a 
          href='/penueldev-resume.pdf'
          download="Resume.pdf"
          onClick={handleDownload}
          className='font-medium font-HelveticaMid uppercase md:text-[16px] text-[12px] leading-[19.2px] tracking-[-2%] text-[#000] cursor-pointer flex items-center gap-2 '
        >
          {isLoading ? (
            <>
              <FaSpinner className="animate-spin" /> Downloading...
            </>
          ) : (
            ' CV'
          )}
        </a>
      </div>
    </div>
  );
};

export default Header;