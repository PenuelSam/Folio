'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useModalStore } from '@/store/modal.store';
import Image from 'next/image';
import arrow from "@/assets/icons/arrow.png"
import WarningModal from '@/project/Warning';
import { MdArrowOutward } from "react-icons/md";


const ProjectModal = () => {
  const { isOpen, selectedProject, closeModal } = useModalStore();
  const [showWarning, setShowWarning] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  // Animation variants for the modal
  const modalVariants = {
    hidden: {
      y: '100%', // Start off-screen
      opacity: 0,
    },
    visible: {
      y: 0, // Slide up to its position
      opacity: 1,
      transition: {
        type: "spring" as const, // Spring animation for smooth motion
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      y: '100%', // Slide back down
      opacity: 0,
      transition: {
        type: "spring" as const,
        duration: 0.3, // Faster exit
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Close the modal when clicking the backdrop
  const handleClose = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'modalBackdrop') {
      closeModal();
    }
  };

  // Handle the visit site button click
  const handleVisitClick = () => {
    if (selectedProject?.isIncomplete) {
      setSelectedUrl(selectedProject.url);
      setShowWarning(true);
    } else {
      window.open(selectedProject?.url, "_blank");
    }
  };

  // Confirm visiting the site
  const confirmVisit = () => {
    if (selectedUrl) {
      window.open(selectedUrl, "_blank");
    }
    setShowWarning(false);
  };


  if (!isOpen || !selectedProject) return null;

  return (
    <>
    <motion.div
      id="modalBackdrop"
      className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-end justify-center z-50"
      onClick={handleClose}
    >
      <motion.div
        className="w-full md:h-[90vh] h-[70vh] relative bg-[#fff] shadow-lg px-2 md:px-6 md:py-6 rounded-t-[30px] text-white flex justify-center items-center"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          className="absolute top-5 right-5 text-[30px] font-bold text-black cursor-pointer"
          onClick={closeModal}
        >
          &times;
        </button>
        <div  onClick={handleVisitClick} className=' absolute top-5  left-5  flex items-center gap-2 cursor-pointer'>
             <MdArrowOutward fontSize={30} color="black"/>
                <p className='underline text-[20px] font-medium leading-[19.2px] tracking-[-0.02em] text-[#000] '>visit site</p>
        </div>
       
       <div className='md:w-[60%] w-[100%]  md:h-[80%] '>
        <video src={selectedProject.video} muted loop autoPlay  className='w-full h-full object-cover rounded-md'/>
       </div>
       
      </motion.div>
    </motion.div>

    <WarningModal
        isOpen={showWarning}
        onClose={() => setShowWarning(false)}
        onConfirm={confirmVisit}
      />
    </>
  );
};

export default ProjectModal;