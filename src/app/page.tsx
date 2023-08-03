import Image from "next/image";
import { info } from "@/data/data";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-10 lg:p-24 '>
      <div className='w-full max-w-6xl text-white font-mono text-xl uppercase grid gap-5 lg:grid-cols-1'>
        H-Town DAO
      </div>
      <div className='w-full max-w-6xl text-white font-mono text-xl grid gap-5 lg:grid-cols-2'>
        <div className='text-left'>Mission Statement:</div>
        {info.mission_statement}
      </div>
      <div className='w-full max-w-6xl text-white font-mono text-xl grid gap-5 lg:grid-cols-2'>
        <div>How to Get involved:</div>
        <ul>
          <li>
            Follow us on{" "}
            <a className='text-blue-500' href={info.instagram_link}>
              Instagram
            </a>{" "}
            and{" "}
            <a className='text-blue-500' href={info.twitter_link}>
              Twitter
            </a>
          </li>
          <li>
            Attend our{" "}
            <a className='text-blue-500' href={info.ethereum_meetup_link}>
              Ethereum
            </a>{" "}
            and{" "}
            <a className='text-blue-500' href={info.web3_meetup_link}>
              Web3
            </a>{" "}
            Meetups
          </li>
          <li>
            Contribute to our open-source project on{" "}
            <a className='text-blue-500' href={info.github_link}>
              Github
            </a>{" "}
          </li>
        </ul>
      </div>
    </main>
  );
}
