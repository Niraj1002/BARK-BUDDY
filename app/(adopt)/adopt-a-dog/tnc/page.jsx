import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await currentUser();
  console.log(user);
  const image = user.imageUrl;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex justify-center items-center">
          <Image
            src={image}
            width={150}
            height={150}
            alt="User Image"
            className="rounded-full border-4 border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-lg font-semibold">
            First Name: <span className="font-normal">{user.firstName}</span>
          </p>
          <p className="text-lg font-semibold">
            Last Name: <span className="font-normal">{user.lastName}</span>
          </p>
          <p className="text-lg font-semibold">
            Email:{" "}
            <span className="font-normal">
              {user.emailAddresses[0].emailAddress}
            </span>
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center gap-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the terms and conditions
          </label>
        </div>
        <Link href={`/checkout`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300 shadow-md hover:shadow-lg">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
