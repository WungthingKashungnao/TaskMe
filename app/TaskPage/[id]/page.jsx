import TaskForm from "@/app/(components)/TaskForm";
import React from "react";

// function calling api to get task start
const getTaskById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tasks/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get task.");
  }
  return res.json();
};
// function calling api to get task end

const TaskPage = async ({ params }) => {
  // for edit mode start
  const EDITMODE = params.id === "new" ? false : true;
  let updateTaskData = {};
  if (EDITMODE) {
    updateTaskData = await getTaskById(params.id);
    updateTaskData = updateTaskData.foundTask;
  } else {
    updateTaskData = {
      _id: "new",
    };
  }
  // for edit mode end
  return (
    <div>
      <TaskForm task={updateTaskData} />
    </div>
  );
};

export default TaskPage;
