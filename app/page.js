import TaskCard from "./(components)/TaskCard";

// calling api to get all tasks
const getTasks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tasks", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get tasks", error);
  }
};

const Dashboard = async () => {
  const { tasks } = await getTasks();
  const uniqueCategories = [...new Set(tasks?.map(({ category }) => category))];
  // set is going to take all of our results and remove the duplicates

  return (
    <div className="p-5">
      <div>
        {tasks &&
          uniqueCategories?.map((uniqueCtg, ctgIdx) => (
            <div
              key={ctgIdx}
              className="mb-4 shadow-md shadow-slate-600 py-2 px-3 rounded-md"
            >
              <h2>{uniqueCtg}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tasks
                  .filter((task) => task.category === uniqueCtg)
                  .map((filteredTask, _indx) => (
                    <TaskCard id={_indx} key={_indx} task={filteredTask} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Dashboard;
