import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 px-6 bg-[#1a1410] text-[#e8dfd0]">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl mb-4 text-[#c9a962]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.contact.title}
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6" />
          <p className="text-[#e8dfd0]/80 text-sm md:text-base tracking-wide max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left column - Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <MapPin className="w-5 h-5 text-[#c9a962]" />
              </div>
              <div>
                <h3
                  className="text-xl mb-2 text-[#c9a962]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {t.contact.locationTitle}
                </h3>
                <a
                  href="https://maps.app.goo.gl/qmaPxhHHp1DovwMN8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e8dfd0]/90 hover:text-[#c9a962] transition-colors duration-300 leading-relaxed whitespace-pre-line block"
                >
                  {t.contact.location}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <Phone className="w-5 h-5 text-[#c9a962]" />
              </div>
              <div>
                <h3
                  className="text-xl mb-2 text-[#c9a962]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {t.contact.phoneTitle}
                </h3>
                <p className="text-[#e8dfd0]/90">{t.contact.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <Mail className="w-5 h-5 text-[#c9a962]" />
              </div>
              <div>
                <h3
                  className="text-xl mb-2 text-[#c9a962]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {t.contact.emailTitle}
                </h3>
                <p className="text-[#e8dfd0]/90">{t.contact.email}</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6 border-t border-[#c9a962]/20">
              <h3
                className="text-xl mb-4 text-[#c9a962]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Follow Us
              </h3>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/luljaluxury/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c9a962]/10 hover:bg-[#c9a962]/20 border border-[#c9a962]/30 hover:border-[#c9a962] transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#c9a962] group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.facebook.com/p/Lulja-Luxury-100054605942414/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c9a962]/10 hover:bg-[#c9a962]/20 border border-[#c9a962]/30 hover:border-[#c9a962] transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-[#c9a962] group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.tiktok.com/discover/lulja-luxury"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c9a962]/10 hover:bg-[#c9a962]/20 border border-[#c9a962]/30 hover:border-[#c9a962] transition-all duration-300 group"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-5 h-5 text-[#c9a962] group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Opening hours */}
            <div className="pt-6 border-t border-[#c9a962]/20">
              <h3
                className="text-xl mb-4 text-[#c9a962]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {t.contact.privateEvents}
              </h3>
              <p className="text-[#e8dfd0]/80 text-sm leading-relaxed">
                {t.contact.privateEventsDescription}
              </p>
            </div>
          </motion.div>

          {/* Right column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] md:h-full min-h-[400px] overflow-hidden group"
          >
            {/* Google Maps embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.5!2d21.640063!3d42.161557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDA5JzQxLjYiTiAyMcKwMzgnMjQuMiJF!5e0!3m2!1sen!2s!4v1705680000000!5m2!1sen!2s"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: 'grayscale(20%) opacity(0.85)' }}
            />
            
            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-[#c9a962] pointer-events-none transition-all duration-500 group-hover:w-16 group-hover:h-16" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-[#c9a962] pointer-events-none transition-all duration-500 group-hover:w-16 group-hover:h-16" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}