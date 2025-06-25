
import { Truck, Ship, Plane, Package, Globe, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Ground Transportation",
      description: "Reliable truck and rail transportation services across continents with real-time tracking.",
      features: ["Door-to-door delivery", "Temperature controlled", "Express options"]
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Cost-effective sea freight solutions for large shipments with global port coverage.",
      features: ["Full container loads", "Less than container", "Port-to-port service"]
    },
    {
      icon: Plane,
      title: "Air Cargo",
      description: "Fast and secure air freight services for time-sensitive and high-value shipments.",
      features: ["Same-day delivery", "Priority handling", "Customs clearance"]
    },
    {
      icon: Package,
      title: "Warehousing",
      description: "Modern warehouse facilities with inventory management and distribution services.",
      features: ["Climate controlled", "24/7 security", "Inventory tracking"]
    },
    {
      icon: Globe,
      title: "International Trade",
      description: "Complete import/export solutions with customs brokerage and documentation.",
      features: ["Customs clearance", "Trade compliance", "Documentation"]
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Urgent delivery services with guaranteed time-definite delivery options.",
      features: ["Next-day delivery", "Same-day service", "Real-time updates"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Our <span className="text-steel-blue">Services</span>
          </h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your business needs with efficiency and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="bg-steel-blue/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-steel-blue group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-steel-blue group-hover:text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-4">{service.title}</h3>
                <p className="text-slate-gray mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-text-primary">
                      <div className="w-2 h-2 bg-orange-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 text-steel-blue font-semibold hover:text-orange-accent transition-colors">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
