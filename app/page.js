import { GiAges, GiDogHouse } from "react-icons/gi";
import { FaMapMarkerAlt, FaDog, FaGenderless } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import dog from "@/public/di.jpg";
import Hero from "@/components/Home/Hero";
import Mid from "@/components/Home/Mid";

export default function Home() {
  return (
    <>
      <div className="mt-[4.8rem]">
        <Hero />
      </div>
      <div>
        <h1 className="font-bold text-center sm:text-3xl sm:mt-10 text-lg mt-[-2rem]">
          Take a look at some of our pets
        </h1>
        <div className="flex flex-wrap justify-center gap-6 py-10 px-4 sm:px-12 mt-10">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <Link href={`/pet/${index + 1}`} passHref>
                <div className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 bg-white">
                  <Image
                    className="w-full h-auto sm:h-[15rem] object-cover"
                    alt="pic"
                    src={dog}
                    width={500}
                    height={300}
                  />
                  <div className="p-4">
                    <h1 className="font-bold text-[#2E256F] text-xl">Pitter</h1>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                      <FaMapMarkerAlt />
                      <span>California, USA</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                      <FaGenderless />
                      <span>Male</span>
                      <span>•</span>
                      <FaDog />
                      <span>Golden Retriever</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                      <GiAges />
                      <span>5 years old</span>
                      <span>•</span>
                      <GiDogHouse />
                      <span>Large</span>
                    </div>
                    <p className="mt-3 text-gray-700 text-sm">
                      Pitty is a very friendly dog who loves to play with kids
                      and other dogs. He is very energetic and loves to play
                      fetch.
                    </p>
                    <div className="mt-4">
                      <button className="bg-[#675bc8] text-white py-2 px-4 rounded-lg shadow-md transition-colors hover:bg-[#5647b5]">
                        Show info
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Link href="/adopt-a-dog">
          <div className="flex justify-center mb-10">
            <button className="bg-white border-2 border-[#5647b5] px-10 text-[#5647b5] py-2  rounded-lg shadow-md  transition-colors hover:bg-white">
              View More
            </button>
          </div>
        </Link>
        <Mid />
      </div>
    </>
  );
}
