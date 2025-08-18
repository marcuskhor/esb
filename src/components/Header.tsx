
import { useState } from 'react';
import { Menu, X, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b-2 border-steel-blue sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-steel-blue p-2 rounded-lg">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text-primary">Eignretep Group</h1>
              <p className="text-sm text-slate-gray">Delivering Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="text-text-primary hover:text-steel-blue transition-colors font-medium">Home</Link>
            <Link to="/services" className="text-text-primary hover:text-steel-blue transition-colors font-medium">Services</Link>
            <Link to="/about" className="text-text-primary hover:text-steel-blue transition-colors font-medium">About</Link>
            <a href="#tracking" className="text-text-primary hover:text-steel-blue transition-colors font-medium">Tracking</a>
            <a href="#contact" className="text-text-primary hover:text-steel-blue transition-colors font-medium">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-orange-accent hover:bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-text-primary hover:text-steel-blue transition-colors font-medium">Home</Link>
              <Link to="/services" className="text-text-primary hover:text-steel-blue transition-colors font-medium">Services</Link>
              <Link to="/about" className="text-text-primary hover:text-steel-blue transition-colors font-medium">About</Link>
              <a href="#tracking" className="text-text-primary hover:text-steel-blue transition-colors font-medium">Tracking</a>
              <a href="#contact" className="text-text-primary hover:text-steel-blue transition-colors font-medium">Contact</a>
              <button className="bg-orange-accent hover:bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors mt-4 w-full">
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
