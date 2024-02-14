import React, { useState, useEffect } from 'react';
import { job_info } from '@/data/jobs';

interface Job {
  name: string;
  date: string;
  company: string;
  type: string;
  location: string;
  link: string;
}

const TableCalendar: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Job[]>([]);
  const [filterEnabled, setFilterEnabled] = useState<boolean>(true);

  const toggleFilter = () => {
    setFilterEnabled(!filterEnabled);
  };

  function truncateText(text: string) {
    if (text.length > 20) {
      return text.substring(0, 20) + '...';
    } else {
      return text;
    }
  }

  useEffect(() => {
    const mockJobs: Job[] = job_info;

    mockJobs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    // const filtered = mockJobs.filter((job) => {
    //   const eventDate = new Date(job.date);
    //   eventDate.setHours(eventDate.getHours() + 6);
    //   console.log(eventDate);

    //   const currentDate = new Date();
    //   currentDate.setHours(0, 0, 0, 0);
    //   console.log(currentDate);

    //   console.log(eventDate >= currentDate);

    //   return eventDate >= currentDate;
    // });

    setJobs(mockJobs);
    setFilteredEvents(mockJobs);
  }, [filterEnabled]);

  const styling = 'm-1 p-1 rounded block text-center hover:cursor-pointer hover:underline';
  const jobsToShow = filterEnabled ? filteredEvents : jobs;

  return (
    <div className="animate-fadeIn">
      <div className="text-sm font-medium text-center border-b border-gray-20">
        <ul className="flex flex-wrap justify-end -mb-px">
          <li className="mr-2">
            <span className={styling} onClick={() => toggleFilter()}>
              {filterEnabled ? 'Show all' : 'Upcoming'}
            </span>
          </li>
        </ul>
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="border-b">
            <th className="border-r p-2">Job Name</th>
            <th className="border-r p-2">Date</th>
            <th className="border-r p-2 hidden md:table-cell">Company</th>
            <th className="border-r p-2 hidden md:table-cell">Type</th>
            <th className="border-r p-2 hidden md:table-cell">Location</th>
            <th className="border-r p-2">Link</th>
          </tr>
        </thead>
        <tbody>
          {jobsToShow.map((job, index) => (
            <tr className="border-b" key={index}>
              <td className="border-r p-2">{job.name}</td>
              <td className="border-r p-2">{job.date}</td>
              <td className="border-r p-2 hidden md:table-cell">{job.company}</td>
              <td className="border-r p-2 hidden md:table-cell">{job.type}</td>
              <td className="border-r p-2 hidden md:table-cell">{job.location}</td>
              <td className="border-r p-2 justify-center">
                {job.link && (
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    <button className="border text-black bg-white px-2 rounded mx-auto flex">x</button>
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCalendar;
