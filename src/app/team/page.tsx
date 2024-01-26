import { info } from '@/data/data';
import Image from 'next/image';

type BioSectionProps = {
  title: string;
  imageUrl: string;
  description: string;
  website: string;
};

const BioSection: React.FC<BioSectionProps> = ({ title, imageUrl, description, website }) => {
  return (
    <div className="lg:grid grid-cols-2 gap-5 pb-10">
      <div className="flex justify-center items-center">
        <img className="w-80 h-80 rounded-2xl" src={imageUrl} alt="Bio Image" />
      </div>
      <div className="pt">
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
    <div className="">
      <div className="flex text-3xl pt-10 justify-center">H-Town DAO Team</div>
      <div className="pt-5 pb-5">
        <BioSection title={info.team.giorgio.name} imageUrl={info.team.giorgio.image} description={info.team.giorgio.bio} website={info.team.giorgio.website} />
        <BioSection title={info.team.margaret.name} imageUrl={info.team.margaret.image} description={info.team.margaret.bio} />
      </div>
    </div>
  );
};

export default Schedule;
