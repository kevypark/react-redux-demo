import React from "react";
import store from "../store/store.js";

let RenderTodos = props => {
  return (
    <div>
      {console.log("RENDERTODOS PROPS: ", props)}

      <ul>
        {store.getState().todos.map(todo => {
          return <li key={Math.random()}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default RenderTodos;
