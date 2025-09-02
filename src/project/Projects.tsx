"use client"
import React, { useEffect, useState } from 'react'
import arrow from "@/assets/icons/arrow.png"
import video from "@/assets/icons/video.png"
import Image from 'next/image'
import { useModalStore } from '@/store/modal.store'
import img1 from "@/assets/image/dressthearthcover.png"
import img2 from "@/assets/image/euterpecover.png"
import img3 from "@/assets/image/thenotescover.png"
import img4 from "@/assets/image/ymkcover.png"
import img5 from "@/assets/image/sectionStudio.png"
import { MdArrowOutward } from "react-icons/md";
import { GoVideo } from "react-icons/go";

import { StaticImageData } from 'next/image';
import WarningModal from './Warning'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

export interface Project {
    id: number;
    cover: StaticImageData;
    name: string;
    desc: string;
    url: string;
    video: string;
    date: string;
    isIncomplete: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        cover: img5,
        name: "Section Studio",
        desc: "Editorial website for Section Studio, combining modern web development with editorial-inspired design. Featuring responsive layouts, expressive typography, and smooth interactions for an immersive user experience.",
        url: "https://www.thesectionhq.com/",
        video: "/videos/SECTION-STUDIO.webm",
        date: "2024",
        isIncomplete: true,
    },
    {
        id: 2,
        cover: img4,
        name: "Ymkupnext!",
        desc: "A sleek portfolio website built for a creative director and videographer to showcase their work. Features a visually rich design, smooth animations, and a structured portfolio layout.",
        url: "https://ymkupnext.onrender.com/",
        video: '/videos/ymk.mp4',
        date: "2024",
        isIncomplete: false,
    },
    {
        id: 3,
        cover: img2,
        name: "Euterpe",
        desc: "A Web3 music streaming platform that rewards listeners for discovering new artists while ensuring fair royalties and global reach for creators.",
        url: "https://app.euterpe.fm/",
        video: "/videos/euterpe.mp4",
        date: "2024",
        isIncomplete: true,
    }, 
    {
        id: 4,
        cover: img1,
        name: "Dress the Earth",
        desc: "A collaborative freelance project focused on sustainability and eco-friendly products. Developed with a clean aesthetic, engaging content, and intuitive navigation for a smooth user experience.",
        url: "https://dresstheearth.netlify.app/",
        video: '/videos/dressearth.mp4',
        date: "2024",
        isIncomplete: false,
    },
    {
        id: 5,
        cover: img3,
        name: "The Notes",
        desc: "An e-commerce platform designed for an aromatherapy brand, offering a seamless shopping experience. Built with a user-friendly interface, secure checkout, and an elegant product display.",
        url: "https://the-notes-ivory.vercel.app/",
        video: '/videos/thenotes.mp4',
        date: "2024",
        isIncomplete: true,
    },
]

const Projects = () => {    
    const {openModal} = useModalStore();

    const [showWarning, setShowWarning] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".project-section", 
      { opacity: 0 }, 
      {
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-section", 
          start: "top 80%", 
          end: "top 30%", 
          toggleActions: "play none none reverse", 
        }
      }
    );
  }, []);


  const handleVisitClick = (proj: { url: string; isIncomplete: boolean }) => {
    if (proj.isIncomplete) {
      setSelectedUrl(proj.url);
      setShowWarning(true);
    } else {
      window.open(proj.url, "_blank");
    }
  };

  const confirmVisit = () => {
    if (selectedUrl) {
      window.open(selectedUrl, "_blank");
    }
    setShowWarning(false);
  };

  return (
    <div className='w-full h-full max-w-[1400px] mx-auto md:px-0  my-10 project-section'>
      <div className='flex flex-col gap-[40px]   '>
      <h1 className='font-HelveticaMid font-bold md:text-[35px] text-[25px] px-3  leading-[76.81px] tracking-[0.02em] text-black text-center uppercase'>Featured Projects</h1>
      <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-4 gap-y-10 px-3'>
        {
            projects.map((proj,index) => {
                const formattedIndex = String(index + 1).padStart(2, '0');
                return(
                <div key={index} className='flex flex-col gap-5'>
                    <div className='w-[100%] md:h-[500px]  h-[250px] relative rounded-[15px] shadow-md  bg-black flex items-center justify-center' onClick={() => openModal(proj)}>
                    <Image src={proj.cover} alt='' className='w-[80%] h-[60%] object-cover rounded-md'/>
                      <div className='absolute top-0 left-0 w-full h-full bg-black/50 bg-opacity-50 opacity-0 md:hover:opacity-100 rounded-[20px] flex  justify-between items-end gap-4 cursor-pointer transition-opacity duration-300 p-6'>
                            <p className=' w-[70%] font-HelveticaLight font-light text-[16px] text-[#fff] leading-[19.2px] tracking-[0.02em] '>{proj.desc}</p>
                            <div className='flex items-center gap-4'>
                        <div onClick={() => handleVisitClick(proj)} className='   flex items-center gap-2 cursor-pointer'>
                            <MdArrowOutward fontSize={30} />
                        </div>
                        <div onClick={() => openModal(proj)} className='   flex items-center gap-2 cursor-pointer'>
                            <GoVideo fontSize={30}/>
                        </div>
                    </div> 
                      </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-4'>
                            <p className='font-MetroSans font-medium text-[24px] leading-[28.8px] tracking-[-0.02em] text-[#000]'>{formattedIndex}</p>
                            <div className='relative'>
                            <p className='font-MetroSans font-bold text-[24px] leading-[28.8px] tracking-[-0.02em] text-[#000]'>{proj.name}</p>
                            <p className='border-[#DFE0D8] w-[42px] h-[20px] rounded-[4px] border text-[#000] text-[12px] font-bold font-MetroSans tracking-[-0.02em] absolute top-[-5px] right-[-45px] flex items-center justify-center '>{proj.date}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='flex items-center gap-4'>
                        <div onClick={() => handleVisitClick(proj)} className='   flex items-center gap-2 cursor-pointer'>
                            <Image src={arrow} alt='' width={16} height={16} quality={100}/>
                            <p className='underline text-[16px] font-medium leading-[19.2px] tracking-[-0.02em] text-[#DFE0D8] '>visit site</p>
                        </div>
                        <div onClick={() => openModal(proj)} className='   flex items-center gap-2 cursor-pointer'>
                            <Image src={video} alt='' width={16} height={16} quality={100}/>
                            <p className='underline text-[16px] font-medium leading-[19.2px] tracking-[-0.02em] text-[#DFE0D8] '>watch video</p>
                        </div>
                    </div> */}
                </div>
            )})
        }
      </div>
      </div>

      <WarningModal
        isOpen={showWarning}
        onClose={() => setShowWarning(false)}
        onConfirm={confirmVisit}
      />
    </div>
  )
}

export default Projects