import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions";

const ActionCreators = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ul>
        <div>
          {data.map((redux,id) => {
            return (
              <div key={id} style={{"border":"2px solid white", "color" : "white","backgroundColor":"black","textAlign":"center","width":"50%","marginLeft":"350px","marginBottom":"20px"}}>
                <div>Post :{redux.id}</div>
                <div>{redux.title}</div>
                <div>{redux.body}</div>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default ActionCreators;
