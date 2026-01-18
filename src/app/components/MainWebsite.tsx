import { motion } from "motion/react";
import { WelcomeSection } from "./WelcomeSection";
import { MenuSection } from "./MenuSection";
import { GallerySection } from "./GallerySection";
import { ContactSection } from "./ContactSection";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "../contexts/LanguageContext";

export function MainWebsite() {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full"
    >
      {/* Smooth scroll container */}
      <div className="relative">
        <LanguageToggle showOnMobile={true} />
        <WelcomeSection />
        <GallerySection />
        <MenuSection />
        <ContactSection />

        {/* Footer */}
        <footer className="bg-[#1a1410] border-t border-[#c9a962]/10 py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-3xl md:text-4xl mb-4 text-[#c9a962]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                LULJA LUXURY
              </h3>
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6" />
              <p className="text-[#e8dfd0]/60 text-xs tracking-[0.2em] uppercase mb-8">
                {t.footer.tagline}
              </p>
              <p className="text-[#e8dfd0]/40 text-xs">
                © {new Date().getFullYear()} {t.footer.copyright}
              </p>
            </motion.div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}