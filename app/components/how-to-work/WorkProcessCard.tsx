import Image from 'next/image';

interface IWorkProcessCard {
  title: string;
  desc: string;
  image: string;
}

export default function WorkProcessCard({
  title,
  desc,
  image,
}: IWorkProcessCard) {
  return (
    <div className="flex flex-col items-center text-center max-w-sm mx-auto">
      <div className="shadow p-5 rounded-full">
        <Image src={image} alt={title} width={80} height={80} />
      </div>

      <h2 className="text-2xl pt-6 font-bold">{title}</h2>

      <p className="pt-4 text-base text-gray-600">{desc}</p>
    </div>
  );
}
