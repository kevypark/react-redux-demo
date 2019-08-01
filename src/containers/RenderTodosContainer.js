import { connect } from "react-redux";
import RenderTodos from "./../components/RenderTodos.jsx";

var mapStateToProps = store => ({
  todos: store.todos
});

var mapDispatchToProps = dispatch => ({
  //boilerplate example
  // handleTodoEntry: event => {
  //   dispatch(HandleTodoEntry(event));
  // }
});

var RenderTodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderTodos);

export default RenderTodosContainer;
