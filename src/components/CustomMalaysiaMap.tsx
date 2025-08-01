
import React, { useState } from 'react';
import { MapPin, Building2, Truck, Globe } from 'lucide-react';

const CustomMalaysiaMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    {
      name: "Peninsular Malaysia",
      color: "bg-gradient-to-br from-steel-blue to-blue-600",
      facilities: ["Shah Alam", "Penang", "Johor"],
      icon: Building2,
      description: "Strategic hub for West Malaysia operations"
    },
    {
      name: "Sarawak",
      color: "bg-gradient-to-br from-orange-accent to-orange-600",
      facilities: ["Kuching", "Sibu", "Miri", "Bintulu"],
      icon: Truck,
      description: "Comprehensive coverage across Sarawak"
    },
    {
      name: "Sabah",
      color: "bg-gradient-to-br from-slate-gray to-gray-600",
      facilities: ["Kota Kinabalu", "Tawau"],
      icon: Globe,
      description: "Northern Borneo logistics gateway"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-text-primary mb-4">
          ESB Network Coverage
        </h3>
        <p className="text-lg text-slate-gray max-w-2xl mx-auto">
          9 Strategic Facilities Across Malaysia's Three Major Regions
        </p>
      </div>

      {/* Regional Coverage Grid */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {regions.map((region, index) => {
          const IconComponent = region.icon;
          const isSelected = selectedRegion === region.name;
          
          return (
            <div
              key={index}
              className={`relative cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                isSelected ? 'scale-105 z-10' : ''
              } h-full`}
              onClick={() => setSelectedRegion(isSelected ? null : region.name)}
            >
              {/* Main Region Card */}
              <div className={`${region.color} rounded-2xl p-8 text-white shadow-lg relative overflow-hidden h-full flex flex-col justify-between min-h-[400px]`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4">
                    <IconComponent className="h-24 w-24" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-8 w-8" />
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        {region.facilities.length} Facilities
                      </span>
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-2">{region.name}</h4>
                    <p className="text-white/90 mb-6">{region.description}</p>
                  </div>
                  
                  {/* Facility List */}
                  <div className="space-y-2">
                    {region.facilities.map((facility, facilityIndex) => (
                      <div key={facilityIndex} className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-white/80" />
                        <span className="text-white/90 font-medium">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                  isSelected ? 'ring-4 ring-white/50' : ''
                }`}></div>
              </div>

              {/* Expansion Details */}
              {isSelected && (
                <div className="absolute -bottom-4 left-4 right-4 bg-white rounded-lg shadow-xl p-6 border-t-4 border-current animate-fade-in z-20">
                  <h5 className="font-bold text-text-primary mb-3">Coverage Highlights</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-steel-blue">Facilities:</span>
                      <span className="ml-2 text-slate-gray">{region.facilities.length} locations</span>
                    </div>
                    <div>
                      <span className="font-semibold text-steel-blue">Services:</span>
                      <span className="ml-2 text-slate-gray">Full logistics</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Award-Winning Infrastructure Section */}
      <div className="relative bg-gradient-to-br from-steel-blue/5 via-white to-orange-accent/5 rounded-3xl p-12 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-steel-blue/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-accent/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-steel-blue to-steel-blue/80 rounded-2xl mb-6 shadow-lg">
              <Building2 className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-steel-blue to-orange-accent bg-clip-text text-transparent mb-4">
              Award-Winning Infrastructure
            </h3>
            <p className="text-lg text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Our state-of-the-art facilities across Malaysia represent decades of logistics excellence, 
              combining cutting-edge technology with strategic positioning for optimal supply chain efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-steel-blue/20 to-steel-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-steel-blue" />
              </div>
              <h4 className="text-2xl font-bold text-steel-blue mb-2">800K+</h4>
              <p className="text-slate-gray font-medium">Square Feet of Premium Warehouse Space</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-accent/20 to-orange-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-orange-accent" />
              </div>
              <h4 className="text-2xl font-bold text-orange-accent mb-2">9</h4>
              <p className="text-slate-gray font-medium">Strategic Locations Nationwide</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-steel-blue/20 to-orange-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 text-steel-blue" />
              </div>
              <h4 className="text-2xl font-bold text-steel-blue mb-2">40+</h4>
              <p className="text-slate-gray font-medium">Years of Industry Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Instruction */}
      <div className="text-center mt-8">
        <p className="text-slate-gray text-sm">
          Click on any region to explore our facilities and capabilities
        </p>
      </div>
    </div>
  );
};

export default CustomMalaysiaMap;
