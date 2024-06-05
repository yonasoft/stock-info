import React from "react";

type Props = {
  title: string;
  value: string;
};

function InfoCard({ title, value }: Props) {
  return (
    <div className="size-24 lg:size-26 rounded-lg bg-gray-900 flex flex-col items-center justify-center relative p-2 shadow-lg">
      <h1 className="text-xs lg:text-md  font-bold text-slate-300 absolute top-0 mt-4">
        {title}
      </h1>
      <h2 className="text-md lg:text-xl font-bold text-center text-white absolute bottom-1/4">
        {value}
      </h2>
    </div>
  );
}

export default InfoCard;
