import React, { useState } from "react";
import DeleteBtn from "./DeleteBtn";

const Delete = () => {
  const [addData, setAddData] = useState("");
  const [todoData, setTodoData] = useState([]);

  const addValue = (event) => {
    setAddData(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    const newTodos = [...todoData,addData]
    setTodoData(newTodos)
    console.log(addData)
  };


  const deleteHandler = (indexValue) => {
    const newTodos = todoData.filter((todoData,index) => index !== indexValue)
    setTodoData(newTodos)
  }
  return (
    <div>
      <div>
        <input type="text" value={addData} onChange={addValue} />
        <button onClick={addHandler}>ADD</button>
      </div>
          <div>
            <DeleteBtn  todoData= {todoData} deleteHandler= {deleteHandler}/>
          </div>
    </div>
  );
};

export default Delete;
