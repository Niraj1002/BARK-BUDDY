import Image from "next/image";
import React from "react";
import bg1 from "@/assets/bg1.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col sm:mt-[-2rem]  mb-[-2rem] sm:mb-24 sm:flex-row justify-between px-6  sm:px-12 md:px-20 lg:px-36 py-0 sm:py-10">
      <div className="max-w-lg">
        <div className="text-3xl sm:text-5xl mt-10 sm:mt-32 text-center sm:text-left font-bold mb-4">
          Give a New Life to
          <span className="text-[#675bc8]"> BarkBuddy</span>
        </div>
        <p className="text-base sm:text-lg text-left">
          Pet adoption and rehoming are both vital <br /> aspects of animal
          welfare, offering hope and a <br /> fresh start to pets in need.{" "}
          <br /> Open your heart and your home to a shelter <br /> pet.
        </p>
        <div className="flex flex-col sm:flex-row mt-6 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/adopt-a-dog">
            <button className="bg-[#675bc8] text-white px-8 py-2 rounded-lg">
              Adopt Now
            </button>
          </Link>
          <Link href="/">
            <button className="bg-white border-2 border-[#675bc8] text-[#675bc8] px-8 py-2 rounded-lg">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-8 sm:ml-20 sm:mt-0 ">
        <div className="w-full ">
          <div className=" w-full h-96">
            <Image src={bg1} alt="Background" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
