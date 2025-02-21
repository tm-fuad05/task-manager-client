import React from "react";
import useTasks from "../../hooks/useTasks";
import { FiPlus } from "react-icons/fi";
import AddTaskForm from "./AddTaskForm";
import UpdateTask from "./UpdateTask";
import { HiDotsVertical } from "react-icons/hi";

const TODO = () => {
  const { tasks } = useTasks();
  console.log(tasks);
  const to_do = tasks.filter((t) => t.category === "To-Do");
  console.log(to_do);
  return (
    <div>
      <h3 className="text-2xl text-center font-bold mb-4">To-Do</h3>
      <div>
        {to_do.map((t) => (
          <div
            key={t._id}
            className="rounded-lg border border-gray-200 bg-white p-4 mb-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{t.title}</h3>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 text-xs text-red-800 bg-red-100 rounded-full`}
                >
                  {t.category}
                </span>
                <button
                  onClick={() =>
                    document.getElementById(`${t._id}`).showModal()
                  }
                  className="btn btn-sm btn-circle cursor-pointer border-none duration-200"
                >
                  <HiDotsVertical />
                </button>
                <dialog id={t._id} className="modal">
                  <UpdateTask
                    task={t}
                    onClose={() => document.getElementById(`${t._id}`).close()}
                  />
                </dialog>
              </div>
            </div>

            <p className="mb-4 text-gray-600 text-sm">{t.description}</p>

            <div className="text-xs text-gray-500">{t.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TODO;
