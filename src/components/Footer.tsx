'use client';

import '@/styles/footer.css';
import { info } from '@/data/data';

import Link from 'next/link';
import React, { useState } from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer flex justify-between items-start">
      <div>
        <div>Copyright © 2023 H-Town DAO</div>
        <div>All Rights Reserved</div>
      </div>
      <div className="grid grid-cols-4">
        <a href={info.links.instagram_link} target="_blank" rel="noopener noreferrer">
          <img src="./instagram.svg" alt="instagram" className="max-w-7 max-h-7 mr-2" />
        </a>
        <a className="" href={info.links.twitter_link} target="_blank" rel="noopener noreferrer">
          <img src="./x.png" alt="x twitter" className="max-w-7 max-h-7" />
        </a>
        <a className="" href={info.links.telegram_link} target="_blank" rel="noopener noreferrer">
          <img src="./telegram.svg" alt="telegram" className="max-w-7 max-h-7 mr-2" />
        </a>
        <a className="" href={info.links.github_link} target="_blank" rel="noopener noreferrer">
          <img src="./github.svg" alt="github" className="max-w-7 max-h-7" />
        </a>
      </div>
      <div className="flex">
        <ul>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms">Terms of Use</Link>
          </li>
        </ul>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Footer;
