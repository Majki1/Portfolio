'use client';
import { useMantineColorScheme, useComputedColorScheme, Space, } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';



export default function Hero() {

    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });


    return (
        <>
        <Space h='xl'/>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-1 lg:col-span-7'>
            <h1 className={`px-12 ${computedColorScheme === 'dark' ? 'text-white' : 'text-black'} mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-950 via-[#AF00A9] to-[#C900C2]">
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
            <p className="text-2xl text-slate-400 px-12">I am a frontend developer with a focus on React and Next14 with knowledge of mobile development in React Native</p>
            <div className='mt-6 px-12 py-8'>
                <Link href='/'>
                <button className={`bg-gradient-to-r relative overflow-hidden ${computedColorScheme === 'dark' ? 'from-purple-950 to-[#C900C2]' : 'from-blue-900 to-sky-500'} hover:bg-gradient-to-br text-white text-lg font-extrabold px-6 py-3 rounded-full`}>Contact me</button>
                </Link>
                <Link
              href="/"
              className={`mx-12 px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br ${computedColorScheme === 'dark' ? 'from-purple-950 to-[#C900C2] text-white' : 'from-blue-900 to-sky-500 text-black'} mt-3`}
            >
              <span className={`block ${computedColorScheme === 'dark' ?  'bg-[#121212] hover:bg-[#C900C2]' : 'bg-white hover:bg-sky-500 text-black' } rounded-full px-5 py-2 text-lg font-extrabold`}>
                Download CV
              </span>
            </Link>
            </div>
            </div>
            <div className='col-span-1 lg:col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='bg-gray-400 rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image src='/images/avatar1.png' width={300} height={300} alt='Hero image' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/>
                </div>
            </div>
        </div>
        </>
    );
}
