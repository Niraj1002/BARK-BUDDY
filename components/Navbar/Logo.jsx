// Logo.jsx
import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.jpg";

const Logo = () => (
  <Link href="/">
    <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
      {/* <BookOpenIcon className="w-7 h-7 text-blue-600" /> */}
      <Image src={logo} className="h-10 w-10" />
      <span>BARKBUDDY</span>
    </div>
  </Link>
);

export default Logo;
