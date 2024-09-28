'use client'

import { motion } from 'framer-motion'

export default function EventsPage() {

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-5xl font-bold mb-12 text-center text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me!
      </motion.h1>
      <div className="grid grid-cols-1 justify-items-center bg-slate-100 p-8">

      
      <motion.p
        className="text-2xl mb-12 text-left text-black font-sans"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       Hello! My name is Brandon Valadez and I am a 2nd year college student at Drake University. I am studying computer science and mathematics with a minor in artificial intelligence. I enjoy developing frontend websites (I am currently learning backend :D), creating video games, and studying mathematics! In the summer of 2024 I started my development for The Stayover and have since made it into an operation that I am putting my max effort into. I have learned many different things about game development and, in particular, working in a collaborative environment. I also spent some time working on recreational mathematics and preparing myself for competitive math and coding competitions. <br /><br /><br /><br />In my free time I enjoy playing my accordion and spending time with my family. I learned the accordion during my years in highschool after listening to years of Tejano and Norteño music. I am at my happiest when I am in the backyard of my childhood home eating some good Texas fajitas and ribs while listening to Tejano music with my family. 
      </motion.p>
</div>  
</div>
  )
}
