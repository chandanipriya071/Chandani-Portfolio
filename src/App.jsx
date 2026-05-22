import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/SkillsSection';
import Projects from './components/Projects';
import EducationTimeline from './components/EducationTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumePage from './components/ResumePage';

export default function App() {
  return (
    <div className="relative overflow-x-hidden theme-page">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <EducationTimeline />
        <Projects />
        <ResumePage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}