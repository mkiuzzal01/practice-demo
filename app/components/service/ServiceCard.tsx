import Image, { StaticImageData } from 'next/image';

interface ServiceCardProps {
  icon: StaticImageData;
  title: string;
}

export default function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 w-fit">
      <Image src={icon} alt={title} />
      <p className="whitespace-nowrap">{title}</p>
    </div>
  );
}
