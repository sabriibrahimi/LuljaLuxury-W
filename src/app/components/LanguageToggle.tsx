import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LanguageToggleProps {
  showOnMobile?: boolean;
}

export function LanguageToggle({ showOnMobile = true }: LanguageToggleProps) {
  const { language, toggleLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const isDesktopView = window.innerWidth >= 768;
      setIsDesktop(isDesktopView);

      // Always show on desktop (md and above)
      if (isDesktopView) {
        setIsVisible(true);
        return;
      }

      // On mobile: show only when Welcome Section is in view
      const welcomeSection = document.querySelector('section[class*="min-h-screen"]');
      if (welcomeSection) {
        const rect = welcomeSection.getBoundingClientRect();
        // Show toggle when Welcome Section is in view, hide when scrolled past
        setIsVisible(rect.bottom > 0);
      }
    };

    const handleScroll = () => checkVisibility();
    const handleResize = () => checkVisibility();

    checkVisibility(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Always show on desktop, conditional on mobile
  const shouldShow = isDesktop || isVisible;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleLanguage}
          className="fixed top-4 right-4 md:top-6 md:right-6 z-[9999] flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#c9a962]/10 backdrop-blur-sm border border-[#c9a962]/30 hover:border-[#c9a962] transition-all duration-300 group pointer-events-auto"
          aria-label="Toggle language"
        >
          <Languages className="w-5 h-5 md:w-6 md:h-6 text-[#c9a962] transition-transform duration-300 group-hover:rotate-180" />
          <span className="absolute bottom-0 right-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#c9a962] flex items-center justify-center text-white text-xs font-medium border-2 border-[#1a1410]">
            {language.toUpperCase()}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
