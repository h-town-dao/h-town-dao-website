'use client';

import '@/styles/footer.css';

import Link from 'next/link';
import React, { useState } from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer flex justify-between items-start">
      <div>
        <div>Copyright © 2023 H-Town DAO</div>
        <div>All Rights Reserved</div>
      </div>
      <div className="flex">
        <ul>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
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
