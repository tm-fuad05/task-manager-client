import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTasks = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: tasks = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/tasks");
      return data;
    },
  });
  return { tasks, refetch, isLoading };
};

export default useTasks;
