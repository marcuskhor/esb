
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-steel-blue to-slate-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-orange-accent">Touch</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to streamline your logistics? Contact our experts today for a customized solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-accent p-3 rounded-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-200">+1 (555) 123-4567</p>
                <p className="text-gray-200">+1 (555) 765-4321</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-accent p-3 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-200">info@globallogistics.com</p>
                <p className="text-gray-200">support@globallogistics.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-accent p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-200">123 Logistics Avenue</p>
                <p className="text-gray-200">Business District, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-accent p-3 rounded-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                <p className="text-gray-200">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-200">24/7 Emergency Support</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-primary font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-text-primary font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-text-primary font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-text-primary font-medium mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent">
                  <option>Select a service</option>
                  <option>Ground Transportation</option>
                  <option>Ocean Freight</option>
                  <option>Air Cargo</option>
                  <option>Warehousing</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-text-primary font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                  placeholder="Tell us about your logistics needs..."
                ></textarea>
              </div>
              
              <button className="w-full bg-orange-accent hover:bg-orange-500 text-white py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
