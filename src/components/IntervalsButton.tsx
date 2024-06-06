import React from "react";

type Props = {
  label: string;
  onClick: () => void;
};

//Button for selecting intervals
const IntervalsButton = ({ label, onClick }: Props) => {
  return (
    <button className="border rounded-2xl p-1 text-xs md:text-md" onClick={onClick}>
      {label}
    </button>
  );
};

export default IntervalsButton;
