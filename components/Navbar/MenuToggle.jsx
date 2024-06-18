// MenuToggle.jsx
import React from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const MenuToggle = ({ open, setOpen }) => (
  <div
    onClick={() => setOpen(!open)}
    className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
  >
    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
  </div>
);

export default MenuToggle;
