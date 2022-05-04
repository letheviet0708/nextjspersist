import React from "react";
import { useGlobalStore } from "./../utils/StoreApi";

export const Layout = () => {
  const { count, message, increment, decrement, reset } = useGlobalStore();

  return (
    <div>
      {count}
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}> Reset</button>
      {message}
    </div>
  );
};

export default Layout;
