import React from "react";
import Image from "next/image";
import img1 from "@/assets/v1.png";
import img2 from "@/assets/v2.png";
import img3 from "@/assets/v3.png";
import img4 from "@/assets/p1.png";
import img5 from "@/assets/p2.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/constants";

const Mid = () => {
  return (
    <>
      <div className="  p-4 sm:p-12  rounded-lg">
        <div className="flex items-center justify-center flex-col gap-5 ">
          <h1 className="text-2xl sm:text-4xl font-bold text-center">
            Adopt or Rehome a pet in just
          </h1>
          <h2 className="text-lg sm:text-3xl font-semibold text-center">
            3 Easy Steps
          </h2>
        </div>
        <div className="flex justify-center sm:flex-row  flex-col items-center gap-8 sm:gap-12 mt-8 sm:mt-12">
          {/* Step 1 */}
          <div className="border-2 border-gray-200 p-4 h-64 w-80 rounded-lg flex justify-center items-center flex-col overflow-hidden text-center ">
            <Image src={img1} width={100} height={100} alt="Step 1" />
            <p className="text-gray-700 text-sm mt-2">
              Set up your profile (including photos) in minutes
            </p>
          </div>

          {/* Step 2 */}
          <div className="border-2 border-gray-200 p-4 h-64 w-80 rounded-lg flex justify-center items-center flex-col overflow-hidden text-center ">
            <Image src={img2} width={100} height={100} alt="Step 1" />
            <p className="text-gray-700 text-sm mt-2">
              Describe your home and routine so rehomers can see if it’s right
              for their pet
            </p>
          </div>

          {/* Step 3 */}
          <div className="border-2 border-gray-200 p-4 h-64 w-80 rounded-lg flex justify-center items-center flex-col overflow-hidden text-center ">
            <Image src={img3} width={100} height={100} alt="Step 1" />
            <p className="text-gray-700 text-sm mt-2">Start your search!</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center sm:gap-10 gap-0">
        <div className="max-w-sm md:max-w-lg  flex justify-center items-center flex-col mx-auto md:mx-0 md:mr-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Peaceful Coexistence
          </h1>
          <h2 className="text-lg md:text-xl mb-4">Human & Animals</h2>
          <Image src={img4} alt="Peaceful Coexistence" />
        </div>
        {/* <div className="grid grid-cols-0 border-2 gap-4 mt-4 md:mt-0 md:grid-cols-2">
          <div className="border-2 border-gray-400 p-4">Box 1 (Row 1)</div>
          <div className="border-2 border-gray-400 p-4">Box 2 (Row 1)</div>
          <div className="border-2 border-gray-400 p-4">Box 3 (Row 2)</div>
          <div className="border-2 border-gray-400 p-4">Box 4 (Row 2)</div>
        </div> */}
        <Image
          src={img5}
          alt="Peaceful Coexistence"
          className="sm:w-[30%] sm:h-[32%] h-[80%] w-[80%] "
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="sm:text-3xl text-lg  font-bold text-center mb-8">
          FAQ's for Adopting a Dog
        </h1>
        <Accordion type="single" collapsible>
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="mb-4">
              <AccordionTrigger className="bg-gray-200 sm:py-3 sm:px-4 px-1 py-2 rounded-md cursor-pointer font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="py-3 px-4 bg-white border border-gray-300 rounded-md">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Mid;
