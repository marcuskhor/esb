import { CheckCircle, Award, Globe, Truck, Warehouse, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const facilities = [
    "Shah Alam", "Penang", "Johor", "Kuching", 
    "Kota Kinabalu", "Sibu", "Miri", "Bintulu", "Tawau"
  ];

  const services = [
    { icon: Truck, title: "Domestic Freight", desc: "Consolidation services across Malaysia" },
    { icon: Globe, title: "International Freight", desc: "Sea and air freight solutions" },
    { icon: Warehouse, title: "Warehousing", desc: "800,000+ sq. ft. of covered space" },
    { icon: Shield, title: "Customs Brokerage", desc: "Seamless customs clearance" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-steel-blue to-slate-gray py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-orange-accent">Eignretep Group</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Leading total logistics service provider in Malaysia since 1984
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-slate-gray mb-6 leading-relaxed">
                Eignretep Group of Companies (ESB) is a leading total logistics service provider in Malaysia, 
                dedicated to delivering seamless, secure, and efficient supply chain solutions both domestically and internationally.
              </p>
              <p className="text-lg text-slate-gray mb-6 leading-relaxed">
                Founded in 1984 by Datuk Seri Peter Lau Hui Ngie, ESB has grown into a trusted name in logistics 
                with a strong presence across 11 major cities in West and East Malaysia.
              </p>
              <div className="bg-orange-accent/10 border-l-4 border-orange-accent p-6 rounded-r-lg">
                <p className="text-steel-blue font-semibold">
                  "At ESB, your success is our priority — whether you're a multinational, SME, or a local enterprise, 
                  we serve you with the same passion and precision."
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-steel-blue rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">Efficient</h4>
                    <p className="text-slate-gray">Streamlined operations for optimal results</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-steel-blue rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">Secure</h4>
                    <p className="text-slate-gray">Safe and reliable logistics solutions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-steel-blue rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">Best Value</h4>
                    <p className="text-slate-gray">Exceptional service at competitive rates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-text-primary mb-16">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-orange-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{service.title}</h3>
                  <p className="text-slate-gray">{service.desc}</p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
              Comprehensive Logistics Solutions
            </h3>
            <p className="text-lg text-slate-gray mb-6 leading-relaxed text-center max-w-4xl mx-auto">
              We specialize in domestic freight consolidation—particularly in the East Malaysia trade lanes—and offer 
              integrated services in international sea and air freight, warehousing, customs brokerage, project logistics, 
              and road transportation.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-text-primary mb-4">Technology</h4>
                <p className="text-slate-gray">
                  We operate our own in-house Warehouse Management (WMS) and Freight Management (FMS) Systems, 
                  enabling real-time tracking, customized logistics planning, and seamless integration for our clients.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-text-primary mb-4">Industries Served</h4>
                <p className="text-slate-gray">
                  Our facilities include bonded and temperature-controlled storage, co-packing, cross-docking, 
                  and value-added services tailored to electronics, FMCG, energy, and infrastructure industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Our Facilities
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              More than 800,000 sq. ft. of covered warehouse space strategically located across Malaysia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {facilities.map((city, index) => (
              <div key={index} className="bg-steel-blue text-white rounded-lg p-4 text-center font-semibold">
                {city}
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-orange-accent/10 to-steel-blue/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">
              Award-Winning Infrastructure
            </h3>
            <p className="text-lg text-slate-gray text-center leading-relaxed">
              Our award-winning Green Integrated Logistics Complex and long-standing customer relationships 
              are a testament to our commitment to innovation, sustainability, and service excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-steel-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl leading-relaxed text-gray-200">
                To be a leading total logistics and supply chain solutions provider in the region — trusted for our 
                innovation, efficiency, and commitment to customer success across global trade networks.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-200 mb-6">
                To deliver integrated, end-to-end logistics solutions that empower businesses through:
              </p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-accent mt-1 flex-shrink-0" />
                  <span>Seamless domestic and international freight services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-accent mt-1 flex-shrink-0" />
                  <span>Sustainable warehousing and distribution systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-accent mt-1 flex-shrink-0" />
                  <span>Reliable customs brokerage and project cargo handling</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-accent mt-1 flex-shrink-0" />
                  <span>Advanced digital logistics platforms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-accent mt-1 flex-shrink-0" />
                  <span>A culture of service excellence, integrity, and partnership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;