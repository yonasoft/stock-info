import React from "react";

type Props = {
  label: string;
  onClick: () => void;
};

const IntervalsButton = ({ label, onClick }: Props) => {
  return (
    <button className="border rounded-2xl p-1 text-sm" onClick={onClick}>
      {label}
    </button>
  );
};

export default IntervalsButton;
