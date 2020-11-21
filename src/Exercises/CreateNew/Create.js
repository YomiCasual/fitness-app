import React, { Component, Fragment} from 'react'


class AddExercise extends Component {

	state= {
		modal: ''
	}
	
	onSubmit = e => {
		e.preventDefault()

		const { title, description, muscles } = this.props.newExercise

		//form Validation
		const regex = /^\S{3}/
		let titleTest = regex.test(title);
		let descTest = regex.test(description)
		let musclesTest = regex.test(muscles)

		

		if (  titleTest && descTest && musclesTest  ) {
      
			let exercise = { }

			if (this.props.editItem) {
				exercise = {
				...this.props.newExercise
				}
			}
			else {
				exercise = {
				...this.props.newExercise,
				id: Math.random()* 1000000
				}
			}

      this.setState({
        modal: 'modal'
      })
			this.props.changeShow()	
			this.props.onFormSubmit(exercise)
		}

		else {
			return
		}

	}

	
	changeClass = () => {
	return this.props.editItem ?  "modal fade show" : "modal fade"

	}

	render() {
		const { onFormSubmit, editItem, changeShow, exercise, handleInputChange } = this.props
		const { title, description, muscles } = this.props.newExercise
 
		return (
	  	<Fragment>

		<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" 
		onClick={changeShow}
		>
		  +
		</button>


		<div className={this.changeClass()}  id="exampleModal" tabIndex="1" role="dialog" 
		>
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLabel">
		        {editItem ? 'Edit Exercise' : 'Add New Exercise'}
		        </h5>
		        <button type="button" className="close" 
		        onClick={changeShow}
		        data-dismiss="modal">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
		        <form>

		        <div className="form-group">
		        <label>name</label>
		        <input 
		        onChange={handleInputChange('title')}
		        value={title}
		        type="text" 
		        className="form-control" 
		        />
		        </div>

		        <div className="form-group">
		        <label>category</label>
		        <select
		        onChange={handleInputChange('muscles')}
		        value={muscles} 
		        className="form-control">
		        <option value="Muscle">Select a Muscle</option>
		        <option value="shoulders">shoulders</option>
		        <option value="chest">chest</option>
		        <option value="arms">arms</option>
		        <option value="back">back</option>
		        <option value="legs">legs</option>
		        </select>
		        </div>

		        <div className="form-group">
		        <label>Description</label>
		        <input 
		        onChange={handleInputChange('description')}
		        value={description}
		        type="text-area" 
		        className="form-control" />
		        </div>



		        </form>
		      </div>
		      <div className="modal-footer">
		        <button type="button" 
		        className="btn btn-secondary" 
		        data-dismiss='modal'
		        onClick={changeShow}
		        >Close</button>

		        <button 
		        onClick={this.onSubmit}
		        type="button" 
		        data-dismiss={this.state.modal}
		        className="btn btn-primary"
		        >   {editItem ? 'Save Edit' : 'Create New'}</button>
		      </div>
		    </div>
		  </div>
		</div>
	  	</Fragment>

	  	)
	}
	 
}


export default AddExercise