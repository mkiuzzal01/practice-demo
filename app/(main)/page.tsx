import Hero from '../components/hero/Hero';
import HowToWork from '../components/how-to-work/HowToWork';
import Pockets from '../components/pockets/Pockets';
import PromoBanner_1 from '../components/promotional/PromoBanner_1';
import Service from '../components/service/Service';
import WhyWork from '../components/whywork/WhyWork';

export default function page() {
  return (
    <>
      <Hero />
      <Pockets />
      <PromoBanner_1 />
      <WhyWork />
      <HowToWork />
      <Service />
    </>
  );
}
