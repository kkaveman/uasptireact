// AboutUs/page.tsx
"use client";

import React from "react";
import { NavHome } from "@/app/components/ui/homenav";
import { Revealx } from "../components/ui/reveal";
import { HeroParallax } from "../components/ui/hero-parallax";
import { HoverEffect } from "../components/ui/card-hover-effect";

const AboutUs = () => {
  return (
    <div>
      <NavHome/>      
      <div className="Hero py-3 p-6" style={{marginTop: "5%", background: "black" }}>
        <div style={{background: "black" }}>
          <div className="mx-4">
            <Revealx>
              <div style={{marginBottom:"20%"}}>
                <p className="text-2xl md:text-7xl font-bold text-white dark:text-white">About Us</p>
                <p className="font-sans text-white text-white-600 dark:text-white-200 mb-2 mt-2">Check out the Sources of this Website and integrations!</p>
              </div>
            </Revealx>
          </div>
          
          <div style={{padding:"2%"}}></div>
          <HeroParallax products={products} />
          <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
            <Revealx>
              <div>
                <h1 className="text-2xl md:text-7xl font-bold text-white dark:text-white">
                  Meet Our Team <br />
                </h1>
                <p className="max-w-2xl text-base md:text-xl text-white mt-8 dark:text-neutral-200">
                  each member brings unique expertise and passion to our project
                </p>
              </div>
            </Revealx>
          </div>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const projects = [
  {
    id:1,
    name:"Kevin Anatta",
    designation:"Developer",
    image: "/images/estripe.jpg",
    title: "Kevin Anatta",
    description: "",
    link: "https://www.instagram.com/kvanath/",
  },
  {
    id:2,
    name:"El Raaqi",
    designation:"Designer",
    image: "/images/krico.jpg",
    title: "El Raaqi",
    description: "",
    link: "https://www.instagram.com/elraaqi/",
  },
  {
    id:3,
    name:"Amran ",
    designation:"Brainstormer",
    image: "/images/cago.jpg",
    title: "Amran ",
    description: "",
    link: "https://www.instagram.com/ran4mran/",
  },
  {
    id:4,
    name:"Raymussen",
    designation:"Brainstormer",
    image: "/images/kawasaki.jpg",
    title: "Raymussen",
    description: "",
    link: "https://www.instagram.com/itznotray/",
  },
];

export const products = [
  {
    title: "#1",
    thumbnail: "/images/aceternity.jpg",
  },
  {
    title: "#2",
    thumbnail: "/images/code.jpg",
  },
  {
    title: "#3",
    thumbnail: "/images/aceternity.jpg",
  },
  {
    title: "#4",
    thumbnail: "/images/Kelompok.jpg",
  },
  {
    title: "#5",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "#6",
    thumbnail: "/images/Gallery.jpg",
  },
  {
    title: "#7",
    thumbnail: "/images/Nextui.jpg",
  },
  {
    title: "#8",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "#9",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "#10",
    thumbnail: "/images/skibidi.jpg",
  },
  {
    title: "#11",
    thumbnail: "/images/umn.png",
  }
];

export default AboutUs;