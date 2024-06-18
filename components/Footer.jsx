import React from "react";
import { COMPANY_LINKS, SUPPORT_LINKS, SOCIAL_LINKS } from "@/constants/index";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <ul>
            {COMPANY_LINKS.map((link, index) => (
              <li key={index}>
                <a href={link.link} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <ul>
            {SUPPORT_LINKS.map((link, index) => (
              <li key={index}>
                <a href={link.link} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            {SOCIAL_LINKS.map((link, index) => (
              <li key={index}>
                <a href={link.link} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p className="text-sm">
          &copy; 2024 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
