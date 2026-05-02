import Image, { StaticImageData } from "next/image";
import verticalLine from "@/public/assets/pockets/varticalLine.svg";

interface Props {
  img: string | StaticImageData;
  description: string;
  showDivider?: boolean;
}

export default function PocketCard({
  img,
  description,
  showDivider = true,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full">
      {/* Icon */}
      <div className="shadow p-5 rounded-lg">
        {typeof img === "object" ? (
          <Image
            width={40}
            height={40}
            src={img as StaticImageData}
            alt="icon"
          />
        ) : (
          <Image width={40} height={40} src={img as string} alt="icon" />
        )}
      </div>

      {showDivider && (
        <div className="h-10 flex items-center">
          <Image src={verticalLine} alt="divider" />
        </div>
      )}

      <p className="text-center font-bold text-[#0F004A]">{description}</p>
    </div>
  );
}
