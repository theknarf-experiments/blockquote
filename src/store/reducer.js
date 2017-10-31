import { combineReducers } from 'redux';
import { NoteReducer as notes } from '../actionreducers/notes'; 

export default combineReducers({
	notes
});
