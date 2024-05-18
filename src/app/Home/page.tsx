"use client"
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import { Weather } from "../main-component/weathersect";
import { PinContainer } from "../components/ui/3d-pin";
import { NavHome } from "@/app/components/ui/homenav";
import Image from 'next/image';
import { Revealx } from "../components/ui/reveal";
import { motion } from "framer-motion";
import AccessibilityInfo from "../components/ui/accessinfo";

const Home = () => {
  return (
    <div>
      <NavHome/>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 m-6"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          West Nusa Tenggara
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
          A dry paradise with its pristine beaches, vibrant marine life, and lush landscapes.
        </div>
      </motion.div>

      <div>
        <Weather/>
      </div>

      <div className="Hero w-full h-full">
        <div className="px-6">
          <div className="px-6 py-10 mt-11 mx-5">
            <Revealx>
              <div>
                <p className="mr-6 text-l md:text-3xl font-bold dark:text-white">Overview</p>
                <p className="mr-6" style={{marginTop:"10px"}}>Nusa Tenggara Barat Province, located in the mesmerizing archipelago of Indonesia, is a captivating
                  destination brimming with natural wonders, cultural richness, and vibrant landscapes.
                  This province, often abbreviated as NTB, encompasses the western portion of the
                  Lesser Sunda Islands, including the famed islands of Lombok and Sumbawa.</p>
              </div>
            </Revealx>
          </div>
        </div>

        <div className="p-6 pt-5" style={{marginBottom: "4%",marginTop: "5%", background: "black" }}>
          <div className="mx-6 pt-5">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center mb-4">
                <PinContainer
                  className="overflow-hidden fit"
                  title="Map of West Nusa Tenggara">
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                      Map of West Nusa Tenggara
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        Hover me!
                      </span>
                    </div>
                    <div className="flex flex-1 w-fit rounded-lg mt-4 via-purple-500 to-blue-500">
                      <div>
                        <Image
                          alt="NTBmap"
                          src={"/images/NTBmap.png"}
                          width={500}
                          height={700}
                          style={{borderRadius: "10px"}}
                        />
                      </div>
                    </div>
                  </div>
                </PinContainer>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center mb-4">
                <div className="py-6">
                  <AccessibilityInfo/>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mx-5" style={{marginTop:"10%"}}>
          <Revealx>
            <div>
              <p className="mx-5 text-l md:text-3xl font-bold dark:text-white py-3">Cities</p>
              <p className="mx-5">The cities of West Nusa Tenggara, including Mataram and Bima, blend traditional culture with modern amenities, offering scenic coastal views, vibrant local markets, and historical landmarks.</p>
            </div>
          </Revealx>
        </div>
        <div className="flex justify-center items-center">
          <Revealx>
            <div className="places overflow-hidden">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center mb-4">
                  <CardContainer
                    className="inter-var"
                    desc="Stunning pink-hued sand"
                  >
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-auto rounded-xl p-6 border">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        Lombok
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        Pink beach in East Lombok
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src="/images/lombok.jpg"
                          height="700"
                          width="700"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-20">
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                          Description →
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center mb-4">
                  <CardContainer
                    className="inter-var"
                    desc="The Residence of the kings originating from Sumbawa Regency"
                  >
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-auto rounded-xl p-6 border">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        Sumbawa
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        Traditional House Dalam Loka in Sumbawa
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src="/images/sumbawa.jpg"
                          height="700"
                          width="700"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-20">
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                          Description →
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center mb-4">
                  <CardContainer
                    className="inter-var"
                    desc="Rocky shores and abundant population of sea snakes."
                  >
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-auto rounded-xl p-6 border">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        Bima
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        Snake Island
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src="/images/bima.jpg"
                          height="700"
                          width="700"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-20">
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                          Description →
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </div>
              </div>
            </div>
          </Revealx>
        </div>
      </div>
    </div>
  );
}

export default Home;
