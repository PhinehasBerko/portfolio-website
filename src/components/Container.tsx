import React from "react";
import { twMerge } from "tailwind-merge";

type IProp = {
  className?: string;
  children: React.ReactNode;
};
const Container = ({ className, children }: IProp) => {
  const newClassName = twMerge(
    "max-x-auto mx-auto bg-gray-950/80 px-20 sm:px-24 py-5 text-white flex items-center justify-between",
    className
  );
  return <div className={newClassName}>{children}</div>;
};

export default Container;
