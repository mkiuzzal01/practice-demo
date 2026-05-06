import React from 'react';

interface IContainer {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: IContainer) {
  return (
    <div className={`max-w-[1440px] mx-auto px-2 lg:px-0 ${className}`}>
      {children}
    </div>
  );
}
