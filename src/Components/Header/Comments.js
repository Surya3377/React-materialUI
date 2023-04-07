import React, { useEffect, useState } from "react";
import axios from "axios";

const Comments = () => {
  const [commentsData, setcommentsData] = useState([]);

  const userDataDetails = () => {
    axios.get(`https://dummyjson.com/comments`).then((res) => {
      console.log(res);
      setcommentsData(res.data.comments);
    });
  };

  useEffect(() => {
    userDataDetails("");
  }, []);

  return (
    <div>
      {commentsData.map((data,id) => {
        return(
            <div key={id}>
                 <div>{data.body}</div>
                 <div>{data.postId}</div>
            </div>
        )
      })}
    </div>
  );
};

export default Comments;
