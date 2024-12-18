/* eslint-disable max-len */
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
    <Carousel className="bg-gray-800 max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto mt-12">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={ index } className="lg:basis-1/3 md:basis-1/2">
            <div className="flex items-center justify-center p-6">
              <CardSpotlightDemo />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
