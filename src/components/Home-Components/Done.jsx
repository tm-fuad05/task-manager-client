import React from "react";
import useTasks from "../../hooks/useTasks";

const Done = () => {
  const { tasks } = useTasks();
  console.log(tasks);
  const done = tasks.filter((t) => t.category === "Done");

  return (
    <div>
      <h3 className="text-2xl text-center font-bold mb-4">Done</h3>
    </div>
  );
};

export default Done;
