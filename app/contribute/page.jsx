// pages/contribute.js

import React from "react";
import Head from "next/head";
import Link from "next/link";

const Contribute = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Contribute to BARKBUDDY</title>
        <meta name="description" content="Ways to contribute to BARKBUDDY" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Contribute to <span className="text-indigo-600">BARKBUDDY</span>
        </h1>

        <p className="text-center text-lg text-gray-700 mb-8">
          Recognizing the importance of community support, BARKBUDDY offers
          multiple ways for individuals to contribute to the cause.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/contribute/donate">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Donate Money &rarr;
              </h2>
              <p className="text-gray-700">
                Support us financially to help us reach more dogs in need.
              </p>
            </div>
          </Link>

          <Link href="/contribute/volunteer">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Volunteer Your Time &rarr;
              </h2>
              <p className="text-gray-700">
                Join us as a volunteer and make a direct impact on the lives of
                dogs.
              </p>
            </div>
          </Link>

          <Link href="/contribute/provide-food">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Provide Food &rarr;
              </h2>
              <p className="text-gray-700">
                Donate food to ensure that no dog goes hungry.
              </p>
            </div>
          </Link>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Offer Expertise &rarr;
            </h2>
            <p className="text-gray-700">
              Share your skills in training or veterinary services to help dogs
              in need.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contribute;
