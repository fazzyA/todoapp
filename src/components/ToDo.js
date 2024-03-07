import React, { useState } from "react";
import { Button, Container, FormControl, Input } from "@chakra-ui/react";
import TodoList from "./TodoList";
const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, settodoList] = useState([]);
  // ["first", "sec122", "third"]

  const handleTodo = () => {
    console.log("im in handle todo", todo);
    settodoList([...todoList, todo]);
    setTodo("");
  };
  //   const handleEdit = (id, newValue) => {
  //     // [{id:1, value:"first"}, {id:1, value:"sec"}]
  //     const list = todoList;
  //     const item = list.find((item) => item.id === id);
  //     item.value = newValue;
  //     list.map((item) => {
  //       if (item.id === id) {
  //         item.value = newValue;
  //       }
  //       return item;
  //     });
  //     console.log(list, "list");
  //     todoList([...list]);
  //   };
  return (
    <Container style={{ marginBottom: "100px" }}>
      <Input
        placeholder="Enter todo"
        width="auto"
        size="md"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <Button onClick={handleTodo}>Add</Button>
      <TodoList list={todoList} />
    </Container>
  );
};

export default ToDo;
