import { memo, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const MemoHeroSection = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  useEffect(() => {
    if (emblaApi) {
      autoplay.current.play();
    }
  }, [emblaApi]);

  const images = [
    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1677045419454-e8b201856472?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
    <div className="relative h-screen">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex items-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="mb-6 font-serif text-5xl font-bold leading-tight xl:mt-64 md:text-7xl">
            Timeless Elegance, <span className="text-primary">Eternal Beauty</span>
          </h1>
          <p className="mb-8 text-xl font-light md:text-2xl">
            Discover our exclusive collection of handcrafted fine jewelry
          </p>
          <a
            href="#new-arrivals"
            className="inline-flex items-center px-8 py-4 text-lg font-medium transition-colors duration-300 border-2 rounded-none border-primary text-primary hover:bg-primary hover:text-secondary"
          >
            Explore Collection
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

const HeroSection = memo(MemoHeroSection);
export default HeroSection;