import { createAction } from 'redux-actions';

export const NEW_NOTE = 'NEW_NOTE';
export const NewNoteAction = createAction(NEW_NOTE);

export const DELETE_NOTE = 'DELETE_NOTE';
export const DeleteNoteAction = createAction(DELETE_NOTE);
