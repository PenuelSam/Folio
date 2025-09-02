"use client";
import React from 'react'
import { MdArrowRight } from "react-icons/md";
import Link from 'next/link';


export default function Info() {
  return (
    <div className="md:w-[80%] w-full  h-full px-4 flex flex-col md:gap-40 gap-32 justify-between">
      <div>
        <p className="text-black font-HelveticaMid leading-[19.2px] tracking-[0.02em] text-[16px]">A frontend developer based in Nigeria, passionate about crafting intuitive and visually engaging digital experiences. Skilled in React, Next.js, and modern web technologies, with a focus on responsive, accessible, and user-friendly design. Constantly exploring new ways to merge creativity with technology, while bringing ideas to life through thoughtful code and design</p>
      </div>
      <div className="flex flex-col gap-5">
        <div>
            <h1 className="text-black font-HelveticaMid  leading-[19.2px] tracking-[0.02em] text-[16px] flex items-center">TECHNOLOGIES<MdArrowRight fontSize={30}/></h1>
         <p className="text-black font-HelveticaMid leading-[19.2px] md:w-[500px] tracking-[0.02em] text-[14px] uppercase">HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT, NEXTJS, REDUX, TAILWIND, TanStack Query, Zustand ,Vite, Git, Firebase, SEO, Version Control</p>
        </div>
        {/* <div>
            <h1 className="text-black font-HelveticaMid  leading-[19.2px] tracking-[0.02em] text-[16px] flex items-center">FAMILIAR WITH <MdArrowRight fontSize={30}/></h1>
       
         <p className="text-black font-HelveticaMid leading-[19.2px] tracking-[0.02em] text-[14px] uppercase">TanStack Query, Zustand ,Vite, Git, Firebase, SEO, Version Control</p>
        </div> */}
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-1">
            <Link href="mailto:penuelsamuel54@gmail.com" className="text-black font-HelveticaMid leading-[19.2px] tracking-[0.02em] text-[15px]">EMAIL</Link>
            <Link href="https://www.linkedin.com/in/penuel/" className="text-black font-HelveticaMid leading-[19.2px] tracking-[-0.02em] text-[15px]">LINKEDIN</Link>
            <Link href="https://github.com/PenuelSam" className="text-black font-HelveticaMid leading-[19.2px] tracking-[-0.02em] text-[15px]">GITHUB</Link>
            <Link href="/" className="text-black font-HelveticaMid leading-[19.2px] tracking-[-0.02em] text-[15px]">INSTAGRAM</Link>
        </div>
        <div className="flex items-center justify-between">
            <p className="text-black">&copy; 2024</p>
            <Link href="mailto:penuelsamuel54@gmail.com" className="text-black">Code by Penuel</Link>
        </div>
      </div>
    </div>
  )
}
