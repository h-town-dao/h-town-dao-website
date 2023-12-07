import Image from "next/image";
import { info } from "@/data/data";
import Header from "@/components/Header";

export default function Home() {
  const create_link = (name: string, link: string) => {
    return (
      <a className='text-blue-500' href={link} target='_blank' rel='noopener noreferrer'>
        {name}
      </a>
    );
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-10 lg:p-24 '>
      <div className='w-full max-w-6xl text-white font-mono text-xl uppercase grid gap-5 lg:grid-cols-1'>
        <Header />
      </div>
      <div className='w-full max-w-6xl text-white font-mono text-xl grid gap-5 lg:grid-cols-2'>
        <div className='text-left'>Mission Statement:</div>
        {info.mission_statement}
      </div>
      <div className='w-full max-w-6xl text-white font-mono text-xl grid gap-5 lg:grid-cols-2'>
        <div>How to Get involved:</div>
        <ul>
          <li>Follow us on {create_link("Instagram", info.instagram_link)}</li>
          <li>
            Attend our {create_link("Ethereum", info.ethereum_meetup_link)} and{" "}
            {create_link("Web3", info.web3_meetup_link)} Meetups
          </li>
          <li>Contribute to our open-source project on {create_link("Github", info.github_link)} </li>
        </ul>
      </div>
    </main>
  );
}
