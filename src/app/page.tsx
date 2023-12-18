// ./src/app/page.tsx
import Image from "next/image";
import { info } from "@/data/data";
import "@/styles/main.css";

export default function Home() {
  const create_link = (name: string, link: string) => {
    return (
      <a className='text-blue-500' href={link} target='_blank' rel='noopener noreferrer'>
        {name}
      </a>
    );
  };

  return (
    <main className='main flex-auto flex flex-col h-screen justify-around'>
      <div className=''></div>
      <div className='font-mono'>
        <div className='grid lg:grid-cols-2'>
          <div>Mission Statement:</div>
          {info.mission_statement}
        </div>
      </div>
      <div className='font-mono'>
        <div className='grid lg:grid-cols-2'>
          <div>How to Get involved:</div>
          <ul>
            <li>Follow us on {create_link("Instagram", info.instagram_link)}</li>
            <li>
              Attend our {create_link("Ethereum", info.ethereum_meetup_link)} and{" "}
              {create_link("Web3", info.web3_meetup_link)} Meetups
            </li>
            <li>Contribute to our open-source project on {create_link("Github", info.github_link)}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
