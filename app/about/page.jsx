import React from "react";
import about from "@/assets/about.png";
import Image from "next/image";
import img1 from "@/assets/vector.jpg";
import img2 from "@/assets/about1.png";

const Page = () => {
  return (
    <div className=" ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl  mt-10 mb-10">About Us</h1>
        <Image
          src={about}
          alt="About Image"
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex justify-center flex-col items-center">
        <div className="border-2  mt-4 flex justify-center flex-col items-center rounded-md w-[80%]">
          <h1 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Our Mission
          </h1>
          <p className="text-lg text-center p-4">
            BARKBUDDY is a lifesaving nonprofit bringing pets and people
            together.
            <br /> We are here to create loving families.
          </p>
        </div>
        <div className="w-[80%] flex justify-between mt-10 mb-10">
          <div className="w-[50%]">
            <h1 className="text-2xl font-bold">What We Do</h1>
            <p className="mt-6">
              We're a safer, more professional and ethical alternative to sites
              like Facebook, Preloved, Pets4Homes and Gumtree.
            </p>
            <p className="mt-3">
              Our platform connects potential adopters with people who need to
              rehome their pets, dogs and cats. This makes it easier for good
              people to adopt the right pet whilst maximizing the chance of pets
              finding their forever home.
            </p>
            <p className="mt-3">
              We offer a non-judgmental service to rehomers and give them full
              control of the process. We're also helping to reduce the number of
              animals going into shelters. This frees up space and resources for
              the pets who have been abandoned, need immediate help or
              specialist care.
            </p>
          </div>
          <div className="w-[40%] p-4 flex justify-center flex-col rounded-xl ">
            <div className="border-2 p-4 rounded-xl">
              <div className="flex items-center gap-5">
                <Image src={img1} alt="Vector Image" />
                <p>4.2 million pets Rehomed</p>
              </div>
              <div className="flex items-center gap-5">
                <Image src={img1} alt="Vector Image" />
                <p>6.8 million pets Adopted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 justify-center items-center">
        <h1 className="text-4xl font-bold">Furry Friends</h1>
        <h1 className="text-3xl  mb-5"> Brings happiness to your family</h1>
        <Image src={img2} alt="About Image" className="mb-2" />
      </div>
    </div>
  );
};

export default Page;
