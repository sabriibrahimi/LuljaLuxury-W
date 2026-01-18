import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface MenuCardProps {
  title: string;
  description?: string;
  price?: string;
  courses?: string[];
  options?: { name: string; price: string }[];
  index: number;
}

function MenuCard({ title, description, price, courses, options, index }: MenuCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
      className="bg-white/80 backdrop-blur-sm border border-[#e8dfd0] p-8 md:p-10"
    >
      {/* Menu title */}
      <h3
        className="text-3xl md:text-4xl mb-4 text-[#1a1410]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-[#6b5f4f] text-sm md:text-base mb-6 leading-relaxed">
          {description}
        </p>
      )}

      {/* Single price */}
      {price && !options && (
        <div className="mt-6 pt-6 border-t border-[#e8dfd0]">
          <p className="text-[#c9a962] text-2xl tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {price}
          </p>
        </div>
      )}

      {/* Multiple options with different prices */}
      {options && (
        <div className="mt-6 space-y-4">
          {options.map((option, idx) => (
            <div
              key={idx}
              className="flex justify-between items-baseline border-b border-[#e8dfd0]/50 pb-3"
            >
              <span className="text-[#1a1410] text-base md:text-lg">{option.name}</span>
              <span className="text-[#c9a962] text-xl tracking-wider ml-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {option.price}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Course list */}
      {courses && (
        <div className="mt-6 space-y-3">
          {courses.map((course, idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-[#c9a962] mr-3 mt-1">•</span>
              <span className="text-[#6b5f4f] text-sm md:text-base leading-relaxed">{course}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export function MenuSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 md:py-32 px-6 bg-[#faf8f5]">
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
            className="text-4xl md:text-6xl mb-4 text-[#1a1410]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.menu.title}
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6" />
          <p className="text-[#6b5f4f] text-sm md:text-base tracking-wide max-w-2xl mx-auto">
            {t.menu.subtitle}
          </p>
        </motion.div>

        {/* Menu cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <MenuCard
            index={0}
            title={t.menu.menu1.title}
            price={t.menu.menu1.price}
          />

          <MenuCard
            index={1}
            title={t.menu.menu2.title}
            options={[
              { name: t.menu.menu2.option1.name, price: t.menu.menu2.option1.price },
              { name: t.menu.menu2.option2.name, price: t.menu.menu2.option2.price }
            ]}
          />

          <MenuCard
            index={2}
            title={t.menu.menu3.title}
            price={t.menu.menu3.price}
          />
        </div>
      </div>
    </section>
  );
}