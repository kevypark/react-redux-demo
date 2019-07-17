import { combineReducers } from 'redux';

// calling the default reducer to create a link
import TodoEntryReducer from './TodoEntryReducer';
import AddTodoReducer from './AddTodoReducer';


const rootReducers = combineReducers({
    // add reducer files references here
    entry: TodoEntryReducer,
    todos: AddTodoReducer
});

export default rootReducers;