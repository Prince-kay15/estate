import React from "react";
import { useParams } from "react-router-dom";
import { Bed, Bath, Square, MapPin } from "lucide-react";
export function PropertyDetails() {
  const {
    id
  } = useParams();
  // Mock property data
  const property = {
    title: "Modern Luxury Villa",
    price: "₦450,000,000",
    description: "This stunning modern villa offers luxurious living with breathtaking views. Features include high-end finishes, smart home technology, and an infinity pool.",
    beds: 4,
    baths: 3,
    sqft: "3,500",
    location: "Lekki Phase 1, Lagos",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
  };
  return <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img src={property.image} alt={property.title} className="w-full h-[500px] object-cover rounded-lg" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {property.title}
            </h1>
            <p className="text-3xl font-bold text-blue-600 mb-6">
              {property.price}
            </p>
            <div className="flex space-x-6 mb-6">
              <div className="flex items-center">
                <Bed className="h-5 w-5 text-gray-600 mr-2" />
                <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 text-gray-600 mr-2" />
                <span>{property.baths} Baths</span>
              </div>
              <div className="flex items-center">
                <Square className="h-5 w-5 text-gray-600 mr-2" />
                <span>{property.sqft} sq ft</span>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <MapPin className="h-5 w-5 text-gray-600 mr-2 mt-1" />
              <span>{property.location}</span>
            </div>
            <p className="text-gray-600 mb-8">{property.description}</p>
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
              Schedule Viewing
            </button>
          </div>
        </div>
      </div>
    </div>;
}