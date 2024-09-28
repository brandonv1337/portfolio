'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Linkedin } from 'lucide-react'


export default function ContactPage() {
  

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-5xl font-bold mb-12 text-center text-black dark:text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me!
      </motion.h1>
      <div className="grid grid-cols-1 flex justify-items-center pt-10">
        <motion.div 
          className="bg-card text-card-foreground rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-semibold mb-6">My Information</h2>
          <ul className="space-y-6">
            <li className="flex items-center">
              <MapPin className="mr-4 text-black dark:text-black" size={24} />
              <span>San Antonio, Texas <br /> Des Moines, Iowa</span>
            </li>
            <li className="flex items-center">
              <Linkedin className="mr-4 text-black dark:text-black" size={24} />
              <a href={'https://www.linkedin.com/in/brandon-valadez-84973225b/'}>LinkedIn (Click me!)</a>
            </li>
            <li className="flex items-center">
              <Mail className="mr-4 text-black dark:text-black" size={24} />
              <span>brandon.valadez@drake.edu <br /> brandon.valadez1337@gmail.com</span>
            </li>
          </ul>
        </motion.div>
      </div>
      
    </div>
  )
}