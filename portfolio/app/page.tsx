import { Space } from '@mantine/core';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Stats from './components/stats';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import { SP } from 'next/dist/shared/lib/utils';
import Footer from './components/footer';

export default function Home() {

  return (
    <>
    <Navbar />
    <Hero />
    <Space h="xl" />
    <Stats />
    <About />
    <Projects />
    <Space h="xl" />
    <Contact />
    <Footer />
    </>
  );
}
