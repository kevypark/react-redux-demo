import React from "react";
import store from "../store/store.js";

let TodoList = props => {
  return (
    <div>
      {console.log("TODOLIST PROPS: ", props)}

      <input
        value={props.todoEntry}
        onChange={e => {
          props.handleTodoEntry(e.target.value);
        }}
      />

      <button
        onClick={e => {
          e.preventDefault();
          props.handleAddTodo(props.entry);
        }}
      >
        Add todo!
      </button>
    </div>
  );
};

export default TodoList;
