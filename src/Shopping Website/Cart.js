import React from "react";

const Cart = ({ cartData }) => {
  return (
    <div>
      {cartData.map((data,id) => {
        return (
          <div key={id}>
            <li>{data.title}</li>
            <li>{data.price}</li>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
