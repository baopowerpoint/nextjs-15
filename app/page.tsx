import React from "react";

import Hello from "@/components/Hello";

const Home = () => {
  console.log("what am i doing here");
  return (
    <div>
      <h1 className="text-3xl font-black text-white"> Home</h1>
      <Hello />
    </div>
  );
};

export default Home;
