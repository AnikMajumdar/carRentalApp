"use client"
import { UserButton } from "@clerk/nextjs"
import { User } from "@clerk/nextjs/server"
import Hero from "@/components/Home/hero"
import SearchInput from "@/components/Home/searchInput"
import CarsFilterOption from "@/components/carsFilterOption"
import { get } from "http"
import { getCarLists } from "@/services"
import { useEffect, useState } from "react";
import CarsList from "@/components/Home/CarsList"

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [currentBrand, setCurrentBrand] = useState<string>("");
  const [currentSort, setCurrentSort] = useState<string>("");

  useEffect(() => {
    getCarsList();
  }, [])

  const getCarsList = async () => {
    try {
      const result: any = await getCarLists();
      console.log(result);
      setCarsList(result?.products || []);
      setCarsOrgList(result?.products || []);
    } catch (error) {
      console.error('Error fetching cars:', error);
      setCarsList([]);
      setCarsOrgList([]);
    }
  }

  const applyFiltersAndSort = (brand: string = currentBrand, sort: string = currentSort) => {
    let filteredList = [...carsOrgList];

    // Apply brand filter
    if (brand && brand !== "") {
      filteredList = filteredList.filter((item: any) => item.carType === brand);
    }

    // Apply price sorting
    if (sort && sort !== "") {
      filteredList.sort((a: any, b: any) => {
        const priceA = parseFloat(a.price) || 0;
        const priceB = parseFloat(b.price) || 0;
        
        if (sort === "max-to-min") {
          return priceB - priceA; // Descending order
        } else if (sort === "min-to-max") {
          return priceA - priceB; // Ascending order
        }
        return 0;
      });
    }

    setCarsList(filteredList);
  }

  const filterCarList = (brand: string) => {
    setCurrentBrand(brand);
    applyFiltersAndSort(brand, currentSort);
  }

  const sortCarList = (sort: string) => {
    setCurrentSort(sort);
    applyFiltersAndSort(currentBrand, sort);
  }
  
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOption 
        carsList={carsOrgList} 
        setBrand={(value: string) => filterCarList(value)}
        setSort={(value: string) => sortCarList(value)}
      />
      <CarsList carsList={carsList} />
    </div>
  )
}