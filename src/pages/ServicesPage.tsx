import React from "react";
import { Home, Search, Key, Calculator, Building2, HeartHandshake } from "lucide-react";
export function ServicesPage() {
  const services = [{
    icon: <Search className="h-12 w-12 text-blue-600" />,
    title: "Property Search",
    description: "Expert assistance in finding the perfect property that matches your criteria and preferences."
  }, {
    icon: <Calculator className="h-12 w-12 text-blue-600" />,
    title: "Property Valuation",
    description: "Professional assessment of property value based on market analysis and location factors."
  }, {
    icon: <Key className="h-12 w-12 text-blue-600" />,
    title: "Property Management",
    description: "Comprehensive management services for property owners including maintenance and tenant relations."
  }, {
    icon: <Building2 className="h-12 w-12 text-blue-600" />,
    title: "Investment Advisory",
    description: "Expert guidance on real estate investments and portfolio management strategies."
  }, {
    icon: <HeartHandshake className="h-12 w-12 text-blue-600" />,
    title: "Negotiation & Closing",
    description: "Professional negotiation services and assistance throughout the closing process."
  }, {
    icon: <Home className="h-12 w-12 text-blue-600" />,
    title: "Property Marketing",
    description: "Strategic marketing services to showcase your property to the right audience."
  }];
  return <div className="w-full">
      <div className="relative h-[400px] bg-cover bg-center" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Comprehensive real estate services tailored to your needs.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </div>;
}