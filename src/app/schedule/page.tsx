import { info } from '@/data/data';
import Image from 'next/image';

type BioSectionProps = {
  title: string;
  imageUrl: string;
  description: string;
  website?: string;
};

const BioSection: React.FC<BioSectionProps> = ({ title, imageUrl, description, website }) => {
  return (
    <div className="lg:grid grid-cols-2 gap-5 pb-10">
      <div className="flex justify-center items-center">
        <img className="w-80 h-80 rounded-2xl" src={imageUrl} alt="Bio Image" />
      </div>
      <div className="">
        <div className="text-2xl text-center pb-5">{title}</div>
        <div className="">{description}</div>
        {website && (
          <div className="pt-5">
            <span>Website: </span>
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              {website}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="animate-fadeIn">
      <div className="flex text-3xl pt-10 justify-center">2024 Houston Web3 Schedule</div>
      <div className="pt-5 pb-5">
        <BioSection title={info.schedule[2024_02].title} imageUrl={info.schedule[2024_02].image} description={info.schedule[2024_02].description} website={info.schedule[2024_02].website} />
        <BioSection title={info.schedule[2024_03].title} imageUrl={info.schedule[2024_03].image} description={info.schedule[2024_03].description} />
        <BioSection title={info.schedule[2024_04].title} imageUrl={info.schedule[2024_04].image} description={info.schedule[2024_04].description} />
        <BioSection title={info.schedule[2024_05].title} imageUrl={info.schedule[2024_05].image} description={info.schedule[2024_05].description} website={info.schedule[2024_05].website} />
        <BioSection title={info.schedule[2024_06].title} imageUrl={info.schedule[2024_06].image} description={info.schedule[2024_06].description} />
      </div>
    </div>
  );
};

export default Schedule;
