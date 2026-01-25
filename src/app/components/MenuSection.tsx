import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface MenuCardProps {
  title: string;
  description?: string;
  price?: string;
  courses?: string[];
  options?: { name: string; price: string }[];
  ingredients?: string;
  image?: string;
  index: number;
  className?: string;
}

function MenuCard({ title, description, price, courses, options, ingredients, image, index, className = "" }: MenuCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
      className={`bg-white/80 backdrop-blur-sm border border-[#e8dfd0] p-8 md:p-10 hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {/* Function to toggle details */}
      <div
        className="cursor-pointer"
        onClick={() => setShowIngredients(!showIngredients)}
      >
        {/* Placeholder for Photo */}
        <div className="w-full h-48 bg-[#f5f0e8] mb-6 flex items-center justify-center border border-[#e8dfd0]">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-[#c9a962]/40 text-sm tracking-widest uppercase font-light">
              Photo
            </span>
          )}
        </div>

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
      </div>

      {/* Expandable Ingredients Section */}
      <AnimatePresence>
        {showIngredients && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-6 pt-6 border-t border-[#e8dfd0] bg-[#faf8f5]/50 -mx-8 px-8 md:-mx-10 md:px-10 pb-4"
          >
            <h4 className="text-[#c9a962] text-sm tracking-[0.2em] uppercase mb-3 font-light">
              Ingredients
            </h4>
            <p className="text-[#6b5f4f] text-sm leading-relaxed italic">
              {ingredients}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint to click */}
      {!showIngredients && (
        <div className="mt-4 text-center">
          <span className="text-[#c9a962]/60 text-xs tracking-widest uppercase hover:text-[#c9a962] transition-colors cursor-pointer" onClick={() => setShowIngredients(true)}>
            View Ingredients
          </span>
        </div>
      )}
    </motion.div>
  );
}

export function MenuSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "luxurymenu") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPasswordInput("");
    }
  };

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

        {/* Password Protection Gate */}
        {!isAuthenticated ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-md mx-auto bg-white p-10 border border-[#e8dfd0] text-center shadow-sm"
          >
            <p className="text-[#6b5f4f] mb-8 font-light tracking-wide">
              Please enter the password to view our exclusive menu selection.
            </p>
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Password"
                className="w-full bg-[#faf8f5] border border-[#e8dfd0] px-4 py-3 text-center text-[#1a1410] focus:outline-none focus:border-[#c9a962] transition-colors"
              />
              {error && (
                <p className="text-red-400 text-xs tracking-wide">Incorrect password. Please try again.</p>
              )}
              <button
                type="submit"
                className="w-full bg-[#1a1410] text-[#c9a962] py-3 px-6 tracking-[0.2em] uppercase text-sm hover:bg-[#c9a962] hover:text-[#1a1410] transition-colors duration-300"
              >
                Unlock Menu
              </button>
            </form>
          </motion.div>
        ) : (
          /* Menu cards grid */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            <MenuCard
              index={0}
              title={t.menu.menu1.title}
              price={t.menu.menu1.price}
              ingredients={t.menu.menu1.ingredients}
              image={t.menu.menu1.image}
            />

            <MenuCard
              index={1}
              title={t.menu.menu2.title}
              options={[
                { name: t.menu.menu2.option1.name, price: t.menu.menu2.option1.price },
                { name: t.menu.menu2.option2.name, price: t.menu.menu2.option2.price }
              ]}
              ingredients={t.menu.menu2.ingredients}
              image={t.menu.menu2.image}
            />

            <MenuCard
              index={2}
              title={t.menu.menu3.title}
              price={t.menu.menu3.price}
              ingredients={t.menu.menu3.ingredients}
              image={t.menu.menu3.image}
              className="md:col-span-2 mx-auto w-full max-w-2xl"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}