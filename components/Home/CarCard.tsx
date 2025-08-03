import React from 'react';
import Image from 'next/image';

function CarCard({ car }: { car: any }) {
    const imageUrl = car.images?.[0]?.url || car.image?.url || '/default-car.jpg';

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg border border-gray-100">
      {/* Car Image */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={car.images?.url}
          alt={car.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>

      {/* Car Details */}
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
        <p className="text-gray-600">Price: ${car.price}</p>
        <p className="text-gray-600 capitalize">Type: {car.carType}</p>
      </div>
    </div>
  );
}

export default CarCard;
