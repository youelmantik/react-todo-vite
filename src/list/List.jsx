import "./list.css";

const List = ({ lists, deleteList, changeStatus }) => {
  let completedTodos = [];
  let todos = [];
  lists.map((list) => {
    if (list.status.includes("done")) {
      completedTodos.push(list);
    } else {
      todos.push(list);
    }
  });
  if (completedTodos) {
    return (
      <div className="list-container">
        {todos.map((todo, index) => (
          <div className={todo.status} key={todo.id}>
            <p className="todo" id={index} key={todo.id}>
              {todo.todo}
            </p>
            <div className="button">
              <i className="fa fa-minus" key={todo.id} onClick={() => deleteList(todo.id)}></i>
              <i className="fa fa-check" onClick={() => changeStatus(todo.id)}></i>
            </div>
          </div>
        ))}
        {completedTodos.map((todo, index) => (
          <div className={todo.status} key={todo.id}>
            <p className="todo" key={todo.id}>
              {todo.todo}
            </p>
            <div className="button">
              <i className="fa fa-minus" key={todo.id} onClick={() => deleteList(todo.id)}></i>
              <i className="fa fa-check" onClick={() => changeStatus(todo.id)}></i>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="list-container">
        {todos.map((todo) => (
          <div className={todo.status} key={todo.id}>
            <p className="todo" key={todo.id}>
              {todo.todo}
            </p>
            <div className="button">
              <i className="fa fa-minus" key={todo.id} onClick={() => deleteList(todo.id)}></i>
              <i className="fa fa-check" onClick={() => changeStatus(todo.id)}></i>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default List;
