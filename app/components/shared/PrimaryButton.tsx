
interface IPrimaryButton {
  title: string;
  className?: string;
  onClick?: () => void;
}

export default function PrimaryButton({
  title,
  className,
  onClick,
}: IPrimaryButton) {
  return (
    <button onClick={onClick} className={`${className} btn-primary`}>
      {title}
    </button>
  );
}
