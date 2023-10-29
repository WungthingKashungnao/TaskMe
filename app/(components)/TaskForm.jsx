"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TaskForm = ({ task }) => {
  const router = useRouter(); //to route to another page
  const EDITMODE = task._id === "new" ? false : true; //to handle for edit/update or create task mode

  const startingTaskData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not started",
    category: "Hardware Problem",
  };

  //  function to handle form data
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      // updating task data to the Tasks API
      const res = await fetch(`/api/Tasks/${task._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      // if the data is not submitted correctly then throw this error
      if (!res.ok) {
        throw new Error("Failed to create new task");
      }
    } else if (!EDITMODE) {
      // posting form data to the Tasks API
      const res = await fetch("/api/Tasks", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      // if the data is not submitted correctly then throw this error
      if (!res.ok) {
        throw new Error("Failed to create new task");
      }
    }
    router.refresh();
    router.push("/");
  };

  if (EDITMODE) {
    startingTaskData["title"] = task.title;
    startingTaskData["description"] = task.description;
    startingTaskData["priority"] = task.priority;
    startingTaskData["progress"] = task.progress;
    startingTaskData["status"] = task.status;
    startingTaskData["category"] = task.category;
  }

  const [formData, setFormData] = useState(startingTaskData); //state to handle task data

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-full lg:w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        {EDITMODE ? (
          <h3 className="text-center">Upate Your Task</h3>
        ) : (
          <h3 className="text-center">Create Your Task</h3>
        )}
        {/* title */}
        <label>Title</label>
        <input
          className="border-0 outline-none"
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        {/* description */}
        <label>Description</label>
        <textarea
          className="border-0 outline-none resize-none"
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={5}
        />
        {/* category */}
        <label>Category</label>
        <input
          className="border-0 outline-none"
          id="category"
          name="category"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.category}
        />

        {/* priority */}
        <label>Priority</label>
        <div>
          <input
            className="border-0 outline-none"
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            required={true}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>

          <input
            className="border-0 outline-none"
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            required={true}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>

          <input
            className="border-0 outline-none"
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            required={true}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>

          <input
            className="border-0 outline-none"
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            required={true}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>

          <input
            className="border-0 outline-none"
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            required={true}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>

        {/* progress */}
        <label>Progress</label>
        <input
          className="border-0 outline-none"
          id="progress"
          name="progress"
          type="range"
          onChange={handleChange}
          required={true}
          value={formData.progress}
          min={0}
          max={100}
        />

        {/* status */}
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="outline-none"
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>

        {/* submit btn */}
        <input
          type="submit"
          className="btn text-default-text"
          value={EDITMODE ? "Update Task" : "Create Task"}
        />
      </form>
    </div>
  );
};

export default TaskForm;
