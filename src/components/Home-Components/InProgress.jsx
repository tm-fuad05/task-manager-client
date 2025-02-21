import React from "react";
import useTasks from "../../hooks/useTasks";

const InProgress = () => {
  const { tasks } = useTasks();

  const inProgress = tasks.filter((t) => t.category === "In Progress");
  console.log(inProgress);
  return (
    <div>
      <h3 className="text-2xl text-center font-bold mb-4">In Progress</h3>
    </div>
  );
};

export default InProgress;
