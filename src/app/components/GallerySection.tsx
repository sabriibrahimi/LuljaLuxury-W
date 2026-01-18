import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { VideoModal } from "./VideoModal";
import { Play } from "lucide-react";

const videos = [
  `${import.meta.env.BASE_URL}videos/1.mp4`,
  `${import.meta.env.BASE_URL}videos/2.mp4`,
  `${import.meta.env.BASE_URL}videos/3.mp4`,
];

const images = [
  `${import.meta.env.BASE_URL}images/1.jpg`,
  `${import.meta.env.BASE_URL}images/2.jpg`,
  `${import.meta.env.BASE_URL}images/3.jpg`,
  `${import.meta.env.BASE_URL}images/4.jpg`,
];

export function GallerySection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-32 px-6 bg-[#f5f0e8]">
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
            {t.gallery.title}
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6" />
          <p className="text-[#6b5f4f] text-sm md:text-base tracking-wide max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        {/* Videos Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {videos.map((video, index) => (
            <motion.div
              key={`video-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden relative">
                <video
                  src={video}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  playsInline
                />
                {/* Permanent dark overlay to make play button more visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/40 via-transparent to-[#1a1410]/20" />

                {/* VIDEO badge in top-right corner */}
                <div className="absolute top-3 right-3 bg-[#c9a962] text-white px-3 py-1 text-xs font-semibold tracking-wider rounded-full shadow-lg">
                  VIDEO
                </div>

                {/* Always visible play button with pulse animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Pulsing ring animation */}
                    <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#c9a962]/30 animate-ping" />
                    {/* Main play button */}
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#c9a962]/95 backdrop-blur-sm flex items-center justify-center border-2 border-white/50 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c9a962]">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>

                {/* Hover overlay for extra emphasis */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={`image-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: (videos.length + index) * 0.1, duration: 0.8, ease: "easeOut" }}
              className="relative overflow-hidden group"
            >
              <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          videoUrl={selectedVideo}
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
}
