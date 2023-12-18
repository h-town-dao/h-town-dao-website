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

const MenuItem: React.FC<MenuItemProps> = ({ tag, link }) => {
  return (
    <div className='menu-item'>
      <Link href={link}>{tag}</Link>
    </div>
  );
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='header'>
      <div className='flex justify-between w-full mx-auto'>
        <Link href='/'>
          <div className='logo'>
            <div>h-town dao</div>
          </div>
        </Link>

        <div className='lg:hidden'>
          <span className='text-2xl cursor-pointer' onClick={toggleMenu} onMouseDown={(e) => e.preventDefault()}>
            {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </span>
        </div>

        {/* Conditionally render this div based on menuOpen state */}
        {menuOpen && (
          <div className='right flex flex-col gap-5'>
            <MenuItem tag='About Us' link='/about-us' />
            <MenuItem tag='Schedule' link='/schedule' />
            <MenuItem tag='Contact' link='/contact' />
          </div>
        )}

        {/* Always visible on larger screens */}
        <div className='menu-container'>
          {/* Always visible on larger screens */}
          <div className='hidden right lg:flex gap-5'>
            <MenuItem tag='About Us' link='/about-us' />
            <MenuItem tag='Schedule' link='/schedule' />
            <MenuItem tag='Contact' link='/contact' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
