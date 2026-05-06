import Container from '../shared/Container';
import Image from 'next/image';
import promo_1 from '@/public/assets/promotional/promo_1.png';
import SectionContainer from '../shared/SectionContainer';

export default function PromoBanner_1() {
  return (
    <section className="bg-primary-gradient">
      <Container>
        <SectionContainer className="flex flex-col md:flex-row items-center justify-between gap-10 ">
          {/* Left Content */}
          <div>
            <h1 className="text-gradient text-4xl font-bold leading-tight pb-[60px]">
              Take Your Business To The <br /> Next Level With Pitaya’s <br />
              Mobile Solutions
            </h1>

            <button className="btn-primary  py-3 px-14 whitespace-nowrap">
              Create Your Mobile App
            </button>
          </div>

          {/* Right Image */}
          <div className="relative  bottom-16">
            <Image
              src={promo_1}
              alt="promo banner"
              width={580}
              height={580}
              className="object-cover"
              priority
            />
          </div>
        </SectionContainer>
      </Container>
    </section>
  );
}
