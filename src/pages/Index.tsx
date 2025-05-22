
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Navigation } from '../components/Navigation';
import { ThemeToggle } from '../components/ThemeToggle';
import { ScrollToTop } from '../components/ScrollToTop';
import { LoadingScreen } from '../components/LoadingScreen';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Achievements } from '../components/Achievements';
import { Resume } from '../components/Resume';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { BackgroundAnimation } from '../components/BackgroundAnimation';

const Index = () => {
  return (
    <>
      <LoadingScreen />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white overflow-x-hidden">
        {/* Fixed Background Animation */}
        <div className="fixed inset-0 z-0">
          <BackgroundAnimation />
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Scroll to Top */}
        <ScrollToTop />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Resume />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
