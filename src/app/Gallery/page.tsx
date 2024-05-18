// Home.tsx
"use client";

import React from "react";
import { NavHome } from "@/app/components/ui/homenav";
import transition from "../components/ui/transitionpage";
import { Revealx } from "../components/ui/reveal";
import { LayoutGrid } from "../components/ui/layout-grid";
const Gallery = () => {
  
  return (
    <div>
      <NavHome/>      
        <div className="Hero">
            <div className="p-6" style={{marginBottom: "4%",marginTop: "5%", background: "black" }}>
              <Revealx>
                <div className="mx-4">
                  <p className="text-l md:text-3xl font-bold dark:text-white">Gallery</p>
                  <p className="font-sans text-neutral-600 dark:text-neutral-200 mb-2 mt-2">Check out some awesome images of this region by certified photographers!</p>
                </div>
                </Revealx>

                
            </div>
            <div className="h-screen py-20 w-full">
              <LayoutGrid cards={cards} />
          </div>
        </div>
  </div>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Senggigi Beach</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A white sandy beach with a colorful reef, located in West Lombok.

      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Gili Trawangan</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Located in North of Lombok, features a hotel, WWII Japanese Tunnel, and an irish pub
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Mount Rinjani</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        an exquisite titan of nature&apos;s sculpture, rises with the elevation of 3,726 meters
        located in East Lombok
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Savana Propok</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Admist the pristine landscapes of West Nusa Tenggara, Bukit Kondo N Savana Propok
        emerges as a hidden gem, offering panoramic scenery that stretch to the horizon&apos;s edge
        located near Mount Rinjani

      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Tanjung Aan Beach</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Idyllic masterpiece cradled along the shores of Central Lombok Regency
        where the pristine waters of Indian Ocean meet the white sands
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Tanau hills</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      As day gives way to night Ai Lemak Beach transforms into a dreamscape of celestial wonder.
      The Milky Way stretches across the heavens like a luminous tapestry, as shown in the image. Located in Sumbawa Regency.
       </p>
    </div>
  );
};
 
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md: col-span-2",
    thumbnail:
      "/images/senggigi.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-2",
    thumbnail:
      "/images/gili.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-3",
    thumbnail:
      "/images/rinjani.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-3",
    thumbnail:
      "/images/propok.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-3",
    thumbnail:
      "/images/TanjungAan.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix/>,
    className: "md:col-span-2",
    thumbnail:
      "/images/AiLemak.jpg",
  },
];

export default transition(Gallery);
