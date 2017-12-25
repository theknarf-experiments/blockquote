import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { SelectNoteAction } from '../actionreducers/notes';
import { connect } from 'react-redux';

const List = ({notes, current_note, dispatch}) => {
	return <ul className="list-group">
	  <li className="list-group-header">
		 <input className="form-control" type="text" placeholder="Search" />
	  </li>
	  {
		  notes.map( note => 
			  <li
			  		key={note.id}
					className={'list-group-item'+(note.id==current_note?' active':'')}
					onClick={() => dispatch(SelectNoteAction(note.id))}
					>
				 <div className="media-body">
					<strong>List item title {note.id}</strong>
					<p>Lorem ipsum dolor sit amet.</p>
				 </div>
			  </li>)
	  }
	</ul>;
}

export default connect(state => {
	return {
		notes: state.notes,
		current_note: state.current_note
	}
})(List); 
