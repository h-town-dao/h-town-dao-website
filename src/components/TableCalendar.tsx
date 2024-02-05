import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    const mockEvents: Event[] = [
      { name: 'Cartesi Breakdown', date: '2024-02-19', organizer: 'Web3', location: 'The Ion', meetup: 'https://www.meetup.com/htownweb3/events/298531554/' },
      { name: 'Bitcoin Mining', date: '2024-03-15', organizer: 'Web3', location: 'The Pink House' },
      {
        name: 'Intro to Zero Knowledge Proofs',
        date: '2023-11-29',
        organizer: 'Ethereum',
        location: 'The Ion',
        meetup: 'https://www.meetup.com/houstonethereum/events/297081548/',
      },
      { name: 'Building Community in AI', date: '2024-03-02', organizer: 'Global AI Bootcamp', location: 'Microsoft Technology Center' },
      { name: 'HBA Monthly Meetup', date: '2024-02-07', organizer: 'Houston Blockchain Alliance', location: 'The Cannon', meetup: 'https://lu.ma/g16iw99l' },
      { name: "Web3 Evolution: What's Coming Next?", date: '2024-04-15', organizer: 'Rocket Network', location: 'Post' },
      //   { name: 'Product Development', date: '2024-01-15', organizer: 'Wade', location: 'Improving' },
      // ... more events
    ];
    mockEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    setEvents(mockEvents);
  }, []);

  return (
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
        {events.map((event, index) => (
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
  );
};

export default TableCalendar;
