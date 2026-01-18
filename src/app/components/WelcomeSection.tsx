import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function WelcomeSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1a1410]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1767986012154-db9a321c8832?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudHxlbnwxfHx8fDE3Njg1NzMwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury wedding reception"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/60 via-[#1a1410]/40 to-[#1a1410]/80" />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6 py-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl mb-8 text-[#c9a962]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.welcome.title}
          </h2>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-8" />

          <p className="text-[#e8dfd0] text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            {t.welcome.description1}
          </p>

          <p className="text-[#e8dfd0]/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t.welcome.description2}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}