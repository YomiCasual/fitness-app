import React from 'react';

const LeftPane = ({ exercise }) => {
	const { title, description, muscles } = exercise

		if (Object.keys(exercise).length === 0)  {
		return (
			<div className="left-pane">
			<h2>Welcome </h2>
			<p className="lead">Please Select an Exercise from the left Pane</p>
			</div>
			)
	}
	 
	else {
	    return (
	    	<div className="left-pane">
	    	<h4>{title}</h4>
	    	<small>Muscle: {muscles}</small>
	    	<p className="lead">{description}</p>
	    	</div>
	)
	


	 
}
};



export default LeftPane;
