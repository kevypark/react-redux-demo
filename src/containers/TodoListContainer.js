import { connect } from "react-redux";
import TodoList from "./../components/TodoList.jsx";
import HandleTodoEntry from "./../actions/HandleTodoEntry.js";
import HandleAddTodo from "./../actions/HandleAddTodo.js";



var mapStateToProps = store => ({
  entry: store.entry,
  todos: store.todos
});

var mapDispatchToProps = dispatch => ({
  handleTodoEntry: event => {
    dispatch(HandleTodoEntry(event));
  },
  handleAddTodo: todo => {
    dispatch(HandleAddTodo(todo));
  }
});

var TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
