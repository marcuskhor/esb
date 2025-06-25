
import { Truck, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-steel-blue p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">GlobalLogistics</h3>
                <p className="text-sm text-gray-400">Delivering Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for global logistics solutions. We connect your business to the world with reliability and efficiency.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-steel-blue cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-steel-blue cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-steel-blue cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-steel-blue cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-accent">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ground Transportation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ocean Freight</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Air Cargo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Warehousing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Express Delivery</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-accent">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Track Shipment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Get Quote</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-accent">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for logistics insights and updates.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-steel-blue focus:border-transparent"
              />
              <button className="w-full bg-orange-accent hover:bg-orange-500 text-white py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 GlobalLogistics. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
