import React from "react";

const StatusDisplay = ({ status }) => {
  // get color based on status
  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-200";
        return color;
      case "started":
        color = "bg-yellow-200";
        return color;
      case "not started":
        color = "bg-red-200";
        return color;
    }
    return color;
  };
  return (
    <div
      className={`flex justify-center items-center rounded-full px-2 py-1  text-xs  font-semibold text-gray-700 cursor-pointer ${getColor(
        status
      )}`}
    >
      {status}
    </div>
  );
};

export default StatusDisplay;
