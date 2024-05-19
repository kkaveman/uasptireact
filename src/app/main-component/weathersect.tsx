"use client";
import BackgroundCondition from "@/app/components/ui/conditions.jsx";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Select ,SelectItem} from "@nextui-org/select";

const api = {
  key: "b2f468a597d79815bdb59b47fcb4a846",
  base: "https://api.openweathermap.org/data/2.5/",
};

export function Weather() {
  const [search, setSearch] = useState<string>("");
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    if (search) {
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        });
    }
  }, [search]);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearch(e.target.value);
  };

  const cities = [
    {label: "Lombok", value: "lombok" },
    {label: "Mataram", value: "mataram"},
    {label: "Bima", value: "bima"},
    {label: "Praya", value: "praya,id"},
    
  ];

  return (
    <div>
      <div className="py-5 flex justify-center">
        <Select
        variant="bordered"
        color="default"
        onChange={handleSelectChange}
        items={cities}
        placeholder="Select a city to view weather info"
        className="dark:text-black text-black max-w-xs"
        >
      {(cities) => <SelectItem 
      className="text-black"
      key={cities.value}>{cities.label}</SelectItem>}

        </Select>
      
      </div>

      <div className="WeatherCondition">
        {weather && (
          <BackgroundCondition
            temp={weather?.main?.temp}
            condition={weather?.weather?.[0]?.main}
            detailCondition={weather?.weather?.[0]?.description}
            humidity={weather?.main?.humidity}
          />
        )}
      </div>
    </div>
  );
}
