import React, { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const [postData, setPostData] = useState([]);

  const postDataDetails = () => {
    axios.get(``)
    .then((res) => {
      setPostData(res.data.posts);
    });
  };

  useEffect(() => {
    postDataDetails("");
  }, []);

  return (
    <div>
      {postData.map((data,id) => {
        return(
          <div key={id}>
            <div>{data.name}</div>
            <div>{data.price}</div>
            <div>{data.qty}</div>
          </div>
        )
      })}
    </div>
  );
};

export default Post;
