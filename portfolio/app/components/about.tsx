'use client';
import Image from "next/image";
import AboutTabs from "./aboutTabs";
import { useComputedColorScheme } from '@mantine/core';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tabs = [
    {
        title: "Skills",
        id: "skills",
        values: (
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-2xl font-bold">Frontend</h2>
                    <ul>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>React Native</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Other</h2>
                    <ul>
                       <li>Great communication skills</li>
                          <li>Team player</li>
                            <li>Problem solving</li>
                                <li>Time management</li>
                                    <li>Adaptability</li>
                                    <li>Attention to detail</li>
                                    <li>Great language skills</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "Education",
        id: "education",
        values: (
            <div>
                <h2 className="text-2xl font-bold">Computer Science</h2>
                <p className="text-lg font-bold">Faculty of Engineering Rijeka</p>
                <p className="text-lg font-bold">2022 - Present</p>
            </div>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        values: (
            <div>
                <h2 className="text-2xl font-bold">Frontend Developer</h2>
                <p className="text-lg font-bold">Freelance</p>
                <p className="text-lg font-bold">2022 - Present</p>
            </div>
        ),
    }
];

export default function About() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
    <div className="py-8 pt-24 px-4 sm:mx-24 my-24 mx-2" id="about" ref={ref}>
        <div className="grid grid-cols-2">
            <motion.div
                variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ delay: 1 }}
            >
            <Image src="/images/aboutImage.jpeg" alt="About Me" width={500} height={500} className="rounded-lg shadow-sm" />
            </motion.div>
            <motion.div
                variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ delay: 1 }}
            >
            <div className="flex flex-col items-start justify-center">
                <h2 className="text-4xl font-extrabold my-3">About Me</h2>
                <p className={`${computedColorScheme === 'dark' ? 'text-slate-400' : 'text-slate-600'} font-bold text-lg`}>I'm a Computer Science student and Frontend developer in React.js, Next.js and I also started mobile development in React Native. I always strive to expand my skill set and knowledge. Additionaly I am a great team player and love working with others to achieve a specific goal.</p>
                <div className="my-8">
                <AboutTabs data={tabs}/>
                </div>
            </div>
            </motion.div>
        </div>
    </div>  
    );
}
