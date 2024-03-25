'use client';
import { useMantineColorScheme, useComputedColorScheme, ActionIcon, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconSun, IconMoon, IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';


export default function Navbar() {
    const device = useMediaQuery('(max-width: 768px)');
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });


    return (
        <div className={`flex flex-row items-center justify-between p-4 py-3 ${computedColorScheme === 'light' ? 'bg-white border-b-2 border-black border-opacity-50' : 'bg-[#121212] border-b-2 border-black border-opacity-50'}`}>
            <Link href='/'>
            <span className={`m-3 mt-2 font-bold text-4xl text-transparent bg-clip-text ${computedColorScheme === 'light' ? 'bg-black' : 'bg-white'} ${computedColorScheme === 'dark' ? 'hover:bg-gradient-to-r from-purple-950 to-[#C900C2]' : 'hover:bg-gradient-to-r from-blue-900 to-sky-500'}`}>Portfolio</span>
            </Link>
            {!device ? (
            <div className='flex flex-row items-center justify-between'>
            <div className="flex flex-row items-center justify-between">
            <a href="#" className={`m-3 mt-4 border-b-4 border-transparent rounded-sm ${computedColorScheme === 'light' ? 'hover:border-b-4 hover:border-sky-500' : 'hover:border-b-4 hover:border-[#C900C2]'}`}>About</a>
            <a href="#" className={`m-3 mt-4 border-b-4 border-transparent rounded-sm ${computedColorScheme === 'light' ? 'hover:border-b-4 hover:border-sky-500' : 'hover:border-b-4 hover:border-[#C900C2]'}`}>Projects</a>
            <a href="#" className={`m-3 mt-4 border-b-4 border-transparent rounded-sm ${computedColorScheme === 'light' ? 'hover:border-b-4 hover:border-sky-500' : 'hover:border-b-4 hover:border-[#C900C2]'}`}>Contact</a>
            </div>
            <ActionIcon variant='transparent' className='m-3 mt-2' onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>{computedColorScheme === 'light' ? <IconSun color='black'/> : <IconMoon color='white'/>}</ActionIcon>
            </div>
            ) : (
                <ActionIcon variant='transparent' className='m-3 mt-2'><IconMenu2 color={`${computedColorScheme === 'light' ? 'black' : 'white'}`}/></ActionIcon>
            )}
        </div>
    );
}