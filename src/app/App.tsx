import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { HeroEntry } from "@/app/components/HeroEntry";
import { MainWebsite } from "@/app/components/MainWebsite";
import { LanguageProvider } from "@/app/contexts/LanguageContext";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <AnimatePresence mode="wait">
          {!hasEntered ? (
            <HeroEntry key="entry" onEnter={handleEnter} />
          ) : (
            <MainWebsite key="main" />
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}
