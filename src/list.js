import React from 'react';
import ReactDOM from 'react-dom';

export default () => {
	return (
		<ul className="list-group">
		  <li className="list-group-header">
			 <input className="form-control" type="text" placeholder="Search for someone" />
		  </li>
		  <li className="list-group-item">
			 <div className="media-body">
				<strong>List item title</strong>
				<p>Lorem ipsum dolor sit amet.</p>
			 </div>
		  </li>
		  <li className="list-group-item">
			 <div className="media-body">
				<strong>List item title</strong>
				<p>Lorem ipsum dolor sit amet.</p>
			 </div>
		  </li>
		</ul>
	);
}
