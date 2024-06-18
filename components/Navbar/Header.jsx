// Header.jsx
"use client";
import React, { useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { LINKS } from "@/constants/index";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";

const Header = () => {
  const { sessionId } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full z-95 fixed top-0 left-0 mb-5">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Logo />
        <MenuToggle open={open} setOpen={setOpen} />
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {LINKS.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.id}>
              <a
                href={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          {sessionId ? (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <UserButton />
            </li>
          ) : (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
