import Image, { StaticImageData } from 'next/image';
import verticalLine from '@/public/assets/pockets/varticalLine.svg';

interface Props {
  img: string | StaticImageData;
  description: string;
}

export default function PocketCard({ img, description }: Props) {
  return (
    <div className="w-[196px] flex flex-col items-center text-center gap-4">
      {/* Icon */}
      <div className="w-[100px] h-[100px] flex items-center justify-center shadow rounded-[16px]">
        <Image src={img} alt="icon" />
      </div>

      {/* Connector line */}
      <div className="flex justify-center">
        <Image src={verticalLine} alt="divider" />
      </div>

      {/* Text */}
      <p className="text-[16px] font-semibold text-[#0F004A] leading-snug">
        {description}
      </p>
    </div>
  );
}
