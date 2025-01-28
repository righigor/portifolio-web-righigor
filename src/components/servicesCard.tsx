/* eslint-disable react/no-multi-comp */
/* eslint-disable react/function-component-definition */
/* eslint-disable max-len */
import { Service } from '../types/Services';
import { CardSpotlight } from './ui/card-spotlight';

interface ServicesCardProps {
  service: Service;
}

export function CardSpotlightDemo({ service }: ServicesCardProps) {
  return (
    <CardSpotlight className="w-full">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          {service.name}
        </p>
        <span>{service.icon}</span>
      </div>
      <div className="text-neutral-200 mt-4 relative z-20 text-justify">
        {service.idealFor}
        <ul className="list-none  mt-2">
          {service.includes.map((item, i) => (
            <Step key={ i } title={ item } />
          ))}
        </ul>
      </div>
      <p className="text-white mt-4 relative z-20 text-sm">
        {service.deliveryTime}
      </p>
      <div className="flex align-middle justify-center items-center p-2 flex-col md:flex-row lg:flex-row">
        <p className="text-neutral-300 mt-4 relative z-20 text-sm md:w-2/3 lg:w-2/3 w-full">
          {service.additionalInfo}
        </p>
        <a
          href={ service.whatsappButton.url }
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 text-white md:w-1/3 md:p-2 lg:w-1/3 lg:p-2 text-sm items-center align-middle justify-center flex  text-center p-4 rounded-full duration-500 ease-in-out mt-4 relative z-20 hover:bg-green-800"
        >
          {service.whatsappButton.text}
        </a>
      </div>
    </CardSpotlight>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
