import React from "react";
import { MapPin, Bed, Bath, Square, Timer } from "lucide-react";
import { Link } from "react-router-dom";
interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  status?: "in_stock" | "sold" | "on_auction" | "flash_sale";
  endTime?: string;
  id: number;
}
export function PropertyCard({
  image,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
  status = "in_stock",
  endTime,
  id
}: PropertyCardProps) {
  const getStatusBadge = () => {
    switch (status) {
      case "sold":
        return <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Sold
          </span>;
      case "on_auction":
        return <span className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            On Auction
          </span>;
      case "flash_sale":
        return <div className="absolute top-4 right-4 flex items-center space-x-2">
            <Timer className="h-4 w-4 text-white" />
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Flash Sale
            </span>
          </div>;
      default:
        return <span className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            In Stock
          </span>;
    }
  };
  return <div className="luxury-card group">
      <div className="relative w-full h-0 pb-[66%] overflow-hidden">
        <img src={image} alt={title} className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        {getStatusBadge()}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="font-playfair text-xl font-bold text-luxury-navy">
          {title}
        </h3>
        <p className="text-2xl font-bold text-luxury-gold">{price}</p>
        <div className="flex items-center text-luxury-charcoal">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex justify-between text-luxury-charcoal">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{sqft} sqft</span>
          </div>
        </div>
        <Link to={`/property/${id}`} className="block w-full text-center py-3 mt-4 border-2 border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white transition-colors duration-300">
          View Details
        </Link>
      </div>
    </div>;
}