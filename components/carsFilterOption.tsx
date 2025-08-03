import React, { useEffect, useState } from 'react';

interface CarsFilterOptionProps {
  carsList: any[];
  setBrand: (brand: string) => void;
  setSort: (sort: string) => void;
}

function CarsFilterOption({ carsList, setBrand, setSort }: CarsFilterOptionProps) {
  const [brandList, setBrandList] = useState<string[]>([]);

  useEffect(() => {
    if (carsList && Array.isArray(carsList) && carsList.length > 0) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    const BrandSet = new Set<string>();
    
    carsList.forEach((element: any) => {
      if (element.carType) {
        BrandSet.add(element.carType);
      }
    });
    
    console.log(BrandSet);
    setBrandList(Array.from(BrandSet));
  }

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBrand = e.target.value;
    setBrand(selectedBrand);
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
  }

  return (
    <div className="mt-10 px-4 md:px-10">
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Cars Catalog</h2>
        <p className="text-lg text-gray-500 mt-1">Explore cars you may like</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Price Filter */}
        <select 
          className="w-full md:w-60 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          onChange={handleSortChange}
        >
          <option value="">Sort by Price</option>
          <option value="max-to-min">Max to Min</option>
          <option value="min-to-max">Min to Max</option>
        </select>

        {/* Manufacturer Filter */}
        <select 
          className="w-full md:w-60 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          onChange={handleBrandChange}
        >
          <option value="">All Brands</option>
          {brandList && brandList.map((brand: string, index: number) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CarsFilterOption;