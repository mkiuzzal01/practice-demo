import Container from '../shared/Container';
import Image from 'next/image';
import whyWorkImage from '@/public/assets/whywork/whywork.png';
import SectionHeader from '../shared/SectionHeader';

export default function WhyWork() {
  const options = [
    {
      id: 1,
      title: '60-Day commission free.',
    },
    {
      id: 2,
      title: '30-Day free trial.',
    },
    {
      id: 3,
      title: 'U.S. customer support Monday-Sunday.',
    },
    {
      id: 4,
      title: 'Extensive knowledge of social media integrations.',
    },
    {
      id: 5,
      title: 'Referral system.',
    },
  ];
  return (
    <>
      <Container className="py-20">
        <div className="flex justify-between items-start gap-4">
          <div className="w-1/2">
            <Image
              src={whyWorkImage}
              width={670}
              height={695}
              alt="Why Work Image"
            />
          </div>
          <div className="w-1/2 space-y-6">
            <div>
              <SectionHeader
                firstTitle="Why Work"
                secondTitle="With Us Sofvence"
                thirdTitle="?"
              />
            </div>
            <div>
              <p className="text-neutral-700">
                What makes Pitaya different is that we combine our business
                experience with our mobile app development expertise. We develop
                apps that look stunning, function perfectly, and serve the
                business&apos;s needs.
              </p>

              <ul>
                {options.map((option) => (
                  <li
                    key={option.id}
                    className="list-gradient text-neutral-800"
                  >
                    {option.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button className="btn-primary">Let’s Build Your App</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
