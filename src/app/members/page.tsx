'use client';

import TableJobs from '@/components/TableJobs';
import { info } from '@/data/data';
import Image from 'next/image';
import { useState } from 'react';

const Members = () => {
  const [filterEnabled, setFilterEnabled] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState('jobs');

  const handleClick = (status: string) => {
    setCurrentPage(status);
    console.log(status);
  };

  const styling = 'm-1 p-1 rounded block text-center hover:cursor-pointer hover:underline';

  return (
    <div>
      <div className="text-sm font-medium text-center border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap justify-end -mb-px">
          <li className="mr-2">
            <span className={styling} onClick={() => handleClick('members')}>
              Membership
            </span>
          </li>
          <li className="mr-2">
            <span className={styling} onClick={() => handleClick('jobs')}>
              Jobs
            </span>
          </li>
        </ul>
      </div>
      <div className="animate-fadeIn">
        {currentPage === 'members' && (
          <>
            <div className="flex text-3xl pt-10 justify-center">NFT Membership</div>
            <div className="pt-5 pb-5">
              <img className=" rounded-2xl" src="/images/pages/coming_soon.webp" alt="coming soon" />
            </div>
          </>
        )}
        {currentPage === 'jobs' && (
          <>
            <div className="flex text-3xl pt-10 justify-center">Job Listings</div>
            <div className="pt-5 pb-20">
              <TableJobs />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Members;
