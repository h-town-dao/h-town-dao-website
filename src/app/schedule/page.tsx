'use client';

import TableCalendar from '@/components/TableCalendar';
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

const Schedule = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState('calendar');

  const handleClick = (status: string) => {
    setCurrentPage(status);
    console.log(status);
  };

  const styling = 'm-1 p-1 rounded block text-center hover:cursor-pointer hover:bg-white hover:text-black';

  return (
    <div className="animate-fadeIn">
      <div className="text-sm font-medium text-center border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap justify-end -mb-px">
          <li className="mr-2">
            <span className={styling} onClick={() => handleClick('2023')}>
              2023
            </span>
          </li>
          <li className="mr-2">
            <span className={styling} aria-current="page" onClick={() => handleClick('2024')}>
              2024
            </span>
          </li>
          <li className="mr-2">
            <span className={styling} onClick={() => handleClick('calendar')}>
              Calendar
            </span>
          </li>
        </ul>
      </div>
      {currentPage === 'calendar' && (
        <>
          <div className="flex text-3xl pt-10 justify-center">Upcoming Events</div>
          <div className="pt-5 pb-5">
            <TableCalendar />
          </div>
        </>
      )}
      {currentPage === '2023' && (
        <>
          <div className="flex text-3xl pt-10 justify-center">2023 Schedule</div>
          <div className="pt-5 pb-5">
            <BioSection title={info.schedule[2023_06].title} imageUrl={info.schedule[2023_06].image} description={info.schedule[2023_06].description} website={info.schedule[2023_06].website} />
          </div>
        </>
      )}
      {currentPage === '2024' && (
        <>
          <div className="flex text-3xl pt-10 justify-center">2024 Schedule</div>
          <div className="pt-5 pb-5">
            <BioSection title={info.schedule[2024_02].title} imageUrl={info.schedule[2024_02].image} description={info.schedule[2024_02].description} website={info.schedule[2024_02].website} />
            <BioSection title={info.schedule[2024_03].title} imageUrl={info.schedule[2024_03].image} description={info.schedule[2024_03].description} website={info.schedule[2024_03].website} />
            <BioSection title={info.schedule[2024_04].title} imageUrl={info.schedule[2024_04].image} description={info.schedule[2024_04].description} website={info.schedule[2024_04].website} />
            <BioSection title={info.schedule[2024_05].title} imageUrl={info.schedule[2024_05].image} description={info.schedule[2024_05].description} website={info.schedule[2024_05].website} />
            <BioSection title={info.schedule[2024_06].title} imageUrl={info.schedule[2024_06].image} description={info.schedule[2024_06].description} website={info.schedule[2024_06].website} />
          </div>
        </>
      )}
    </div>
  );
};

export default Schedule;
