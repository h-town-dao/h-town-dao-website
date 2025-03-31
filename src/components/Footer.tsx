'use client';

import '@/styles/footer.css';
import { info } from '@/data/data';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="footer flex justify-between items-start">
      <div>
        <div>H-Town DAO © 2023</div>
        <div>All Rights Reserved</div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <a href={info.links.instagram_link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <Image src="/images/socials/instagram.svg" alt="Instagram" width={20} height={20} className="w-5 h-5" />
        </a>
        <a href={info.links.youtube_link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <Image src="/images/socials/youtube.svg" alt="YouTube" width={20} height={20} className="w-5 h-5 brightness-0 invert" />
        </a>
        <a href={info.links.twitter_link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <Image src="/images/socials/x.png" alt="X (Twitter)" width={20} height={20} className="w-5 h-5" />
        </a>
        <a href={info.links.telegram_link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <Image src="/images/socials/telegram.svg" alt="Telegram" width={20} height={20} className="w-5 h-5" />
        </a>
        <a href={info.links.github_link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <Image src="/images/socials/github.svg" alt="GitHub" width={20} height={20} className="w-5 h-5" />
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
      </div>
    </div>
  );
};

export default Footer;
