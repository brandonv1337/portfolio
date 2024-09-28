'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect } from 'react'

const projects = [
  { name: 'The Stayover', image: '/img/theStayover.jpg' ,
  description: 'A 3D Horror Escape Room video game developed by me in Unreal Engine 5! Be on the lookout for the release date!'},
  { name: 'Street Craps', image: '/img/Craps Background With Dice.png',
  description: 'Python application developed with Tkinter.'},
]

const testimonials = [
  { name: 'Sharon Valadez', role: 'Mom', text: 'I love you, papi!', image: '/img/sharonValadez.jpg' },
  { name: 'Moises Valadez', role: 'Dad', text: 'Orgulloso de ti mi hijo', image: '/img/moisesValadez.png' },
  { name: 'Michael Valadez', role: 'Brother / Civil Engineer', text: 'Love u manito, proud of u', image: '/img/michaelValadez.jpeg' },
  { name: 'Odilia D. Castoreno', role: 'Full Time Grandma', text: 'Estan buenos', image: '/img/odieCastoreno.png' }
]

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold mb-20 text-primary font-playfair-display"> Brandon C. Valadez</h1>
        <div className="mb-10 relative w-full max-w-3xl mx-auto aspect-video">
  <video
    ref={videoRef}
    className="w-full h-full object-cover rounded-lg shadow-lg"
    loop
    muted
    playsInline
  >
    <source src="/img/mainPageVideo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>    
        <Link href="https://store.steampowered.com" className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition duration-300 shadow-lg">
          Wishlist Now!
        </Link>
      </motion.section>


      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-20"
      >
        <h2 className="text-4xl font-bold mb-10 text-center text-primary">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <Image src={project.image} alt={project.name} width={500} height={300} className="w-full h-[400px] object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                <p className="text-muted-foreground">{project.description}</p>
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
        <h2 className="text-4xl font-bold mb-5 text-center text-primary">Testimonials</h2>
        <h2 className="text-1xl mb-10 text-center text-primary">(Totally legit reviews btw)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card text-card-foreground rounded-lg shadow-lg p-8"
              whileHover={{ scale: 1.05 }}
            >
              <p className="mb-6 text-lg italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center">
                <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4 object-cover" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}