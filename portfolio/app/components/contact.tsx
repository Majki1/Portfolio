'use client';
import { TextInput, Textarea, useComputedColorScheme } from '@mantine/core';
import { IconAt, IconPencil, IconMessage, IconBrandGithub, IconBrandLinkedin} from '@tabler/icons-react';
import { comma } from 'postcss/lib/list';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const colorScheme = useComputedColorScheme();
    const iconemail = <IconAt size={20} />;
    const subjectIcon = <IconPencil size={20} />;
    const messageIcon = <IconMessage size={20} />;
    return (
        <div className="grid grid-cols-2 gap-4 mx-12 py-24" id='contact'>
            <div className='col-span-1 mx-24'>
                <h2 className="text-2xl font-bold">Contact me</h2>
                <p className={`text-lg font-bold ${colorScheme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    Feel free to contact me for any questions or job opportunities.
                </p>
                <div className="flex mt-4">
                    <Link href="https://github.com/Majki1" className="mr-4">
                        <IconBrandGithub size={32} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/marin-mikulec-26b0a829b/">
                        <IconBrandLinkedin size={32} />
                    </Link>
                </div>
            </div>
            <div className={`col-span-1 mx-24 ${colorScheme === 'dark' ? 'text-slate-400' : 'text-black'}`} >
                <TextInput
                    className={`mb-4`}
                    classNames={{ input: colorScheme === 'dark' ? 'text-slate-400' : 'text-black' }}
                    name='email'
                    leftSectionPointerEvents="none"
                    leftSection={iconemail}
                    label="Your email"
                    placeholder="Your email"
                    required
                    onChange={(event) => { setEmail(event.currentTarget.value); }}
                />
                 <TextInput
                    className={`mb-4`}
                    classNames={{ input: colorScheme === 'dark' ? 'text-slate-400' : 'text-black' }}
                    name='subject'
                    leftSectionPointerEvents="none"
                    leftSection={subjectIcon}
                    label="Subject"
                    placeholder="What can I hepl you with?"
                    required
                    onChange={(event) => { setSubject(event.currentTarget.value); }}
                />
                <Textarea
                    className={`mb-4`}
                    classNames={{ input: colorScheme === 'dark' ? 'text-slate-400' : 'text-black' }}
                    name='message'
                    label="Message"
                    placeholder="Please describe your request here."
                    leftSection={messageIcon}
                    required
                    onChange={(event) => { setMessage(event.currentTarget.value); }}
                />
                <button
                    className={`hover:scale-110 transform transition-all duration-300 text-white px-4 py-2 rounded-md mr-4 ${colorScheme === 'dark' ? 'bg-gradient-to-r from-purple-950 to-[#C900C2]' : 'bg-gradient-to-r from-blue-900 to-sky-500'}`}
                    onClick={() => { alert(`Email: ${email}\nSubject: ${subject}\nMessage: ${message}`); }}
                > Send </button>
            </div>
        </div>
    );
}