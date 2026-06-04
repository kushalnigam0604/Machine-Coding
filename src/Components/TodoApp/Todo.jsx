import { Link } from "react-router-dom";
import "./Todo.css";
import { useEffect, useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todos")) ||[]);

  const handleInputData = (e) => {
    setInputData(e.target.value);
  };

  const addTodoFuntion = () => {
    if(!inputData.trim().length){
        return;
    }
    setTodo((prevValue) => [
      ...prevValue,
      { id: todo.length + 1, data: inputData, flag: false },
    ]);
    setInputData("");
  };

  const deleteTodoFunction = (id) => {
    setTodo((prevValue) => {
      return prevValue.filter((item) => item.id !== id);
    });
  };
  const handleCheckbox = (id) => {
    setTodo((prevValue) => {
      return prevValue.map((item) => {
        if (item?.id === id) {
          return { ...item, flag: !item?.flag };
        } else {
          return item;
        }
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todo))
  },[todo])

  return (
    <div>
      <Link to="/" className="problemTabs">
        🔙 Back to Home Page.
      </Link>
      <div className="todoBody">
        <h2>Todo App</h2>
        <div>
          <input
            className="todoInput"
            type="text"
            value={inputData}
            onChange={(e) => handleInputData(e)}
          />
          <button className="todoAddBtn" onClick={() => addTodoFuntion()}>
            Add Todo
          </button>
        </div>
        <div className="todoList">
          {todo?.map((item, index) => {
            return (
              <div key={item?.id} className="todoListItem">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="todoCheckbox"
                  checked={item?.flag}
                  onChange={() => handleCheckbox(item?.id)}
                />
                <span className={item?.flag ? "crossText" : null}>
                  {item?.data}
                </span>
                <span className="editSpanTodo">edit</span>
                <span
                  className="deleteSpanTodo"
                  onClick={() => deleteTodoFunction(item?.id)}
                >
                  delete
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Todo;
