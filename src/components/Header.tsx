// ./src/components/header.tsx

"use client";

import "@/styles/header.css";

import Link from "next/link";
import React, { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

interface MenuItemProps {
  tag: string;
  link: string;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const MenuItem: React.FC<MenuItemProps> = ({ tag, link }) => {
    return (
      <div className='menu-item'>
        <Link onClick={toggleMenu} href={link}>
          {tag}
        </Link>
      </div>
    );
  };

  return (
    <div className='header flex flex-col'>
      <div className='flex justify-between items-center w-full mx-auto p-4 relative'>
        <Link className='logo' href='/'>
          <div>h-town dao</div>
        </Link>

        <div className='flex items-center'>
          <div className='lg:hidden'>
            <span className='text-2xl cursor-pointer' onClick={toggleMenu} onMouseDown={(e) => e.preventDefault()}>
              {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
            </span>
          </div>

          {/* Always visible on larger screens */}
          <div className='hidden lg:flex gap-5'>
            <MenuItem tag='About Us' link='/about-us' />
            <MenuItem tag='Schedule' link='/schedule' />
            <MenuItem tag='Contact' link='/contact' />
          </div>
        </div>

        {/* Conditionally render this div based on menuOpen state */}
        {menuOpen && (
          <div className='lg:hidden flex flex-col absolute top-full left-0 w-full border-solid border-2'>
            <MenuItem tag='About Us' link='/about-us' />
            <MenuItem tag='Schedule' link='/schedule' />
            <MenuItem tag='Contact' link='/contact' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
