import { Menu, X } from 'lucide-react';
import { useState } from 'react';

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
        <div className="flex justify-between items-center h-20">
          <div
            className="text-2xl font-bold text-slate-800 cursor-pointer tracking-tight"
            onClick={() => onNavigate('home')}
          >
            CEYORA HOLDINGS
          </div>

          <div className="hidden md:flex space-x-8">
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

          <button
            className="md:hidden text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
