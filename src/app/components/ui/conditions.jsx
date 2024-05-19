"use client"
import React from "react";
import Image from 'next/image';
import { Revealx } from "./reveal";
const BackgroundCondition = (props) => {

  const blurStyle = {
    width: "80%",
    height: "400px",
    display:"flex",
    justifyContent:"center",
    justifyItems: "center",
    padding:"10px",
    position: "absolute", 
    filter: "blur(3px)",
    opacity:"90%"
  };

  const containerStyle = {
    position: "relative",
    width: "50%",
    height: "400px",
  };

  const overlayTextStyle = {
    position: "absolute",
    top: "40%",
    left: "25%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "24px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", /* Efek bayangan teks */
  };

  let imageSrc;
  switch(props.condition) {
    case "Rain":
      imageSrc = "/images/NTBrainy.jpg";
      break;
    case "Clouds":
      imageSrc = "/images/NTBcloudy.jpg";
      break;
    default:
      imageSrc = "/images/NTBsunny.jpg";
  }
  
  return (

    <div>
      <div className="flex justify-center">
        <div style={blurStyle}>
          <Image className="rounded-3xl" src={imageSrc} alt="Weather" fill />
        </div>
      </div>
      
      
      <div style={containerStyle} className="container">
      
      
      {/* Overlay text */}
      <div style={overlayTextStyle} className="overlay-text">
        <Revealx>
        <p>Current Weather Conditions :</p>
        <div className="text-lg">
           <p>{props.temp}°C</p>
          <p>{props.condition}</p>
          <p>({props.detailCondition})</p>
          <p>{props.humidity}% Humidity</p>
        </div>
       
        </Revealx>
        
      </div>
    </div>
    </div>
    
  );
};

export default BackgroundCondition;
