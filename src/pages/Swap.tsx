import React, { FC } from "react";
// store
import { testStore } from "../store";

// ----------------------------------------------------------------------

const Swap:FC = () => {
  const count = testStore((state) => state.count);

  return <div>我是Swap 来自store:{count}</div>;
}

export default Swap;