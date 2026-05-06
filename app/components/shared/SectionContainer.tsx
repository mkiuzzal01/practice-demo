import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}
export default function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return <div className={`px-[135px] ${className}`}>{children}</div>;
}
