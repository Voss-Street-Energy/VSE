import { useState } from 'react';
import { Menu, X, Send } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-8 md:px-16 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/dd1d1de7f74895633a19462d472245a0b928791a?width=312" 
              alt="Voss Street Energy" 
              className="h-16 md:h-20"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-black text-[15px] font-normal hover:text-vse-orange transition">Home</a>
            <a href="#services" className="text-black text-[16px] font-normal hover:text-vse-orange transition">Services</a>
             <a href="#testimonials" className="text-black text-[16px] font-normal hover:text-vse-orange transition">Testimonials</a>
            <a href="#about" className="text-black text-[16px] font-normal hover:text-vse-orange transition">About us</a>
            <a href="#contact" className="text-black text-[16px] font-normal hover:text-vse-orange transition">Contact us</a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="flex items-center gap-2 bg-white/40 hover:bg-white/60 backdrop-blur-sm text-vse-blue px-10 py-4 rounded-full transition text-[20px]">
              Contact us
              <Send size={20} className="stroke-vse-blue" strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4 bg-white rounded-lg p-4">
            <a href="#home" className="block py-3 text-black hover:text-vse-orange">Home</a>
            <a href="#services" className="block py-3 text-black hover:text-vse-orange">Services</a>
            <a href="#about" className="block py-3 text-black hover:text-vse-orange">About us</a>
            <a href="#contact" className="block py-3 text-black hover:text-vse-orange">Testimonials</a>
            <a href="#contact" className="block py-3 text-black hover:text-vse-orange">Contact us</a>
            <button className="w-full mt-4 flex items-center justify-center gap-2 bg-white/40 text-vse-blue px-8 py-3 rounded-full">
              Contact us <Send size={18} />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
