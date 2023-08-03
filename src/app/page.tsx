import Image from "next/image";
import { info } from "@/data/data";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-full max-w-5xl items-center justify-between font-mono text-xl uppercase'>H-Town DAO</div>
      <div className='w-full max-w-5xl items-center justify-between font-mono text-xl lg:flex w-full'>
        <div>Mission Statement:</div>
        {info.mission_statement}
      </div>
      <div className='flex flex-row max-w-5xl items-center justify-between font-mono text-xl lg:flex w-full'>
        <div>How to Get involved:</div>
        <ul>
          <li>
            Follow us on{" "}
            <a className='text-blue-500' href='https://www.instagram.com/htxweb3/'>
              Instagram
            </a>
          </li>
          <li>
            Attend our{" "}
            <a className='text-blue-500' href='https://www.meetup.com/houstonethereum/'>
              Ethereum
            </a>{" "}
            and{" "}
            <a className='text-blue-500' href='https://www.meetup.com/htownweb3/'>
              Web3
            </a>{" "}
            Meetups
          </li>
          <li>
            Contribute to our open-source project on{" "}
            <a className='text-blue-500' href='https://github.com/h-town-dao'>
              Github
            </a>{" "}
          </li>
        </ul>
      </div>
    </main>
  );
}
