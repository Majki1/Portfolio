'use client';
import { useComputedColorScheme } from "@mantine/core";

export default function Footer() {
    const colorScheme = useComputedColorScheme();

    return (
        <footer className={`flex flex-col col-span-2 items-center justify-center py-8 border-t-2 border-opacity-60 ${colorScheme === 'dark' ? 'border-slate-400' : 'border-black'}`}>
            <div className="flex col-span-1 items-center justify-center">
                <p className="text-base font-bold">© 2024</p>
            </div>
            <div className="flex col-span-1 items-center justify-center">
                <p className="text-base font-bold">Made with <a href="https://www.framer.com/motion/" className={`${colorScheme === 'dark' ? 'text-fuchsia-600' : 'text-sky-500'}`}>Framer Motion</a> and <a className={`${colorScheme === 'dark' ? 'text-fuchsia-600' : 'text-sky-500'}`} href="https://mantine.dev">Mantine UI</a></p>
            </div>
        </footer>
    );
}