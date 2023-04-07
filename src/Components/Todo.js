import React, { useEffect, useState } from "react";
import axios from "axios";

const Todo = () => {
  const [todoData, settodoData] = useState([]);

  const userDataDetails = () => {
    axios.get(`https://dummyjson.com/todos`).then((res) => {
      console.log(res);
      settodoData(res.data.todos);
    });
  };

  useEffect(() => {
    userDataDetails("");
  }, []);

  return (
    <div>
      {todoData.map((data,id) => {
        return(
            <div key={id}>
                 <div>{data.todo}</div>
                 <div>{data.completed}</div>
            </div>
        )
      })}
    </div>
  );
};

export default Todo;
