"use client";
import React from 'react' 
import ProjectModal from '@/components/project-modal'
import Projects from '@/project/Projects'
import { AnimatePresence } from 'framer-motion'


function Home () {

  return (
        <>
        <Projects />
   
      <AnimatePresence>
      <ProjectModal />
      </AnimatePresence>
      </>
  )
}

export default Home