import Image from "next/image";
import React from "react";
import HeroImg from "@/assets/heroimg.svg"
import { buttonVariants } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-5  md:px-20">
      <article className="text-white flex flex-col justify-around md:justify-center ">
        <h1 className="text-5xl lg:text-6xl font-semibold md:my-[20px]">
        Unpacking the <span className="bg-gradient-to-r from-[#FF9447] via-[#FF64C1] via-[#925EFF] to-[#1A1EFF] bg-clip-text text-transparent">Latest Trends </span>in Crypto
        </h1>
        <h2 className="my-[20px]">
        Discovered latest top-notch stories from world wide community, quality informative podcast and verified creators.
        </h2>
        <button className={`w-[150px] ${buttonVariants({ variant: "action" })}`}>
          Join the Community
        </button>
      </article>
      <Image src={HeroImg} alt="nexus-logo" className="w-full md:w-[50%] flex justify-center items-center" />
    </div>
  );
};

export default HeroSection;
