'use client';

import { info } from '@/data/data';
import Image from 'next/image';
import { useState } from 'react';

type BioSectionProps = {
  title: string;
  imageUrl: string;
  description: string;
  website?: string;
};

const BioSection: React.FC<BioSectionProps> = ({ title, imageUrl, description, website }) => {
  return (
    <div className="lg:grid grid-cols-2 gap-5 pb-10">
      <div className="flex justify-center items-center pb-3">
        <img className="w-80 h-80 rounded-2xl" src={imageUrl} alt="Bio Image" />
      </div>
      <div className="">
        <div className="text-2xl text-center pb-5">{title}</div>
        <div className="">{description}</div>
        {website && (
          <div className="pt-5">
            <span>Website: </span>
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              {website}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const styling = 'm-1 p-1 rounded block text-center hover:cursor-pointer hover:underline';

const Schedule = () => {
  const [currentPage, setCurrentPage] = useState('contributors');

  const handleClick = (status: string) => {
    setCurrentPage(status);
    console.log(status);
  };

  return (
    <div>
      <div className="text-sm font-medium text-center border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap justify-end -mb-px">
          <li className="mr-2">
            <span className={styling} onClick={() => handleClick('contributors')}>
              Contributors
            </span>
          </li>
          <li className="mr-2">
            <span className={styling} onClick={() => handleClick('supporters')}>
              Supporters
            </span>
          </li>
        </ul>
      </div>
      <div className="animate-fadeIn">
        {currentPage === 'contributors' && (
          <>
            <div className="flex text-3xl pt-10 justify-center">DAO Contributors</div>
            <div className="pt-5 pb-5">
              <BioSection title={info.team.giorgio.name} imageUrl={info.team.giorgio.image} description={info.team.giorgio.bio} website={info.team.giorgio.website} />
              {/* <BioSection title={info.team.margaret.name} imageUrl={info.team.margaret.image} description={info.team.margaret.bio} /> */}
            </div>
          </>
        )}
        {currentPage === 'supporters' && (
          <>
            <div className="flex text-3xl pt-10 justify-center">DAO Supporters</div>
            <div className="pt-5 pb-5 flex w-auto justify-center gap-5">
              <a href="https://spindletop.digital/" target="_blank" rel="noopener noreferrer" className="flex justify-center w-1/2">
                <img src="/images/sponsors/spindletop.png" alt="" className="object-contain" />
              </a>
              <a href="https://bitangels.network/" target="_blank" rel="noopener noreferrer" className="flex justify-center w-1/2">
                <img src="/images/sponsors/bitangels.png" alt="" className="object-contain" />
              </a>
            </div>
            <div className="pt-5 pb-10 flex w-auto justify-center gap-5">
              <a href="https://levelk.io/" target="_blank" rel="noopener noreferrer" className="flex justify-center w-1/2">
                <img src="/images/sponsors/level_k.png" alt="LEVEL K" className="object-contain" />
              </a>
              <a href="https://www.rocketnetwork.ai/" target="_blank" rel="noopener noreferrer" className="flex justify-center w-1/2">
                <img src="/images/sponsors/rocket_network.png" alt="" className="object-contain" />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Schedule;
