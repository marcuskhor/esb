import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-steel-blue to-text-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with our logistics experts. We're here to help with all your shipping and transportation needs.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">Get In Touch</h2>
              <p className="text-slate-gray text-lg mb-8">
                Ready to streamline your logistics? Contact our team of experts who are standing by to help optimize your supply chain.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-steel-blue">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-steel-blue/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-steel-blue" />
                    </div>
                    <CardTitle className="text-lg">Phone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-gray">+60 3-5191 3838</p>
                  <p className="text-slate-gray">+60 3-5191 3839</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-accent">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-accent/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-orange-accent" />
                    </div>
                    <CardTitle className="text-lg">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-gray">info@eignretep.com</p>
                  <p className="text-slate-gray">sales@eignretep.com</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-steel-blue sm:col-span-2">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-steel-blue/10 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-steel-blue" />
                    </div>
                    <CardTitle className="text-lg">Address</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-gray">
                    EIGNRETEP SDN BHD (WAREHOUSE 5)<br />
                    Jalan SU 8, Seksyen 22<br />
                    40300 Shah Alam, Selangor<br />
                    Malaysia
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-accent sm:col-span-2">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-accent/10 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-orange-accent" />
                    </div>
                    <CardTitle className="text-lg">Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-slate-gray">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-gray mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-gray mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-gray mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-gray mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-gray mb-2">
                      Service Needed
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent transition-all">
                      <option value="">Select a service</option>
                      <option value="ground-transport">Ground Transportation</option>
                      <option value="ocean-freight">Ocean Freight</option>
                      <option value="air-cargo">Air Cargo</option>
                      <option value="warehousing">Warehousing</option>
                      <option value="express-delivery">Express Delivery</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-gray mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your logistics needs..."
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-steel-blue hover:bg-steel-blue/90 text-white py-3 text-lg font-semibold"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Visit Our Warehouse</h2>
            <p className="text-slate-gray text-lg">
              Find us at our main facility in Shah Alam, Selangor
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-lg">
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0159833311544!2d101.5396301!3d3.0430766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d002a6af3dd%3A0x73a2f71907cb42e5!2sEIGNRETEP%20SDN%20BHD%20(WAREHOUSE%205)%2C%20Jalan%20SU%208%2C%20Seksyen%2022%2C%2040300%20Shah%20Alam%2C%20Selangor!5e0!3m2!1sen!2smy!4v1735194000000!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eignretep Group Location"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;