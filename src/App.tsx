import { useLenis } from '@/hooks/useLenis';
import IntroScreen from '@/components/ui/IntroScreen';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Journey from '@/components/sections/Journey';
// Unused sections kept in codebase for reference:
// import About from '@/components/sections/About';
// import Work from '@/components/sections/Work';
// import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Statement from '@/components/sections/Statement';
import Contact from '@/components/sections/Contact';
import ParticleField from '@/three/scenes/ParticleField';
import Cursor from '@/components/ui/Cursor';

export default function App() {
  useLenis();

  return (
    <div className="relative min-h-screen bg-bg text-fg overflow-x-hidden">
      {/* Cinematic Intro Screen */}
      <IntroScreen />
      {/* Background ambient particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleField />
      </div>

      {/* Custom smooth trailing cursor */}
      <Cursor />

      {/* Floating editorial navigation */}
      <Navbar />

      {/* Main page content sections */}
      <main className="relative z-10">
        <Hero />
        <Journey />
        <Skills />
        <Statement />
        <Contact />
      </main>

      {/* Minimal footer */}
      <Footer />
    </div>
  );
}
