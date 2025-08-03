import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Car Rentals in Your Area</h2>
          <p className="text-gray-600 text-lg">
            Find the best car rental deals near you. We offer a wide range of vehicles to suit your needs, whether it's for a weekend getaway or a long-term rental.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
            Explore Cars
          </button>
        </div>

        {/* Image */}
        <div className="w-full">
          <Image
            src="/hero.png"
            alt="Car Rental Hero"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
