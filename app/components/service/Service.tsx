import Container from '../shared/Container';
import serviceImage from '@/public/assets/service/service.png';
import Image from 'next/image';
import icon_1 from '@/public/assets/service/icons/icon-1.svg';
import icon_2 from '@/public/assets/service/icons/icon-2.svg';
import icon_3 from '@/public/assets/service/icons/icon-3.svg';
import icon_4 from '@/public/assets/service/icons/icon-4.svg';
import icon_5 from '@/public/assets/service/icons/icon-5.svg';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: icon_1,
    title: 'Educational platforms & coaching apps',
  },
  {
    icon: icon_2,
    title: 'Ecommerce applications',
  },
  {
    icon: icon_3,
    title: 'Promotional applications',
  },
  {
    icon: icon_4,
    title: 'Entertainment portals',
  },
  {
    icon: icon_5,
    title: 'Community centers',
  },
];

export default function Service() {
  return (
    <div className="bg-primary-gradient">
      <Container className="py-16">
        <div className="flex">
          <div>
            <h1 className="title-primary">
              A Versatile Range Of Services To Suit Your Needs
            </h1>
            <ul className="flex flex-col gap-4 mt-10">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                />
              ))}
            </ul>
          </div>
          <div>
            <Image src={serviceImage} alt="service image" />
          </div>
        </div>
      </Container>
    </div>
  );
}
