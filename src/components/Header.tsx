"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

import { info } from "@/data/data";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const styling =
    "m-1 p-1 rounded text-xl lg:block lg:pr-2 text-center hover:cursor-pointer hover:bg-white hover:text-black";

  const MenuItem = ({ tag, link }: { tag: string; link: string }) => {
    return (
      <div className={`${menuOpen ? "block" : "hidden"} ${styling}`} onClick={toggleMenu}>
        <Link href={link}>{tag}</Link>
      </div>
    );
  };

  return (
    <div className='grid gap-5 lg:gap-20 grid-cols-2'>
      <div className='lg:flex-grow lg:justify-self-start '>
        <Link href='/'>
          <div className='font-raleway text-4xl uppercase'>
            <div>h-town dao</div>
          </div>
        </Link>
      </div>
      <div className='justify-self-end lg:hidden'>
        <span
          className='text-2xl text-center text-white rounded-lg cursor-pointer'
          onClick={toggleMenu}
          onMouseDown={(e) => e.preventDefault()} // Add this line
        >
          {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </span>
      </div>
      <div className='lg:flex lg:justify-self-end pb-5'>
        <MenuItem tag='About Us' link='/about-us' />
        <MenuItem tag='Schedule' link='/portfolio' />
        {/* <MenuItem tag='Resources' link='/resources' /> */}
        {/* <div className={`${menuOpen ? "block" : "hidden"} ${styling}`}>
          <Link href={info.forms.consultancy_request} target='_blank' rel='noopener noreferrer'>
            Contact
          </Link>
        </div> */}
        <MenuItem tag='Contact' link='/contact' />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;
