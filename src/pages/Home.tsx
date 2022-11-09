import React, { FC } from "react";
// ui library Ant Design
import { Button } from "antd";
// store
import { testStore } from "../store";

// ----------------------------------------------------------------------

const Home:FC = () => {
  const increment = testStore((state) => state.increment);
  
  return (
    <div>
      我是首页 
      <Button onClick={increment}>add</Button>
    </div>
  )
}

export default Home;