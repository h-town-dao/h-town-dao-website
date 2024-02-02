// ./src/components/footer.tsx

'use client';

import '@/styles/footer.css';

import Link from 'next/link';
import React, { useState } from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="flex justify-center">Copyright © 2023 H-Town DAO</div>
      <div>All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
