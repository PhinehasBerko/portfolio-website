import React from "react";
import { twMerge } from "tailwind-merge";

type IProp = {
  className?: string;
  children: React.ReactNode;
};
const Container = ({ className, children }: IProp) => {
  const newClassName = twMerge(
    "max-x-auto mx-auto m-0 md:mb-12 bg-gray-950/80 px-2 sm:px-24 py-5 text-white",
    className
  );
  return <div className={newClassName}>{children}</div>;
};

export default Container;
