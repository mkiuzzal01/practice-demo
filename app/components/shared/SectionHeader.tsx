interface Props {
  firstTitle: string;
  secondTitle: string;
  thirdTitle?: string;
}

export default function SectionHeader({
  firstTitle,
  secondTitle,
  thirdTitle,
}: Props) {
  return (
    <div className="flex flex-row items-baseline gap-2 flex-wrap">
      <h1 className="text-4xl font-bold text-neutral-900">{firstTitle}</h1>

      <h1 className="text-4xl font-bold text-gradient">{secondTitle}</h1>
      <h1 className="text-4xl font-bold text-neutral-900">{thirdTitle}</h1>
    </div>
  );
}
