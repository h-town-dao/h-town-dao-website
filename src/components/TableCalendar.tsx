import React, { useState, useEffect } from 'react';
import { event_info } from '@/data/events';

interface Event {
  name: string;
  date: string;
  organizer: string;
  location: string;
  meetup?: string;
  eventbrite?: string;
}

const TableCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [filterEnabled, setFilterEnabled] = useState<boolean>(true);

  const toggleFilter = () => {
    setFilterEnabled(!filterEnabled);
  };

  useEffect(() => {
    const mockEvents: Event[] = event_info;

    mockEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const filtered = mockEvents.filter((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(eventDate.getHours() + 6);
      console.log(eventDate);

      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      console.log(currentDate);

      console.log(eventDate >= currentDate);

      return eventDate >= currentDate;
    });

    setEvents(mockEvents);
    setFilteredEvents(filtered);
  }, [filterEnabled]);

  const styling = 'm-1 p-1 rounded block text-center hover:cursor-pointer hover:underline';
  const eventsToShow = filterEnabled ? filteredEvents : events;

  return (
    <div className="animate-fadeIn">
      <div className="text-sm font-medium text-center border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
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
            <th className="border-r p-2">Event Name</th>
            <th className="border-r p-2">Date</th>
            <th className="border-r p-2 hidden md:table-cell">Organizer</th>
            <th className="border-r p-2 hidden md:table-cell">Location</th>
            <th className="border-r p-2">Attend</th>
          </tr>
        </thead>
        <tbody>
          {eventsToShow.map((event, index) => (
            <tr className="border-b" key={index}>
              <td className="border-r p-2">{event.name}</td>
              <td className="border-r p-2">{event.date}</td>
              <td className="border-r p-2 hidden md:table-cell">{event.organizer}</td>
              <td className="border-r p-2 hidden md:table-cell">{event.location}</td>
              <td className="border-r p-2 justify-center">
                {event.meetup && (
                  <a href={event.meetup}>
                    <button className="border text-black bg-white px-2 py-1 rounded mx-auto flex">Sign up</button>
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
