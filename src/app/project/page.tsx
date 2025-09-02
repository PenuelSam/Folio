"use client"
import React from 'react'
import Header from '@/components/Header'
import Projects from './_component/Projects'
import ProjectModal from '@/components/project-modal'
import { AnimatePresence } from 'framer-motion'

function Page() {
  return (
    <div>
      <Header />
      <Projects />
       <AnimatePresence>
      <ProjectModal />
      </AnimatePresence>
    </div>
  )
}

export default Page
