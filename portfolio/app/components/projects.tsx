'use client';
import { Card, useComputedColorScheme } from '@mantine/core';
import { IconCode, IconEye } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
    { title: 'RiTeh Ticketing', filter: 'react', description: 'Ticketing system for my faculty', image: '/images/ticketing.jpeg', github: "https://github.com/Majki1/riteh-ticketing.git"},
    { title: 'ReserveMe', filter: 'nextjs', description: 'Frontend for a future reservations/social-media app', image: '/images/ReserveMe.jpeg', github: "https://github.com/Majki1/Next_Project.git" },
    { title: 'Next.js Portfolio website', filter: 'nextjs', description: 'My portfolio page', image: '/images/portfolio.png', github: "https://github.com/Majki1/Portfolio.git"},
    { title: 'Coming soon...', filter: 'reactnative', description: 'Something is cooking...', image: '/images/comingSoon.jpeg', github: "https://www.youtube.com"},
];


export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const cardVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };
    const colorScheme = useComputedColorScheme();
    const [selectedFilter, setSelectedFilter] = useState('all');
    return (
        <>
            <div className='px-12 py-12' id='projects'>
                <h1 className="text-4xl font-bold col-span-4 mb-8 px-4 py-2">My projects</h1>

                <motion.button whileHover={{scale: 1.2, transition: {duration: 0.3}}} onClick={() => setSelectedFilter('all')} className={`text-white px-4 py-2 rounded-md mr-4 ml-4 ${colorScheme === 'dark' ? 'bg-gradient-to-r from-purple-950 to-[#C900C2]' : 'bg-gradient-to-r from-blue-900 to-sky-500'}`}>View all</motion.button>
                <motion.button whileHover={{scale: 1.2, transition: {duration: 0.3}}} onClick={() => setSelectedFilter('react')} className={`text-white px-4 py-2 rounded-md mr-4 ${colorScheme === 'dark' ? 'bg-gradient-to-r from-purple-950 to-[#C900C2]' : 'bg-gradient-to-r from-blue-900 to-sky-500'}`}>React</motion.button>
                <motion.button whileHover={{scale: 1.2, transition: {duration: 0.3}}} onClick={() => setSelectedFilter('nextjs')} className={`text-white px-4 py-2 rounded-md mr-4 ${colorScheme === 'dark' ? 'bg-gradient-to-r from-purple-950 to-[#C900C2]' : 'bg-gradient-to-r from-blue-900 to-sky-500'}`}>Next.js</motion.button>
                <motion.button whileHover={{scale: 1.2, transition: {duration: 0.3}}} onClick={() => setSelectedFilter('reactnative')} className={`text-white px-4 py-2 rounded-md mr-4 ${colorScheme === 'dark' ? 'bg-gradient-to-r from-purple-950 to-[#C900C2]' : 'bg-gradient-to-r from-blue-900 to-sky-500'}`}>React Native</motion.button>

            </div>
        <ul ref={ref} className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 justify-center items-center mx-12 py-12">
        {projects.filter(project => selectedFilter === 'all' || project.filter === selectedFilter).map((project, index) => (
                      <motion.li
                      key={index}
                      variants={cardVariants}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                <Card key={index} className="rounded-md max-w-sm items-start">
                    <div className='relative w-full'>
                    <Image src={project.image} width={500} height={256} alt={project.title} className="w-full h-64 object-cover mb-2 rounded-md relative-group" />
                    <div className="absolute inset-0 flex justify-center h-[256px] items-center opacity-0 bg-[#121212] hover:opacity-80 transition-opacity duration-200">
                        <Link
                            href={project.github}
                            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                        >
                            <IconCode className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                        </Link>
                        <Link
                            href={'/'}
                            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                        >
                            <IconEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                        </Link>
                    </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className={`text-base ${colorScheme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
                </Card>
                </motion.li>
            ))}
        </ul>
        </>
    );
}