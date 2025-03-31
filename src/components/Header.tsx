// ./src/components/header.tsx

'use client';

import '@/styles/header.css';

import Link from 'next/link';
import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';

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
      <Link className="menu-item" onClick={toggleMenu} href={link}>
        {tag}
      </Link>
    );
  };

  return (
    <div className="header flex flex-col">
      <div className="flex justify-between items-center w-full mx-auto relative z-50">
        <Link onClick={menuOpen ? toggleMenu : undefined} className="lg:w-1/3 w-1/2" href="/">
          <Image 
            src="/h-town-dao.png" 
            alt="H-Town DAO Logo"
            width={135}
            height={34}
            priority
            className="w-auto h-auto"
          />
        </Link>

        <div className="flex items-center">
          <div className="lg:hidden">
            <span className="text-2xl cursor-pointer" onClick={toggleMenu} onMouseDown={(e) => e.preventDefault()}>
              {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
            </span>
          </div>

          {/* Desktop menu */}
          <nav className="hidden lg:flex gap-5">
            <MenuItem tag="About Us" link="/about-us" />
            <MenuItem tag="Schedule" link="/schedule" />
            <MenuItem tag="Members" link="/members" />
            <MenuItem tag="Contributors" link="/contributors" />
            <MenuItem tag="Blog" link="/blog" />
          </nav>
        </div>

        {/* Mobile menu overlay */}
        <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-95 z-40 ${menuOpen ? 'block' : 'hidden'}`}>
          <button 
            onClick={toggleMenu}
            className="absolute top-8 right-8 text-3xl p-2 hover:text-gray-400 transition-colors duration-200"
            aria-label="Close menu"
          >
            <RxCross1 />
          </button>
          <nav className="flex flex-col items-center justify-center h-screen gap-8 text-2xl">
            <MenuItem tag="About Us" link="/about-us" />
            <MenuItem tag="Schedule" link="/schedule" />
            <MenuItem tag="Members" link="/members" />
            <MenuItem tag="Contributors" link="/contributors" />
            <MenuItem tag="Blog" link="/blog" />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
