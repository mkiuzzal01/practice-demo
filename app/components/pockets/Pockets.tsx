import SectionHeader from "../shared/SectionHeader";
import Container from "../shared/Container";
import PocketCard from "./PocketCard";

const pocketsIcon = [
  {
    img: "/assets/pockets/packets-icons/1-icon.svg",
    description:
      "Scale your business with confidence knowing your app will support it.",
  },
  {
    img: "/assets/pockets/packets-icons/2-icon.svg",
    description:
      "Scale your business with confidence knowing your app will support it.",
  },
  {
    img: "/assets/pockets/packets-icons/3-icon.svg",
    description:
      "Scale your business with confidence knowing your app will support it.",
  },
  {
    img: "/assets/pockets/packets-icons/4-icon.svg",
    description:
      "Scale your business with confidence knowing your app will support it.",
  },
  {
    img: "/assets/pockets/packets-icons/5-icon.svg",
    description:
      "Scale your business with confidence knowing your app will support it.",
  },
];

export default function Pockets() {
  return (
    <section className="py-16 md:py-24">
      <Container className="space-y-12">
        {/* Header */}
        <div className="flex justify-center">
          <SectionHeader
            firstTitle="Live In Your"
            secondTitle="Customer’s Pockets!"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {pocketsIcon.map((pocket, index) => (
            <PocketCard
              key={index}
              img={pocket.img}
              description={pocket.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
