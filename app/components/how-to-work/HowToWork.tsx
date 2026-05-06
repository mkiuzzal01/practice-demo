import Image from 'next/image';
import Container from '../shared/Container';
import SectionHeader from '../shared/SectionHeader';
import WorkProcessCard from './WorkProcessCard';
import separator from '@/public/assets/how-to-work/howWorkSeparator.svg';

const HowToWorkData = [
  {
    id: 1,
    title: 'Reach Out',
    description:
      'Tell us more about your store and what you want the app to achieve.',
    img: '/assets/how-to-work/icon-1.svg',
  },
  {
    id: 2,
    title: 'Receive Your App',
    description:
      'Stay involved in the creation of your app from prototyping to final delivery.',
    img: '/assets/how-to-work/icon-2.svg',
  },
  {
    id: 3,
    title: 'Rinse And Repeat',
    description:
      'Make any edits and implement any suggestions that you believe might improve your app before release.',
    img: '/assets/how-to-work/icon-3.svg',
  },
];

export default function HowToWork() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <SectionHeader
          firstTitle="How Does"
          secondTitle="It Work"
          thirdTitle="?"
        />
      </div>

      <div className="pt-28 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {HowToWorkData.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <WorkProcessCard
                title={item.title}
                desc={item.description}
                image={item.img}
              />

              {/* Separator only between items */}
              {index !== HowToWorkData.length - 1 && (
                <div className="hidden md:block mx-6">
                  <Image src={separator} alt="separator" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
