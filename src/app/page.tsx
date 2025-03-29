// ./src/app/page.tsx
import Image from 'next/image';
import { info } from '@/data/data';
import '@/styles/main.css';

export default function Home() {
  const create_link = (name: string, link: string) => {
    return (
      <a className="text-blue-500" href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    );
  };

  return (
    <main className="main flex-auto flex flex-col items-center gap-24 py-24">
      <div className="font-mono w-full">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="text-xl font-semibold">Mission Statement:</div>
          <div>{info.mission_statement}</div>
        </div>
      </div>
      <div className="font-mono w-full">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="text-xl font-semibold">How to get involved:</div>
          <ul className="space-y-2">
            <li>Follow us on {create_link('Instagram', info.links.instagram_link)}</li>
            <li>
              Attend our {create_link('Web3', info.links.web3_meetup_link)} and {create_link('Ethereum', info.links.ethereum_meetup_link)} Meetups
            </li>
            <li>Contribute to our project on {create_link('Github', info.links.github_link)}</li>
            <li>Fill out the H-Town DAO interest {create_link('Form', info.links.google_interest_form)}</li>
            <li>Fill out Web3 speaker {create_link('Form', info.links.google_speaker_form)}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
