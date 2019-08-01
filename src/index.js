import React from "react";
import ReactDOM from "react-dom";
import TodoListContainer from "./containers/TodoListContainer";
import RenderTodosContainer from "./containers/RenderTodosContainer";

import store from "./store/store.js";
import { Provider } from "react-redux";


class App extends React.Component {
  render() {
    return (
      <div>
        {/* {console.log("STORE: ", store.getState())} */}


        <TodoListContainer />
        <RenderTodosContainer />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App name="Kevin" />
  </Provider>,
  mountNode
);
