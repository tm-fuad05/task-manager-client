import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-manager-server-topaz.vercel.app",
});

const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;
