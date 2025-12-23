import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Star } from 'lucide-react';

const services = [
  {
    id: 1,
    title: '24/7 Airport Transportation',
    description: 'Reliable pickup and drop-off services at Bandaranaike International Airport. We track your flight status to ensure your driver is waiting exactly when you land.',
    features: ['Meet & Greet at Arrivals', 'Flight Delay Monitoring', '24/7 Availability', 'Luggage Assistance'],
    image: 'https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg',
    whatsappMessage: 'Hi Ceyora Holdings! I would like to book an Airport Transfer. Could you please provide more details?'
  },
  {
    id: 2,
    title: 'Family & Group Travel',
    description: 'Spacious luxury vans perfect for family vacations and group outings across Sri Lanka. Our professional chauffeurs ensure a smooth journey.',
    features: ['9-14 Seater Luxury Vans', 'Experienced Chauffeurs', 'Flexible Daily Rates', 'Full Air-Conditioning'],
    image: 'https://images.pexels.com/photos/13391116/pexels-photo-13391116.jpeg',
    whatsappMessage: 'Hi Ceyora Holdings! I am interested in a van for a family/group trip. What are your daily rates?'
  },
  {
    id: 3,
    title: 'Corporate & Wedding Events',
    description: 'Professional transportation solutions for business delegations or wedding parties. We prioritize punctuality and premium presentation.',
    features: ['Uniformed Drivers', 'Punctual Service', 'Multiple Vehicle Booking', 'Custom Itineraries'],
    image: 'https://images.pexels.com/photos/19984917/pexels-photo-19984917.jpeg',
    whatsappMessage: 'Hi Ceyora Holdings! I would like to inquire about transportation for an upcoming event/wedding.'
  }
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

                        <button 
                          onClick={() => {
                            const phoneNumber = "94767393088"; // phone number
                            const message = encodeURIComponent(service.whatsappMessage);
                            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                            
                            window.open(whatsappUrl, '_blank');
                          }}
                          className="group inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-900 transition-all duration-300 hover:scale-105 w-fit"
                        >
                          <Calendar className="w-4 h-4" />
                          Book via WhatsApp
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

      {/* <section className="py-16 bg-white">
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
      </section> */}
    </div>
  );
}
