import SectionHeader from '../shared/SectionHeader';
import Container from '../shared/Container';
import PocketCard from './PocketCard';
import icon_1 from '../../../public/assets/pockets/packets-icons/1-icon.svg';
import icon_2 from '../../../public/assets/pockets/packets-icons/2-icon.svg';
import icon_3 from '../../../public/assets/pockets/packets-icons/3-icon.svg';
import icon_4 from '../../../public/assets/pockets/packets-icons/4-icon.svg';
import icon_5 from '../../../public/assets/pockets/packets-icons/5-icon.svg';
import SectionContainer from '../shared/SectionContainer';

const pocketsIcon = [
  {
    img: icon_1,
    description:
      'Scale your business with confidence knowing your app will support it.',
  },
  {
    img: icon_2,
    description:
      'Develop long-term relationships with each customer through a personalized shopping experience.',
  },
  {
    img: icon_3,
    description:
      'Tailor-made mobile apps that make your user experience more inviting.',
  },
  {
    img: icon_4,
    description: 'Build trust in your products and services.',
  },
  {
    img: icon_5,
    description: 'Promote your offers to a wider audience base.',
  },
];

export default function Pockets() {
  return (
    <>
      <Container className="py-[120px]">
        <SectionContainer>
          <div className="flex justify-center pb-[80px]">
            <SectionHeader
              firstTitle="Live In Your"
              secondTitle="Customer’s Pockets"
              thirdTitle="!"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            {pocketsIcon.map((pocket, index) => (
              <PocketCard
                key={index}
                img={pocket.img}
                description={pocket.description}
              />
            ))}
          </div>
        </SectionContainer>
      </Container>
    </>
  );
}
