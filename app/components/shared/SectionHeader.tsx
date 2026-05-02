interface Props {
  firstTitle: string;
  secondTitle: string;
}

export default function SectionHeader({ firstTitle, secondTitle }: Props) {
  return (
    <div className="flex flex-row items-baseline gap-2 flex-wrap">
      <h1 className="text-4xl font-bold text-neutral-900">{firstTitle}</h1>

      <h1
        className="text-4xl font-bold 
        bg-linear-to-r from-[#FE3A81] via-[#624BF5] 
        bg-clip-text text-transparent"
      >
        {secondTitle}
      </h1>
    </div>
  );
}
