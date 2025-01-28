import CarouselSection from '../components/carouselSection';
import ContatoSection from '../components/contatoSection';
import HeroIcon from '../components/heroIcon';
import { JobsSection } from '../components/jobsSection';
import { NavBar } from '../components/navbar';
import StacksSection from '../components/stacksSection';

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroIcon />
      <StacksSection />
      <CarouselSection />
      <JobsSection />
      <ContatoSection />
    </>
  );
}
