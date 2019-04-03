import { createAction } from 'redux-actions';

const NEW_NOTE = 'NEW_NOTE';
export const NewNoteAction = createAction(NEW_NOTE);

const DELETE_NOTE = 'DELETE_NOTE';
export const DeleteNoteAction = createAction(DELETE_NOTE);

const SELECT_NOTE = 'SELECT_NOTE';
export const SelectNoteAction = createAction(SELECT_NOTE);

const newId = state =>
	state.reduce((pv, cv) => Math.max(pv, cv.id || 0), 0) + 1;

export const NoteReducer = (state = [], action) =>
	action.type == NEW_NOTE ?
		state.concat({...action.payload, id: newId(state)}) :
	action.type == DELETE_NOTE ?
		state.filter(x => x.id == action.payload.id) :
	state;

export const NoteSelected = (state = null, action) =>
	action.type == SELECT_NOTE ?
		action.payload :
	state;

