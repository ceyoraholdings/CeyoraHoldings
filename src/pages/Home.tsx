import { ArrowRight, Globe, Users, Award } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: Globe,
      title: 'Island Wide Service',
      description: 'Travel without boundaries. We offer seamless pickup and drop-off services to any destination on the island, 24/7.',
    },
    {
      icon: Users,
      title: 'Friedndly And Proffecianal Drivers',
      description: 'Your safety is our priority. Our friendly, English-speaking drivers are highly experienced and dedicated to making your journey smooth and stress-free.',
    },
    {
      icon: Award,
      title: 'Premium Service',
      description: 'Travel in style with our fleet of luxury, fully air-conditioned vans. Featuring spacious seating and ample luggage room, we make every mile a pleasure.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,116,139,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 animate-fadeInUp">
            CEYORA
            <span className="block mt-2 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent tracking-widest">
              HOLDINGS
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Your Gateway to Sri Lanka – Premium Van Rentals & Tours.
          </p>
          <button
            onClick={() => onNavigate('services')}
            className="group inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-900 transition-all duration-300 hover:scale-105 animate-fadeInUp animation-delay-400"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Ceyora</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We bring years of expertise and passion to create unforgettable travel experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to plan your perfect fleet
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-900 transition-all duration-300 hover:scale-105"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
