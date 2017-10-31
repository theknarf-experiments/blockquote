import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

const List = ({}, {store}) => {
	return (
		<ul className="list-group">
		  <li className="list-group-header">
			 <input className="form-control" type="text" placeholder="Search" />
		  </li>
		  {
			  store.getState().notes.map( note => 
				  <li key={note.id} className="list-group-item">
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
