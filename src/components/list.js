import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { SelectNoteAction } from '../actionreducers/notes';

const List = ({}, {store}) => {

	const {notes, current_note} = store.getState();

	const selectNote = (id) => {
		store.dispatch(SelectNoteAction(id));
	};

	return (
		<ul className="list-group">
		  <li className="list-group-header">
			 <input className="form-control" type="text" placeholder="Search" />
		  </li>
		  {
			  notes.map( note => 
				  <li key={note.id} className={'list-group-item'+(note.id==current_note?' active':'')} onClick={() => selectNote(note.id)}>
					 <div className="media-body">
						<strong>List item title {note.id}</strong>
						<p>Lorem ipsum dolor sit amet.</p>
					 </div>
				  </li>)
		  }
		</ul>
	);
}

List.contextTypes = {
	store: PropTypes.object
};

export default List;
