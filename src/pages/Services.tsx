import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Star } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Tropical Paradise Tours',
    description: 'Immerse yourself in pristine beaches, crystal-clear waters, and lush tropical landscapes. Perfect for relaxation and adventure.',
    features: ['7-14 Day Packages', 'Luxury Resorts', 'Water Sports', 'Island Hopping'],
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Mountain Adventures',
    description: 'Conquer majestic peaks and explore breathtaking mountain trails with experienced guides and premium equipment.',
    features: ['Guided Treks', 'Safety Equipment', 'Base Camps', 'Photography Tours'],
    image: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Cultural Heritage Tours',
    description: 'Discover ancient civilizations, historical landmarks, and immerse yourself in rich cultural experiences.',
    features: ['Expert Historians', 'Authentic Cuisine', 'Local Experiences', 'Museum Access'],
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Wildlife Safaris',
    description: 'Experience the thrill of encountering exotic wildlife in their natural habitats with our expert safari guides.',
    features: ['Game Drives', 'Professional Guides', 'Luxury Lodges', 'Photography Ops'],
    image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Urban Exploration',
    description: 'Explore vibrant cities, experience world-class dining, and discover hidden gems in metropolises around the globe.',
    features: ['City Tours', 'Fine Dining', 'Shopping Experiences', 'Nightlife Access'],
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-4 animate-fadeInUp">
            Our Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Curated travel experiences designed to create lasting memories and unforgettable adventures
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {services.map((service) => (
                  <div key={service.id} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                      <div className="relative h-80 md:h-full rounded-2xl overflow-hidden group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                      </div>

                      <div className="flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 text-slate-600 mb-4">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">Premium Experience</span>
                        </div>

                        <h2 className="text-4xl font-bold text-slate-800 mb-4">
                          {service.title}
                        </h2>

                        <p className="text-lg text-slate-600 mb-6">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-8">
                          {service.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-slate-700"
                            >
                              <Star className="w-4 h-4 fill-slate-800 text-slate-800" />
                              <span className="text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <button className="group inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-900 transition-all duration-300 hover:scale-105 w-fit">
                          <Calendar className="w-4 h-4" />
                          Book This Experience
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-slate-800" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-slate-800" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-slate-800'
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 animate-fadeInUp">
              <div className="text-4xl font-bold text-slate-800 mb-2">150+</div>
              <div className="text-slate-600">Destinations</div>
            </div>
            <div className="p-6 animate-fadeInUp animation-delay-200">
              <div className="text-4xl font-bold text-slate-800 mb-2">10K+</div>
              <div className="text-slate-600">Happy Travelers</div>
            </div>
            <div className="p-6 animate-fadeInUp animation-delay-400">
              <div className="text-4xl font-bold text-slate-800 mb-2">25+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
