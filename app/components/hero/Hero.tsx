import Container from '../shared/Container';
import Image from 'next/image';
import banner from '@/public/assets/hero/hero.png';
import PrimaryButton from '../shared/PrimaryButton';
import SectionContainer from '../shared/SectionContainer';

export default function Hero() {
  return (
    <>
      <Container>
        <SectionContainer className="py-[120px]">
          <div className="flex justify-center items-center">
            {/* Left */}
            <div className="text-center lg:text-left max-w-[600px] space-y-6">
              <div className="text-[56px]">
                <h1 className="title-primary">Developing Impressive Mobile</h1>
                <h1 className="title-primary">mobile Applications</h1>
                <h1 className="title-primary">Has never Been Easier</h1>
              </div>

              <p className="text-2xl font-normal max-w-[528px]">
                Develop outstanding mobile platforms that can help you improve
                your customer experience and own 100% of your store&apos;s data.
              </p>

              <PrimaryButton
                title="Start Here!"
                className="px-[150px] py-[14.5px]"
              />
            </div>

            {/* Right */}
            <div className="w-[539.063px] h-[600px]">
              <Image
                src={banner}
                alt="Hero"
                className="w-full h-full"
                priority
              />
            </div>
          </div>
        </SectionContainer>
      </Container>
    </>
  );
}
