import React from "react";
import { Link } from "react-router-dom";
export function PropertiesPage() {
  const properties = [{
    id: 1,
    title: "Modern Luxury Villa",
    price: "₦450,000,000",
    beds: 4,
    baths: 3,
    sqft: "3,500",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
  }, {
    id: 2,
    title: "Oceanfront Penthouse",
    price: "₦850,000,000",
    beds: 3,
    baths: 2,
    sqft: "2,800",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
  }, {
    id: 3,
    title: "Mountain View Estate",
    price: "₦1,100,000,000",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
  }];
  return <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Available Properties
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map(property => <Link to={`/property/${property.id}`} key={property.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <div className="text-gray-600 mb-4">
                  <p>
                    {property.beds} beds • {property.baths} baths •{" "}
                    {property.sqft} sq ft
                  </p>
                </div>
                <p className="text-2xl font-bold text-blue-600">
                  {property.price}
                </p>
              </div>
            </Link>)}
        </div>
      </div>
    </div>;
}