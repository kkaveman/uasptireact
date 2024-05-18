"use client"
import BackgroundCondition from "@/app/components/ui/conditions.jsx";
import React, { useState, useEffect } from "react";

const api = {
    key: "b2f468a597d79815bdb59b47fcb4a846",
    base: "https://api.openweathermap.org/data/2.5/",
  };

export function Weather(){
    const [weather, setWeather] = useState<any>(null);
  //const navigate = useNavigateFromYourRouter();
  useEffect(() => {
    fetch(`${api.base}weather?q=${"West Nusa Tenggara"}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  }, []);
    return(
    <div className="WeatherCondition">
        <BackgroundCondition
          temp={weather?.main?.temp}
          condition={weather?.weather?.[0]?.main}
          
        />
    </div>
    );
    
}