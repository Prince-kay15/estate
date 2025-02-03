import React from "react";
import { PropertyCard } from "../components/PropertyCard";
import { CountdownTimer } from "../components/CountdownTimer";
import { Gavel, Zap } from "lucide-react";
export function DealsPage() {
  const auctionProperties = [{
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Luxury Beachfront Villa",
    price: "Starting at ₦550,000,000",
    location: "Ikoyi, Lagos",
    beds: 5,
    baths: 4,
    sqft: 4200,
    status: "on_auction" as const,
    endTime: "2024-01-30T00:00:00"
  }, {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Mountain View Mansion",
    price: "Starting at ₦780,000,000",
    location: "Asokoro, Abuja",
    beds: 6,
    baths: 5,
    sqft: 5500,
    status: "on_auction" as const,
    endTime: "2024-01-25T00:00:00"
  }];
  const flashSaleProperties = [{
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Urban Penthouse",
    price: "₦320,000,000",
    location: "Ikeja GRA, Lagos",
    beds: 2,
    baths: 2,
    sqft: 1800,
    status: "flash_sale" as const,
    endTime: "2024-01-20T00:00:00"
  }, {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Seaside Condo",
    price: "₦250,000,000",
    location: "Victoria Island, Lagos",
    beds: 3,
    baths: 2,
    sqft: 2000,
    status: "flash_sale" as const,
    endTime: "2024-01-22T00:00:00"
  }];
  return <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Gavel className="h-8 w-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Properties on Auction
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auctionProperties.map((property, index) => <div key={index} className="space-y-4">
                <PropertyCard {...property} />
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Auction ends in:</p>
                  <CountdownTimer endTime={property.endTime} />
                  <div className="mt-4">
                    <input type="number" placeholder="Enter your bid" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500 mb-2" />
                    <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
        <div>
          <div className="flex items-center mb-8">
            <Zap className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Flash Sales</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flashSaleProperties.map((property, index) => <div key={index} className="space-y-4">
                <PropertyCard {...property} />
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Sale ends in:</p>
                  <CountdownTimer endTime={property.endTime} />
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}