'use client';
import { useMantineColorScheme, useComputedColorScheme, Space, } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


export default function Hero() {

    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });


    return (
        <>
        <Space h='xl'/>
        <div className='grid grid-cols-1 lg:grid-cols-12 py-16 px-6'>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='col-span-1 lg:col-span-7'>
            <div className='col-span-1 lg:col-span-7'>
            <h1 className={`px-12 ${computedColorScheme === 'dark' ? 'text-white' : 'text-black'} mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold`}>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${computedColorScheme === 'dark' ? 'from-purple-950 via-[#AF00A9] to-[#C900C2]' : 'from-blue-900 to-sky-500'}`}>
              Hello, I'm
            </span>
            <br></br>{
                    <TypeAnimation
                    sequence={[
                    'Marin',
                    2000,
                    'A Next.js developer',
                    2000,
                    'A React developer',
                    2000,
                    'A frontend developer',
                    2000,
                    ]}
                    wrapper='span'
                    className={`${computedColorScheme === 'dark' ? 'text-white' : 'text-black'}`}
                    style={{color: 'inherit'}}
                    speed={50}
                    repeat={Infinity}
                    />
            }
          </h1>
            <p className={`text-2xl ${computedColorScheme === 'dark' ? 'text-slate-400' : 'text-slate-600'} px-12`}>I am a frontend developer with a focus on React and Next14 with knowledge of mobile development in React Native</p>
            <Space h='xl'/>
            <div className='px-10 flex justify-start items-center gap-4 sm:gap-12'>
                <Link 
                href='#contact'
                className={`bg-gradient-to-r block w-full relative sm:w-fit overflow-hidden ${computedColorScheme === 'dark' ? 'from-purple-950 to-[#C900C2]' : 'from-blue-900 to-sky-500'} hover:bg-gradient-to-br text-white text-lg font-extrabold px-6 py-4 rounded-full`}
                >
                Contact me
                </Link>
                <a
                  href="/CV/DummyCV.docx"
                  download
                  className={`px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br ${computedColorScheme === 'dark' ? 'from-purple-950 to-[#C900C2] text-white' : 'from-blue-900 to-sky-500 text-black'} mt-3 mb-2 items-center`}
                >
                  <span className={`block ${computedColorScheme === 'dark' ?  'bg-[#121212] hover:bg-[#AD0098]' : 'bg-white hover:bg-sky-600 text-black' } rounded-full px-6 py-3 text-lg`}>
                    Download CV
                  </span>
                </a>
            </div>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='col-span-1 lg:col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='col-span-1 lg:col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='bg-gray-400 rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image src='/images/avatar1.png' width={300} height={300} alt='Hero image' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/>
                </div>
            </div>
          </motion.div>
        </div>
        </>
    );
}
