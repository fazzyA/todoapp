import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const TodoList = ({ list }) => {
  const handlechange = () => {
    console.log("im in change");
  };
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>
            {item}
            <Button>Edit</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
