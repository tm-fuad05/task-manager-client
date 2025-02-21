import React from "react";
import TODO from "../components/Home-Components/TODO";
import InProgress from "../components/Home-Components/InProgress";
import Done from "../components/Home-Components/Done";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-8 lg:px-12 gap-8 lg:gap-12 my-10">
        <TODO />
        <InProgress />
        <Done />
      </div>
    </div>
  );
};

export default Home;
