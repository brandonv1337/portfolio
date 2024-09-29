'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const projects = [
  { name: 'The Stayover', image: '/img/theStayover.jpg' ,
  description: 'A 3D Horror Escape Room video game developed by me in Unreal Engine 5! Be on the lookout for the release date!'},
  { name: 'Street Craps', image: '/img/Craps Background With Dice.png',
  description: 'Python application developed with Tkinter.'},
]

const testimonials = [
  { name: 'Sharon Valadez', role: 'Mom / Social Worker', text: 'I love you, papi!', image: '/img/sharonValadez.jpg' },
  { name: 'Moises Valadez', role: 'Dad / General Superintendent', text: 'Orgulloso de ti mi hijo', image: '/img/moisesValadez.png' },
  { name: 'Michael Valadez', role: 'Brother / Civil Engineer', text: 'Love u manito, proud of u', image: '/img/michaelValadez.jpeg' },
  { name: 'Odilia D. Castoreno', role: 'Grandma / Ex-Business Owner', text: 'Fully recommend! He taught me how to text!', image: '/img/odieCastoreno.png' }, 
  { name: 'Samuel Rodriguez', role: 'Student', text: 'Very good gamer.', image: '/img/samuelRodriguez.png' }
]

const roles = ['Web Developer!', 'Game Developer!', 'App Developer!', 'College Student!']

export default function HomePage() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <h1 className="text-5xl font-bold mb-20 text-black dark:text-black font-playfair-display text-center">Brandon C. Valadez</h1>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-900">
              Hi! I am a
            </h2>
            <motion.h3
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-indigo-600"
            >
              {roles[currentRole]}
            </motion.h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <Image
              src="/img/brandonValadez.jpg"
              alt="Brandon C. Valadez"
              width={350}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-20"
      >
        <h2 className="text-4xl font-bold mt-30 mb-10 text-center text-black dark:text-black">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              className="bg-card text-black dark:text-black rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <Image src={project.image} alt={project.name} width={500} height={300} className="w-full h-[400px] object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                <p className="text-black dark:text-black">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-5 text-center text-black dark:text-black">Testimonials</h2>
        <h2 className="text-1xl mb-10 text-center text-black dark:text-black">(Totally legit reviews btw)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card text-black dark:text-black rounded-lg shadow-lg p-8"
              whileHover={{ scale: 1.05 }}
            >
              <p className="mb-6 text-lg text-black dark:text-black italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center">
                <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4 object-cover" />
                <div>
                  <p className="font-semibold text-black dark:text-black">{testimonial.name}</p>
                  <p className="text-sm text-black dark:text-black">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}