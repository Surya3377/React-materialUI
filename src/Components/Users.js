import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [usersData, setUsersData] = useState([]);

  const userDataDetails = () => {
    axios.get(`https://dummyjson.com/users`).then((res) => {
      console.log(res);
      setUsersData(res.data.users);
    });
  };

  useEffect(() => {
    userDataDetails("");
  }, []);

  return (
    <div>
      {usersData.map((data,id) => {
        return(
          <div key={id}>
              <div>{data.id}</div>
              <div>{data.firstName}</div>
              <div>{data.lastName}</div>
        </div>
        )
      })}
       
      </div>
          
  );
};

export default Users;
