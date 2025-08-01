import { CheckCircle, Award, Globe, Truck, Warehouse, Shield, Building2, Users, Calendar, Target, Heart, ArrowRight, Star, Zap, Eye, Compass } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomMalaysiaMap from '../components/CustomMalaysiaMap';
import aboutTech from '@/assets/about-tech.jpg';
import aboutShipping from '@/assets/about-shipping.jpg';
import aboutTeam from '@/assets/about-team.jpg';
import aboutLandscape from '@/assets/about-landscape.jpg';

const About = () => {
  const achievements = [
    { number: "40+", label: "Years of Excellence", icon: Calendar },
    { number: "800K+", label: "Sq. Ft. Warehouse Space", icon: Warehouse },
    { number: "11", label: "Strategic Locations", icon: Building2 },
    { number: "100%", label: "Customer Satisfaction", icon: Heart }
  ];

  const services = [
    { 
      icon: Truck, 
      title: "Domestic Freight Consolidation", 
      desc: "Specialized in East Malaysia trade lanes with seamless nationwide coverage",
      highlight: "Leading in East Malaysia"
    },
    { 
      icon: Globe, 
      title: "International Freight", 
      desc: "Comprehensive sea and air freight solutions connecting Malaysia to the world",
      highlight: "Global Connectivity"
    },
    { 
      icon: Warehouse, 
      title: "Advanced Warehousing", 
      desc: "800,000+ sq. ft. with bonded, temperature-controlled, and cross-docking facilities",
      highlight: "Smart Storage Solutions"
    },
    { 
      icon: Shield, 
      title: "Customs & Project Logistics", 
      desc: "Expert brokerage services and specialized project cargo handling",
      highlight: "Compliance Excellence"
    }
  ];

  const coreValues = [
    {
      icon: Zap,
      title: "Efficient",
      description: "Streamlined operations and optimized processes for maximum productivity",
      color: "steel-blue"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Industry-leading security measures ensuring safe cargo handling",
      color: "orange-accent"
    },
    {
      icon: Award,
      title: "Best Value",
      description: "Premium service quality at competitive rates with measurable ROI",
      color: "steel-blue"
    }
  ];

  const industries = [
    "Electronics", "FMCG", "Energy", "Infrastructure", "Automotive", "Healthcare"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-steel-blue via-steel-blue/90 to-slate-gray py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutLandscape} 
            alt="Malaysia logistics landscape" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-steel-blue/80 to-slate-gray/70"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-orange-accent/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Star className="h-5 w-5 text-orange-accent mr-2" />
              <span className="text-white font-medium">Leading Logistics Provider Since 1984</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block">Eignretep Group</span>
              <span className="text-orange-accent">(ESB)</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Malaysia's trusted total logistics service provider, delivering seamless, secure, 
              and efficient supply chain solutions across domestic and international markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-accent hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Discover Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                View Our Facilities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Heritage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={aboutShipping} 
                alt="ESB logistics operations" 
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-accent to-orange-500 rounded-2xl p-6 shadow-xl">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">1984</div>
                  <div className="text-sm">Founded</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center bg-steel-blue/10 rounded-full px-4 py-2 mb-6">
                <Building2 className="h-5 w-5 text-steel-blue mr-2" />
                <span className="text-steel-blue font-semibold">Our Heritage</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-8 leading-tight">
                Four Decades of 
                <span className="text-steel-blue"> Excellence</span>
              </h2>
              
              <p className="text-lg text-slate-gray mb-6 leading-relaxed">
                Founded in 1984 by <strong className="text-steel-blue">Datuk Seri Peter Lau Hui Ngie</strong>, 
                Eignretep Group of Companies has evolved from a vision into Malaysia's most trusted logistics partner.
              </p>
              
              <p className="text-lg text-slate-gray mb-8 leading-relaxed">
                With a strong presence across 11 major cities in West and East Malaysia, we've built our 
                reputation on delivering integrated logistics solutions that empower businesses to scale 
                confidently through reliable partnerships.
              </p>
              
              <div className="bg-gradient-to-r from-orange-accent/10 to-steel-blue/10 border-l-4 border-orange-accent p-6 rounded-r-xl">
                <blockquote className="text-lg font-medium text-steel-blue italic">
                  "At ESB, your success is our priority — whether you're a multinational, SME, or a local enterprise, 
                  we serve you with the same passion and precision."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-br from-steel-blue to-slate-gray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-orange-accent" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-gray-200 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Our <span className="text-steel-blue">Core Values</span>
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Driven by our commitment to excellence, we live by three fundamental principles that guide every decision and action.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${value.color}/20 to-${value.color}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 text-${value.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-4">{value.title}</h3>
                    <p className="text-slate-gray leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Comprehensive <span className="text-orange-accent">Logistics Solutions</span>
            </h2>
            <p className="text-xl text-slate-gray max-w-4xl mx-auto">
              We specialize in domestic freight consolidation—particularly in the East Malaysia trade lanes—and offer 
              integrated services across the entire logistics spectrum.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-steel-blue/20 to-steel-blue/10 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-steel-blue" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-text-primary">{service.title}</h3>
                          <span className="text-xs bg-orange-accent/10 text-orange-accent px-3 py-1 rounded-full font-medium">
                            {service.highlight}
                          </span>
                        </div>
                        <p className="text-slate-gray leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technology & Industries */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={aboutTech} 
                alt="Advanced WMS and FMS systems" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-blue/90 to-steel-blue/30 flex items-end">
                <div className="text-white p-8">
                  <h4 className="text-2xl font-bold mb-3">Advanced Technology</h4>
                  <p className="text-white/90 leading-relaxed">
                    Our in-house Warehouse Management (WMS) and Freight Management (FMS) systems enable 
                    real-time tracking, customized logistics planning, and seamless client integration.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={aboutTeam} 
                alt="Industries served by ESB" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-accent/90 to-orange-accent/30 flex items-end">
                <div className="text-white p-8">
                  <h4 className="text-2xl font-bold mb-3">Industries We Serve</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {industries.map((industry, index) => (
                      <span key={index} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {industry}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/90 text-sm">
                    Specialized services including bonded storage, temperature control, co-packing, and cross-docking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Network */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Strategic <span className="text-steel-blue">Facilities Network</span>
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto mb-12">
              More than 800,000 sq. ft. of covered warehouse space strategically positioned across 11 major cities 
              in West and East Malaysia for optimal supply chain efficiency.
            </p>
          </div>
          
          {/* Custom Malaysia Map */}
          <div className="mb-16">
            <CustomMalaysiaMap />
          </div>
          
          {/* Award-Winning Infrastructure Highlight */}
          <div className="bg-gradient-to-br from-steel-blue to-slate-gray rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-accent rounded-2xl mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">Award-Winning Green Infrastructure</h3>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Our Green Integrated Logistics Complex and long-standing customer relationships are a testament 
                to our commitment to innovation, sustainability, and service excellence in logistics infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-steel-blue to-steel-blue/80 rounded-xl flex items-center justify-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div className="bg-gradient-to-br from-steel-blue/5 to-steel-blue/10 rounded-3xl p-8 pt-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-steel-blue mb-6">Our Vision</h2>
                <p className="text-lg text-slate-gray leading-relaxed">
                  To be a leading total logistics and supply chain solutions provider in the region — trusted for our 
                  innovation, efficiency, and commitment to customer success across global trade networks.
                </p>
              </div>
            </div>
            
            {/* Mission */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-accent to-orange-500 rounded-xl flex items-center justify-center">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <div className="bg-gradient-to-br from-orange-accent/5 to-orange-accent/10 rounded-3xl p-8 pt-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-orange-accent mb-6">Our Mission</h2>
                <p className="text-lg text-slate-gray leading-relaxed mb-6">
                  To deliver integrated, end-to-end logistics solutions that empower businesses through:
                </p>
                <ul className="space-y-4">
                  {[
                    "Seamless domestic and international freight services",
                    "Sustainable warehousing and distribution systems",
                    "Reliable customs brokerage and project cargo handling",
                    "Advanced digital logistics platforms",
                    "A culture of service excellence, integrity, and partnership"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-accent mt-1 flex-shrink-0" />
                      <span className="text-slate-gray">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-slate-gray leading-relaxed mt-6">
                  We aim to grow with our customers by listening to their needs, evolving with the market, 
                  and consistently exceeding expectations through our experienced team and robust infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-steel-blue to-slate-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust ESB for their logistics needs. 
            Let's discuss how we can optimize your supply chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-accent hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Get Your Quote Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;