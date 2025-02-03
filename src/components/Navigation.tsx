import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, Phone, Building2, Users, MessageSquare, HeartHandshake, Zap, Menu, X } from "lucide-react";
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuItems = [{
    to: "/",
    icon: <Home className="h-4 w-4" />,
    text: "Home"
  }, {
    to: "/about",
    icon: <Users className="h-4 w-4" />,
    text: "About"
  }, {
    to: "/services",
    icon: <HeartHandshake className="h-4 w-4" />,
    text: "Services"
  }, {
    to: "/properties",
    icon: <Building2 className="h-4 w-4" />,
    text: "Properties"
  }, {
    to: "/deals",
    icon: <Zap className="h-4 w-4" />,
    text: "Deals"
  }, {
    to: "/contact",
    icon: <MessageSquare className="h-4 w-4" />,
    text: "Contact"
  }];
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-luxury-gold" />
            <span className="text-2xl font-playfair font-bold text-luxury-navy">
              LuxuryEstates
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => <Link key={item.to} to={item.to} className="text-luxury-navy hover:text-luxury-gold transition-colors duration-200 font-medium">
                {item.text}
              </Link>)}
            <button className="luxury-button">Contact Us</button>
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-luxury-navy" /> : <Menu className="h-6 w-6 text-luxury-navy" />}
          </button>
        </div>
        {isMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
            <div className="flex flex-col py-4">
              {menuItems.map(item => <Link key={item.to} to={item.to} className="px-6 py-3 text-luxury-navy hover:bg-luxury-cream transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                  {item.text}
                </Link>)}
            </div>
          </div>}
      </nav>
    </header>;
}