import React from "react";


let RenderTodos = props => {
  return (
    <div>
      {/* {console.log("RENDER TODOS PROPS: ", props)} */}

      <ul>
        {props.todos.map(todo => {
          return <li key={Math.random()}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default RenderTodos;
