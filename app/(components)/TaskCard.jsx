import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TaskCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex justify-between mb-3">
        <PriorityDisplay />
        <DeleteBlock />
      </div>
      <h4>Task Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        This is the task description! Please do this task
      </p>
      <div className="flex justify-between mt-2">
        <div className="flex flex-col">
          <p className="text-xs  my-1">10/22/23 11:17</p>
          <ProgressDisplay />
        </div>
        <StatusDisplay />
      </div>
    </div>
  );
};

export default TaskCard;
