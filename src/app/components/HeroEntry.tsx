import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

interface HeroEntryProps {
  onEnter: () => void;
}

export function HeroEntry({ onEnter }: HeroEntryProps) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center bg-[#f5f0e8] overflow-hidden"
    >
      <LanguageToggle />
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5] via-[#f5f0e8] to-[#e8dfd0]" />
      
      {/* Soft decorative background image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="figma:asset/96e38fb3b3382ae63470bee6607dc347730511e8.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center px-6 text-center"
      >
        {/* Restaurant name */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.05em" }}
          animate={{ opacity: 1, letterSpacing: "0.15em" }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl text-[#c9a962] mb-6 font-light tracking-[0.15em]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          LULJA LUXURY
        </motion.h1>

        {/* Poetic line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="text-[#6b5f4f] text-sm md:text-base tracking-[0.3em] uppercase mb-3 font-light"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {t.hero.tagline}
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "120px", opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mb-12"
        />

        {/* Enter button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, borderColor: "#c9a962" }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="group relative px-12 py-4 border border-[#c9a962]/40 text-[#6b5f4f] tracking-[0.2em] uppercase text-sm transition-all duration-500 hover:border-[#c9a962] hover:text-[#c9a962] overflow-hidden"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {/* Button background effect */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c9a962]/10 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative z-10">{t.hero.enterButton}</span>
        </motion.button>
      </motion.div>

      {/* Subtle corner ornaments */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#c9a962]/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-[#c9a962]/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-[#c9a962]/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#c9a962]/30" />
    </motion.div>
  );
}