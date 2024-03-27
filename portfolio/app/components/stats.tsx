'use client';
import { useMantineColorScheme, useComputedColorScheme, } from '@mantine/core';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => {return import('react-animated-numbers')}, { ssr: false });

export default function Stats() {
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    const stats = [
        { title: 'Projects', value: 3},
        { title: 'Clients', value: 0 },
        { title: 'Reviews', value: 0 },
        { title: 'Awards', value: 0 },
        { title: 'Years of experience', value: 1}
    ];

    return (
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="border border-zinc-700 rounded-lg py-8 px-17 flex flex-row items-center justify-between">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center justify-center mx-12">
                        <h2 className={`${computedColorScheme === 'dark' ? 'text-white' : 'text-black'} text-4xl font-bold`}>
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={stat.value}
                                locale='en-US'
                                transitions={(index) => ({
                                    type: "spring",
                                    duration: index + 1,
                                  })}
                            />
                        </h2>
                        <p className={`${computedColorScheme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`} text-base>{stat.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}