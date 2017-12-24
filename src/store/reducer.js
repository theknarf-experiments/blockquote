import { combineReducers } from 'redux';
import { NoteReducer as notes, NoteSelected as current_note } from '../actionreducers/notes'; 

export default combineReducers({
	notes,
	current_note
});
