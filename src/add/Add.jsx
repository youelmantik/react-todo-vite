import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";
import "./add.css";

const Add = ({ addList, length }) => {
  const [todo, setTodo] = useState("");
  return (
    <div className="add">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todo === "" || todo === null) {
            alert("Todo List cannot be empty");
          } else {
            addList({
              id: length + 1,
              todo: todo,
              status: "list",
            });
          }
          setTodo("");
        }}
      >
        <input type="text" placeholder="Type Your Todo List Here..." value={todo} onChange={(e) => setTodo(e.target.value)}></input>
        <button type="submit">
          <i className="fa fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
};

export default Add;
