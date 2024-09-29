'use client'

import { motion } from 'framer-motion'

export default function EventsPage() {

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-6xl font-bold mb-12 text-center text-black dark:text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <div className="grid grid-cols-1 justify-items-center p-8">

      
      <motion.p
        className="text-1xl mb-12 text-left text-black dark:text-black font-mono"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       Hello! My name is Brandon Valadez and I am a 2nd year college student at Drake University. I am studying computer science and mathematics with a minor in artificial intelligence. I enjoy developing frontend websites (I am currently learning backend :D), creating video games, and studying mathematics! In the summer of 2024 I started my development for The Stayover and have since made it into an operation that I am putting my max effort into. I have learned many different things about game development and, in particular, working in a collaborative environment. I also spent some time working on recreational mathematics and preparing myself for competitive math and coding competitions. <br /><br /><br />
       I have accumulated multiple hobbies over the years, most have been for entertainment. These are a few of them:
       <br /><br />- Music: I have enjoyed making music since middle school and have learned multiple instruments over the years, the most notable being the accordion. Nothing like listening to some Tejano music with the accordion at the forefront. 
       <br /><br />- Video Games: Playing video games is the best past time. I started on console in my younger years and have since built a PC to continue my video games playing journey. I have made multiple online friends and have grown close to them over the years. Some of the games I play are Valorant, Fortnite, and Tetris.
       <br /> <br />- Texan / Tejano Culture: Growing up as a Mexican-American in Texas has made me research more and more about my culture. I love reading Tejano books and watching films (my favorite is a film called Chulas Fronteras dir. Les Black). Being able to learn more about my own culture and speaking with elders of my family has brought a lot of clarity in who I want to be in my future.
      </motion.p>
</div>  
</div>
  )
}
