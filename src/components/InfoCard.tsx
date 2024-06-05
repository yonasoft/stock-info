import React from "react";

type Props = {
  title: string;
  value: string;
};

function InfoCard({ title, value }: Props) {
  return (
    <div className="w-48 h-36 rounded-lg bg-gray-800 m-2 flex flex-col items-center justify-center relative p-4">
      <h1 className="text-sm font-bold text-slate-300 absolute top-0 mt-6">{title}</h1>
      <h2 className="text-2xl font-bold text-center text-white mt-2">
        {value}
      </h2>
    </div>
  );
}

export default InfoCard;
