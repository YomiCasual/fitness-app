import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css'


import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import Exercises from './Exercises/Exercises'
import {exercises, Muscles} from './store'

class App extends Component {

	state = {
		test: '',
		exercises,
		editItem: false,
		category: 'all',
		exercise: {},
		newExercise: {
			title: '',
			description: '',
			muscles: '',
			id: ""
		}
	}

	handleInputChange = (name) => e => {
		this.setState({
			newExercise: {
				...this.state.newExercise,
				[name]: e.target.value
			}
		})
	}


	getCategories = () => {

		const [all, ...muscles ] = Muscles

		let array = muscles.reduce((exercises, exercise) => {

		exercises[exercise] = []

		return exercises
		 }, { })

		
		let categoriesReduce = this.state.exercises.reduce((exercises, exercise) => {
		const { muscles } = exercise
		exercises[muscles].push(exercise)
		return exercises
		}, array)

		let categories = Object.entries(categoriesReduce)

		return categories
	}

	handleChange = (e) => {
		let category = e.target.dataset.id
		this.setState({
			category
		})
	}

	findExercise = (id) => {
		let exercise = this.state.exercises.find(exercise => exercise.id === id)
		this.setState({
			exercise
		})
	}

	onFormSubmit = exercise => {

		if (this.state.editItem) {
		let exercises = this.state.exercises.filter(ex => ex.id !== exercise.id)

		this.setState({
			exercises: [...exercises, exercise],
			exercise: exercise,
			newExercise: {
			title: '',
			description: '',
			muscles: '',
			id: ""
		}
		})
		}

		else {

		this.setState(({exercises}) => ({
			exercises: [...exercises, exercise],
			exercise: exercise,
			newExercise: {
			title: '',
			description: '',
			muscles: '',
			id: ""
		}
		}))	

		}
		
	}

	handleDelete = id => {

		this.setState(({exercises}) => ({
			exercises: exercises.filter(ex => ex.id !== id),
			exercise: {}
		}))
	}

	handleEdit = (id) => {

		let exercises = [...this.state.exercises]

		let exercise = {...exercises.find(ex => ex.id === id)}

		this.setState({
			newExercise: exercise,
			editItem: true
		})
	}

	changeShow = () => {
		this.setState(({editItem}) => ({
			editItem: false
		}))
	}

	render() {
		
		const categories = this.getCategories(),
		   { category, exercise, editItem, newExercise } = this.state

		   console.log(exercise)

		return(
			<Fragment>

			<Header
			newExercise={newExercise}
			handleInputChange={this.handleInputChange}
			exercise={exercise}
			changeShow={this.changeShow}
			editItem={editItem}
			onFormSubmit={this.onFormSubmit}
			 />

			<Exercises
			handleEdit={this.handleEdit}
			handleDelete={this.handleDelete} 
			findExercise={this.findExercise}
			exercise={exercise}
			categories={categories}
			category={category}
			/>

			<Footer handleChange={this.handleChange}/>
			</Fragment>
			)
	}

} 


export default App