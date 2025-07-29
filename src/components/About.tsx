
import { CheckCircle, Users, Award, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "25+", label: "Years Experience", icon: Award },
    { number: "10M+", label: "Packages Delivered", icon: CheckCircle },
    { number: "50+", label: "Countries Served", icon: Users },
    { number: "98%", label: "Customer Satisfaction", icon: Zap }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              About <span className="text-steel-blue">Eignretep Group</span>
            </h2>
            <p className="text-xl text-slate-gray mb-8 leading-relaxed">
              For over 25 years, we've been at the forefront of the logistics industry, providing innovative solutions that connect businesses to global markets. Our commitment to excellence and customer satisfaction has made us a trusted partner for companies worldwide.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-primary">Global Network</h4>
                  <p className="text-slate-gray">Extensive network spanning across 50+ countries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-primary">Technology Driven</h4>
                  <p className="text-slate-gray">Advanced tracking and management systems</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-primary">Sustainable Practices</h4>
                  <p className="text-slate-gray">Committed to environmental responsibility</p>
                </div>
              </div>
            </div>

            <button className="bg-steel-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center bg-gray-50 rounded-xl p-8 hover:bg-steel-blue hover:text-white transition-all duration-300 group">
                  <IconComponent className="h-12 w-12 text-orange-accent group-hover:text-white mx-auto mb-4" />
                  <div className="text-4xl font-bold text-text-primary group-hover:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-gray group-hover:text-gray-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
