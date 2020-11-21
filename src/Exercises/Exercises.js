import React from "react";
import RightPane from "./RightPane";
import LeftPane from "./LeftPane";

const Exercises = ({
  categories,
  category,
  findExercise,
  exercise,
  handleDelete,
  handleEdit
}) => {
  return (
    <div className="row col-12">
      <div className="left col-6">
        <RightPane
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          categories={categories}
          category={category}
          findExercise={findExercise}
        />
      </div>

    
      <div className="col-6">
        <LeftPane exercise={exercise} />
      </div>
    </div>
  );
};

export default Exercises;
