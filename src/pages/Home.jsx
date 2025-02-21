import React from "react";
import useTasks from "../hooks/useTasks";
import TaskCategory from "../components/Shared/TaskCategory";

const Home = () => {
  const { tasks } = useTasks();
  console.log(tasks);
  const to_do = tasks.filter((t) => t.category === "To-Do");
  const inProgress = tasks.filter((t) => t.category === "In Progress");
  const done = tasks.filter((t) => t.category === "Done");
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-8 lg:px-12 gap-8 lg:gap-12 my-10">
        {/* ToDO */}
        <TaskCategory
          categoryTitle={"TO-DO"}
          category={to_do}
          fillColor={"red-600"}
          textColor={"red-800"}
          bgColor={"red-100"}
        />
        {/* In Progress */}
        <TaskCategory
          categoryTitle={"In Progress"}
          category={inProgress}
          fillColor={"orange-400"}
          textColor={"orange-800"}
          bgColor={"orange-100"}
        />
        {/* Done */}
        <TaskCategory
          categoryTitle={"Done"}
          category={done}
          fillColor={"green-600"}
          textColor={"green-800"}
          bgColor={"green-100"}
        />
      </div>
    </div>
  );
};

export default Home;
