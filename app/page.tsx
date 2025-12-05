
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Education from '../components/Education';
import { getRepoCount } from '@/lib/github';

export default async function Home() {
  const projectCount = await getRepoCount();

  return (
    <main>
      <Hero />
      <About projectCount={projectCount} />
      <Skills />
      <Projects />
      <Timeline />
      <Education />
      <Contact />
    </main>
  );
}
