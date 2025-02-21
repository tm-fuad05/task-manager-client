import React from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { GoDotFill } from "react-icons/go";
import UpdateTask from "../Home-Components/UpdateTask";
import { HiDotsVertical } from "react-icons/hi";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useTasks from "../../hooks/useTasks";

const TaskCategory = ({
  category,
  fillColor,
  textColor,
  bgColor,
  categoryTitle,
}) => {
  const { refetch } = useTasks();
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/tasks/${id}`);

      if (data.success) {
        refetch();
        Swal.fire({
          title: "Deleted",
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-blue-200/80 p-4 h-fit rounded-lg">
      <h3 className="text-2xl text-center font-bold mb-4 flex items-center justify-center gap-1">
        <GoDotFill className={`text-4xl text-${fillColor}`} /> {categoryTitle} (
        {category.length})
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {category.map((t) => (
          <div
            key={t._id}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{t.title}</h3>

              <span
                className={`px-3 py-1 text-xs text-${textColor} bg-${bgColor} rounded-full`}
              >
                {t.category}
              </span>
            </div>

            <p className="mb-4 text-gray-600 text-sm">{t.description}</p>

            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500">{t.timestamp}</div>
              <div className="dropdown dropdown-top dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-sm btn-circle cursor-pointer border-none duration-200"
                >
                  <HiDotsVertical />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-fit p-2 shadow"
                >
                  <li>
                    <a
                      onClick={() =>
                        document.getElementById(`${t._id}`).showModal()
                      }
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => handleDelete(`${t._id}`)}
                      className="text-red-500"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
              <dialog id={t._id} className="modal">
                <UpdateTask
                  task={t}
                  onClose={() => document.getElementById(`${t._id}`).close()}
                />
              </dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCategory;
