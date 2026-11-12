import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ImageCarousel({
  images,
  autoPlayInterval = 5000,
  imageAlt = 'Project preview',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full bg-slate-900">
      <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: '16/9', contain: 'layout style paint' }}>
        <img
          src={images[currentIndex]}
          alt={`${imageAlt}, slide ${currentIndex + 1}`}
          className="h-full w-full object-cover transition-opacity duration-300"
          style={{ willChange: 'opacity' }}
        />

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-6 bg-amber-400' : 'w-2 bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
