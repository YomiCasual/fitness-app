import React,{Fragment} from 'react';



const RightPane = ({ categories, category, findExercise, handleDelete, handleEdit }) => {

    return (
    <div className="right-pane">
    {categories.map(([group, exercises]) => {

        if (category === 'all' || group === category) {
        return (
        <Fragment key={group}>
        <h4 className="title">{group}</h4>
        <ul className="list">
             {exercises.map(exercise => (
                 <li className="list-item" 
                 key={exercise.id}
                 
                 >

                 <span
                 onClick={() => findExercise(exercise.id)}
                 >{exercise.title}</span>

                 
                 <span className="icon-delete"
                 onClick={() => { handleDelete(exercise.id)}}
                 >
                 <i className="fas fa-trash"></i>
                 </span>

                  <span className="icon-edit"
                  onClick={() => handleEdit(exercise.id)}
                 >
                  <i className="fas fa-edit"></i>
                 </span>


                 </li>
                 ))}
        </ul>
        </Fragment>
            )
    }
	
    })}
    </div>	
    )
};



export default RightPane;