import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed top-0 left-0 right-0 w-full z-40 px-6 sm:px-8 md:px-16 py-5 md:py-6 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-bg/70 border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand identity */}
        <a href="#" className="hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="inline-block w-2.5 h-2.5 rotate-45 bg-accent" aria-hidden="true" />
            <span className="text-label">SALAH_14</span>
          </div>
        </a>

        {/* Right: Editorial Nav Links */}
        <nav className="flex items-center gap-3 font-sans text-[13px] text-muted">
          <a href="#work" className="hidden md:inline link-underline hover:text-fg transition-colors">
            Work
          </a>
          <span className="hidden md:inline text-muted/40">·</span>
          <a href="#about" className="hidden md:inline link-underline hover:text-fg transition-colors">
            About
          </a>
          <span className="hidden md:inline text-muted/40">·</span>
          <a href="#contact" className="link-underline hover:text-fg transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
