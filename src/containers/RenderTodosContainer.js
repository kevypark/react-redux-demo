import { connect } from "react-redux";
import RenderTodos from "./../components/RenderTodos.jsx";

var mapStateToProps = state => ({
  todos: state.todos
});

var mapDispatchToProps = dispatch => ({
  //example
  // handleTodoEntry: event => {
  //   dispatch(HandleTodoEntry(event));
  // }
});

var RenderTodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderTodos);

export default RenderTodosContainer;
