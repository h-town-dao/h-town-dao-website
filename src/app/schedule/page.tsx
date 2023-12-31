import { info } from "@/data/data";
import Image from "next/image";

type BioSectionProps = {
  title: string;
  imageUrl: string;
  description: string;
};

const BioSection: React.FC<BioSectionProps> = ({ title, imageUrl, description }) => {
  return (
    <div className='lg:grid grid-cols-2 gap-5 pb-5'>
      <div className='flex justify-center items-center'>
        <img className='w-80 h-80 pb-5' src={imageUrl} alt='Bio Image' />
      </div>
      <div className=''>
        <div className='text-2xl text-center pb-5'>{title}</div>
        <div className=''>{description}</div>
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className=''>
      <div className='flex text-3xl pt-10 justify-center'>2024 Houston Web3 Schedule</div>
      <div className='pt-5 pb-5'>
        <BioSection
          title={info.schedule[202402].title}
          imageUrl={info.schedule[202402].image}
          description={info.schedule[202402].description}
        />
        <BioSection
          title={info.schedule[202403].title}
          imageUrl={info.schedule[202403].image}
          description={info.schedule[202403].description}
        />
      </div>
    </div>
  );
};

export default Schedule;
