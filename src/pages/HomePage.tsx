import React from "react";
import { Search } from "lucide-react";
import { PropertyCard } from "../components/PropertyCard";
export function HomePage() {
  const featuredProperties = [{
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Modern Luxury Villa",
    price: "₦950,000,000",
    location: "Lekki Phase 1, Lagos",
    beds: 5,
    baths: 4,
    sqft: 4500
  }, {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Waterfront Paradise",
    price: "₦1,200,000,000",
    location: "Banana Island, Lagos",
    beds: 6,
    baths: 5,
    sqft: 5200
  }, {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Urban Penthouse",
    price: "₦750,000,000",
    location: "Victoria Island, Lagos",
    beds: 3,
    baths: 2,
    sqft: 2800
  }];
  return <div className="w-full">
      <section className="relative min-h-screen bg-cover bg-center" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center pt-32">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Discover Your Luxury <br />
            Dream Home
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl">
            Experience unparalleled luxury living with our exclusive collection
            of premium properties
          </p>
          <div className="w-full max-w-3xl bg-white/95 backdrop-blur-md p-6 rounded-lg shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Location" className="luxury-input" />
              <input type="text" placeholder="Price Range" className="luxury-input" />
              <button className="luxury-button md:w-auto">
                <Search className="h-5 w-5 mr-2 inline" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-luxury-cream py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-4">
              Featured Properties
            </h2>
            <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => <div key={index} className="fade-up" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <PropertyCard {...property} />
              </div>)}
          </div>
        </div>
      </section>
    </div>;
}