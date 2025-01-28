/* eslint-disable max-len */
// import Autoplay from 'embla-carousel-autoplay';
import { servicesList } from '../backend/services';
import { CardSpotlightDemo } from './servicesCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export default function CarouselSection() {
  return (
    <div
      className="bg-gray-900 flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 min-h-screen"
      id="services"
    >
      <h2
        className="text-3xl font-bold text-white text-center mb-8"
      >
        Serviços
      </h2>
      <Carousel
        opts={ {
          align: 'center',
        } }
        className="max-w-[300px] sm:max-w-xs md:max-w-2xl lg:max-w-6xl"
      >
        <CarouselContent className="-ml-4">
          {servicesList.map((service, i) => (
            <CarouselItem key={ i } className="">
              <div className="p-1">
                <CardSpotlightDemo service={ service } />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
