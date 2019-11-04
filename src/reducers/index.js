import {
   combineReducers
} from 'redux';
import toDoList from './toDoList';
import navigation from './navigation';

export default combineReducers({
   toDoList,
   navigation
})