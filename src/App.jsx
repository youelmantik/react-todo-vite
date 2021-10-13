import { useState } from "react";
import React from "react";
import Header from "./header/Header";
import Add from "./add/Add";
import List from "./list/List";
import "./App.css";

function App() {
  let [lists, setList] = useState([]);
  const addList = (list) => {
    if (isExist(list.todo)) {
      alert("Todo List is already made");
    } else {
      setList([...lists, list]);
    }
  };

  function isExist(data) {
    let result = false;
    lists.forEach((list) => {
      if (list.todo === data) {
        result = true;
      }
    });
    return result;
  }

  const deleteList = (index) => {
    let newList = [];
    lists.forEach((list) => {
      if (list.id !== index) {
        newList.push({
          id: list.id,
          todo: list.todo,
          status: list.status,
        });
      }
    });
    setList(newList);
  };
  const changeStatus = (index) => {
    let newList = [];
    lists.forEach((list) => {
      if (list.id === index) {
        newList.push({
          id: list.id,
          todo: list.todo,
          status: "list done",
        });
      } else {
        newList.push({
          id: list.id,
          todo: list.todo,
          status: list.status,
        });
      }
    });
    setList(newList);
  };
  return (
    <div className="container">
      <Header />
      <Add addList={addList} length={Object.keys(lists).length} />
      <List lists={lists} deleteList={deleteList} changeStatus={changeStatus} />
    </div>
  );
}

export default App;
