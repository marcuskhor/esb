import { Plane, Ship, Truck, Globe, Shield, Package, Clock, MapPin, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import servicesLogistics from '../assets/services-logistics.jpg';
import servicesBuilding from '../assets/services-building.jpg';
import servicesTech from '../assets/services-tech.jpg';
import servicesProfessional from '../assets/services-professional.jpg';
import servicesHeroBg from '../assets/services-hero-bg-new.jpg';
import internationalForwardingBg from '../assets/international-forwarding-bg-new.jpg';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Total Logistics",
      description: "From warehousing and distribution, to consolidation and freight forwarding, EILSB understands that logistics may be a complicated process and that our customers want a worry-free experience when having their products and cargoes delivered.",
      features: ["End-to-end solutions", "Worry-free experience", "Complete cargo handling"],
      image: servicesLogistics
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "Flying daily to all major cities in Sabah, Sarawak, and Labuan, our express air freight service can ensure a speedy delivery of your goods to any destination in East Malaysia.",
      features: ["Daily flights", "Express delivery", "Major cities coverage"],
      image: servicesTech
    },
    {
      icon: Ship,
      title: "Sea Freight",
      description: "EILSB offers both Less than Container Load (LCL) and Full Container Load (FCL) services to Sabah, Sarawak, and Labuan. We sail weekly, making it easier to plan and manage your supply chain.",
      features: ["LCL & FCL services", "Weekly sailing", "Supply chain planning"],
      image: servicesBuilding
    },
    {
      icon: Globe,
      title: "International Forwarding",
      description: "Complete import and export solutions with customs brokerage, duties payment, and haulage services. Working with global partners to ensure smooth cargo delivery worldwide.",
      features: ["Import/Export services", "Customs brokerage", "Global partnerships"],
      image: servicesProfessional
    }
  ];

  const insuranceServices = [
    {
      icon: Shield,
      title: "Cargo Insurance",
      description: "A broader form of insurance that covers goods being transported by any form of transportation, i.e., land, sea, and air. It protects the owner of the goods against losses or damages during transportation."
    },
    {
      icon: Star,
      title: "Maritime Insurance",
      description: "This form of insurance specifically covers losses or damages incurred during maritime transportation, e.g., sea, lake, or river. Similar to cargo insurance, it protects goods during transportation."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${servicesHeroBg})` }}
          ></div>
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
                Comprehensive logistics solutions designed to streamline your supply chain and deliver excellence at every step
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                Core <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From domestic to international logistics, we provide end-to-end solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-border/50">
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors duration-300"></div>
                      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-6 border-t border-border/30">
                        <button className="text-primary font-semibold hover:text-accent transition-colors group-hover:translate-x-2 transform duration-300 flex items-center">
                          Learn More 
                          <Clock className="h-4 w-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* International Forwarding Details */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5 relative">
          <div 
            className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${internationalForwardingBg})` }}
          ></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                International <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Forwarding</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Shipment to Malaysia</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    EILSB can handle your shipment from its port of departure all the way to its delivery to your desired destination. Once your shipment reaches Malaysia, we will also settle everything from pick-up to delivery, including customs brokerage, payment of duties, and haulage.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Shipment from Malaysia</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Considering exporting your goods from Malaysia? EILSB can solve all your logistical queries. Working with our partners from all around the globe, we can ensure that your cargo smoothly arrives at its destination. Our Pick-Up and Customs Declaration teams will ensure everything is settled.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-6">Global Coverage</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                      <span className="text-lg">Hubs in Klang Valley</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                      <span className="text-lg">Major cities across Sabah</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                      <span className="text-lg">Extensive Sarawak network</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                      <span className="text-lg">Labuan coverage</span>
                    </div>
                  </div>
                  <p className="mt-6 text-blue-100 text-lg italic">
                    Your goods of any size can be delivered anytime, anywhere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                Insurance <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                EILSB provides financial protection against loss or damage to your goods by helping you integrate and arrange customised insurance from our panel of reputable insurers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {insuranceServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 group">
                    <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    
                    <div className="mt-6 pt-6 border-t border-border/30">
                      <button className="text-primary font-semibold hover:text-accent transition-colors">
                        Get Protected →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Logistics Journey?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let us handle the complexity while you focus on growing your business. Get a personalized quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg shadow-lg">
                Get Quote Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;