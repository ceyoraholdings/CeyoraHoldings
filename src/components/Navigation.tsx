import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from './logo.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', page: 'home' },
    { name: 'Services', page: 'services' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img 
              src={logo} 
              alt="Ceyora Holdings" 
              className="h-12 w-auto object-contain" 
            />
          </div>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10">
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  currentPage === link.page
                    ? 'text-slate-800'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                {link.name}
                {currentPage === link.page && (
                  <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-slate-800 animate-slideIn" />
                )}
              </button>
            ))}
          </div>

            <div className="z-10">
              <button
                className="md:hidden text-slate-800 p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t animate-fadeIn">
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === link.page
                    ? 'bg-slate-100 text-slate-800 font-medium'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}