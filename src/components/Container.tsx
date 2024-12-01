import React from "react";
import { twMerge } from "tailwind-merge";

type IProp = {
  className?: string;
  children: React.ReactNode;
};
const Container = ({ className, children }: IProp) => {
  const newClassName = twMerge(
    "max-x-auto mx-auto px-24 mt-12 mb-8 md:mb-12 lg:",
    className
  );
  return <div className={newClassName}>{children}</div>;
};

export default Container;
