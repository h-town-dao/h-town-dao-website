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
          <th className="border-r p-2">Organizer</th>
          <th className="border-r p-2">Location</th>
          <th className="border-r p-2">Meetup</th>
          <th className="p-2">Eventbrite</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr className="border-b" key={index}>
            <td className="border-r p-2">{event.name}</td>
            <td className="border-r p-2">{event.date}</td>
            <td className="border-r p-2">{event.organizer}</td>
            <td className="border-r p-2">{event.location}</td>
            <td className="border-r p-2 justify-center">
              {event.meetup && (
                <button className="border text-black bg-white px-2 py-1 rounded mx-auto flex">
                  <a href={event.meetup}>Sign up</a>
                </button>
              )}
            </td>
            <td className="p-2 justify-center">
              {event.eventbrite && (
                <button className="border text-black bg-white px-2 py-1 rounded mx-auto flex">
                  <a href={event.eventbrite}>Sign up</a>
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCalendar;
