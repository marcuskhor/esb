
import { ArrowRight, Play } from 'lucide-react';
import heroBg from "@/assets/h1_hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-steel-blue via-blue-600 to-slate-gray min-h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Eignretep
              <span className="text-orange-accent"> Logistics</span>
              <br />
              Solutions
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
              Connecting your business to the world with reliable, efficient, and innovative logistics services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-orange-accent hover:bg-orange-500 text-text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-steel-blue px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-accent">500+</div>
                <div className="text-sm text-gray-200">Global Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-accent">24/7</div>
                <div className="text-sm text-gray-200">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-accent">99.9%</div>
                <div className="text-sm text-gray-200">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
