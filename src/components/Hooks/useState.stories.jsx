import React, { useState } from "react";

import { Button } from "./Button";


export default {
  title: "Hooks/useState",
 
};

export const ButtonState = () => {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times!</button>
  )
}