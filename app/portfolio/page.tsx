"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{background: "#000"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='flex   max-w-[100%] max-h-[90%]'>
        
          <ProjectCard
              
          />
       
      </div>
    </div>
  )
}

export default Page