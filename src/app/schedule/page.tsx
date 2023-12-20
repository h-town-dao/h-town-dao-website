import { info } from "@/data/data";
import Image from "next/image";

const Schedule = () => {
  return (
    <div className=''>
      <div className='flex text-3xl pt-10 justify-center'>2024 Houston Web3 Schedule</div>
      <div className='pt-5'>
        <div className='lg:grid grid-cols-2 gap-5 w-full'>
          <div className='flex justify-center items-center'>
            <img className='w-80 h-80' src={info.schedule[202402].image} />
          </div>
          <div className=''>
            <div className='text-3xl text-center'>Cartesi - Feb 12</div>
            {info.schedule[202402].description}
          </div>
        </div>
        <br />
        <div className='lg:grid grid-cols-2 gap-5'>
          <div className='flex justify-center items-center'>
            <img className='w-80 h-80' src={info.schedule[202403].image} />
          </div>
          <div className=''>
            <div className='text-3xl text-center'>Mining - March 15</div>
            {info.schedule[202403].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
