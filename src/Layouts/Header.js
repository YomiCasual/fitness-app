import React from 'react'
import AddExercise from '../Exercises/CreateNew/Create'

const Header = ({ onFormSubmit, editItem, changeShow, exercise, handleInputChange, newExercise }) => {
	return (
		<div>
		<nav className="navbar navbar-collapse navbar-dark bg-dark">
		<a className="navbar-brand"> Fitness App </a>

		<AddExercise
		newExercise={newExercise}
		handleInputChange={handleInputChange}
		exercise={exercise}
		changeShow={changeShow}
		editItem={editItem}
		onFormSubmit={onFormSubmit}
		 />
		</nav>
		</div>
		)

}

export default Header