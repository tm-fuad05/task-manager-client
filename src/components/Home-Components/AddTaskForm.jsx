import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import useAuth from "../../hooks/useAuth";
import useTasks from "../../hooks/useTasks";

const AddTaskForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "To-Do",
    timestamp: new Date().toISOString(),
  });
  const { loader } = useAuth();
  const { refetch } = useTasks();

  console.log(formData);

  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title) {
      setError("Title is required");
      return;
    }

    if (formData.title.length > 50) {
      setError("Title must be 50 characters or less");
      return;
    }

    if (formData.description && formData.description.length > 200) {
      setError("Description must be 200 characters or less");
      return;
    }

    // Clear any previous errors
    setError("");

    // Reset form
    setFormData({
      title: "",
      description: "",
      category: "To-Do",
    });

    try {
      const taskData = formData;
      const { data } = await axiosSecure.post("/tasks", taskData);

      if (data.success) {
        refetch();
        onClose();
        Swal.fire({
          title: "Successfully added",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add Task</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium">
              Title *
            </label>
            <input
              w-full
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input w-full focus:outline-none "
              placeholder="Enter task title"
            />
            <span className="text-xs text-gray-500">
              {formData.title.length}/50 characters
            </span>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="input w-full focus:outline-none  h-24 pt-2"
              placeholder="Enter task description"
            />
            <span className="text-xs text-gray-500">
              {formData.description.length}/200 characters
            </span>
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="block text-sm font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input w-full focus:outline-none "
            >
              <option value="To-Do">To-Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
          >
            {loader ? (
              <span className="loading loading-bars loading-sm"></span>
            ) : (
              "Create task"
            )}
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </>
  );
};

export default AddTaskForm;
