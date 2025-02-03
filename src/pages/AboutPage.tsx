import React from "react";
import { Users, Award, Clock, Target } from "lucide-react";
export function AboutPage() {
  const team = [{
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
  }, {
    name: "Sarah Johnson",
    role: "Head of Sales",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
  }, {
    name: "Michael Brown",
    role: "Senior Agent",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
  }];
  return <div className="w-full">
      <div className="relative h-[400px] bg-cover bg-center" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About LuxuryEstates
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Your trusted partner in the luxury real estate market for over 20
            years.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              Committed to delivering the highest quality service to our
              clients.
            </p>
          </div>
          <div className="text-center p-6">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-600">
              Over two decades of experience in luxury real estate market.
            </p>
          </div>
          <div className="text-center p-6">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Results</h3>
            <p className="text-gray-600">
              Proven track record of successful property transactions.
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => <div key={index} className="text-center">
              <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>)}
        </div>
      </div>
    </div>;
}