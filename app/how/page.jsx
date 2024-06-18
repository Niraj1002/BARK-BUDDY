import Image from "next/image";
import how from "@/assets/how.png";
import how1 from "@/assets/how1.png";
import how2 from "@/assets/how2.png";

const Page = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <Image src={how} alt="How it works" />
      <h1 className="text-4xl font-bold text-gray-800 mt-6 text-center">
        How It Works For Rehomers
      </h1>
      <h2 className="text-xl text-gray-600 mt-4 mb-12 text-center max-w-2xl">
        For most people, rehoming a pet is a really difficult but necessary
        decision.
      </h2>
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-32 mb-10 w-full max-w-6xl">
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex items-center gap-6 mb-4">
              <span className="p-5 rounded-full bg-gray-200 h-20 flex justify-center items-center text-[#41349D] font-bold text-3xl w-20">
                1
              </span>
              <h1 className="text-2xl font-medium text-gray-800">
                Create your pet's profile
              </h1>
            </div>
            <ul className="list-disc list-inside ml-10 text-gray-700 space-y-2">
              <li>
                Their breed, age, size, any health conditions, microchip status,
                and if they’ve been neutered.
              </li>
              <li>
                Description of their personality, habits, likes and dislikes,
                how much exercise they’re used to.
              </li>
              <li>
                What sort of home they need. Could they potentially live with
                other pets or children?
              </li>
              <li>Are they used to having a garden or outdoor access?</li>
            </ul>
          </div>
          <Image
            src={how1}
            alt="Step 1 illustration"
            className="flex-shrink-0"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-32 w-full max-w-6xl">
          <Image
            src={how2}
            alt="Step 2 illustration"
            className="flex-shrink-0"
          />
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex items-center gap-6 mb-4">
              <span className="p-5 rounded-full bg-gray-200 h-20 flex justify-center items-center text-[#41349D] font-bold text-3xl w-20">
                2
              </span>
              <h1 className="text-2xl font-medium text-gray-800">
                Get your pet's profile approved
              </h1>
            </div>
            <ul className="list-disc list-inside ml-10 text-gray-700 space-y-2">
              <li>Check your pet’s profile thoroughly</li>
              <li>If we’re happy, we’ll post your pet’s profile on the site</li>
              <li>We may call you to clarify any points that we need to</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
