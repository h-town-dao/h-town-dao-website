import { info } from '@/data/data';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="animate-fadeIn pb-10">
      <div className="pt-5">
        <img className="rounded-2xl" src="./images/about-us/hack-night.jpg" alt="Bio Image" />
      </div>
      <div>
        <div className="flex text-3xl pt-10 justify-center">About Us</div>
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="mb-4">
          H-Town DAO stands at the forefront of fostering Web3 innovation in Houston. We are a pioneering decentralized autonomous organization (DAO) established with a vision akin to a chamber of
          commerce, dedicated to nurturing the growth and development of the Web3 ecosystem in the vibrant city of Houston.
        </p>

        <h3 className="text-xl font-semibold mb-2">What We Do</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Community Building</strong>: Bringing together a diverse group of Web3 enthusiasts, developers, entrepreneurs, and thought leaders.
          </li>
          <li>
            <strong>Educational Initiatives</strong>: Democratizing knowledge about blockchain, cryptocurrencies, NFTs, and other Web3 technologies.
          </li>
          <li>
            <strong>Facilitating Panels and Events</strong>: Organizing high-impact panels, discussions, and networking events.
          </li>
          <li>
            <strong>Supporting Startups and Projects</strong>: Providing resources and networking opportunities to budding Web3 startups.
          </li>
          <li>
            <strong>Advocacy and Policy Development</strong>: Engaging with policymakers to foster a conducive regulatory environment.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Our Community</h3>
        <p className="mb-4">
          We are a community of forward-thinkers, believers in the power of decentralized technology, and advocates for a more inclusive digital future. Our members range from tech enthusiasts to
          seasoned entrepreneurs, all united by a shared passion for the potential of Web3.
        </p>

        <h3 className="text-xl font-semibold mb-2">Join Us</h3>
        <p>Whether you&#39;re a Web3 veteran or just beginning your journey, H-Town DAO welcomes you. Join us in shaping the future of technology and commerce in Houston.</p>
      </div>
    </div>
  );
};

export default AboutUs;
