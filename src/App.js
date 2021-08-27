import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";

const App = () => {
  const todoList = [
    { msg: "Hit The Gym", isDone: false },
    { msg: "Pay Bills", isDone: false },
    { msg: "Meet George", isDone: true },
    { msg: "Buy Eggs", isDone: false },
  ];

  const [myTodo, setTodo] = useState(todoList);

  const takeIt = (item) => {
    console.log("This is App", item);
    setTodo((prevTodo) => {
      return [...prevTodo, { msg: item, isDone: false }];
    });
  };

  const deleted = (dlt) => {
    const newTodo = myTodo.filter((val, index) => {
      return index !== dlt;
    });
    setTodo(newTodo);
  };

  const checkComplete = (check) => {
    let pTodo = [...myTodo];
    let cTodo = myTodo[check];

    if (cTodo.isDone) {
      cTodo.isDone = false;
    } else {
      cTodo.isDone = true;
    }

    pTodo[check] = cTodo;
    setTodo(pTodo);
  };
  return (
    <>
      <Header giveMe={takeIt} />
      <Todo list={myTodo} deleteRequest={deleted} check={checkComplete} />
    </>
  );
};

export default App;
