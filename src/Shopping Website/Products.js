import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cart from "./Cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const shoppingCart = () => {
    axios.get(`http://fakestoreapi.com/products`).then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    shoppingCart("");
  });

  const addToCart = (data) => {
    setCartData([...cartData, { ...data, count: 1 }]);
  };
  const isProductInCart = (data) => {
    return cartData.find((cp) => cp.id === data.id);
  };

  const getCartProductCount = (data) => {
    let x = cartData.find((cp) => cp.id === data.id);
    return x ? x.count : 0;
  };

  const incCount = (data) => {
    const temp = cartData.map((cp) => {
      if (cp.id === data.id) {
        cp.count = cp.count + 1;
      }
      return cp;
    });
    setCartData(temp);
  };
  const decCount = (data) => {
    const temp = cartData.map((cp) => {
      if (cp.id === data.id) {
        cp.count = cp.count - 1;
      }
      return cp;
    });
    setCartData(temp);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const getTotal = () => {
    return cartData.reduce((a, p) => {
      return a + p.price * p.count;
    }, 0);
  };
  return (
    <div>
      <div>
        <button onClick={toggleCart}>View Cart</button>
        {showCart && (
          <div>
            <button onClick={toggleCart}>Close</button>
            <Cart cartData={cartData} />
            <h1>Total : {getTotal()}</h1>
          </div>
        )}
      </div>

      <div>
        {products.length > 0 &&
          products.map((data, id) => {
            return (
              <div key={id}>
                <img
                  src={data.image}
                  alt=""
                  style={{ height: "250px", width: "250px" }}
                />
                <li>{data.title}</li>
                <li>{data.price}</li>
                {isProductInCart(data) && (
                  <>
                    <button onClick={() => incCount(data)}>+</button>
                    <b>{getCartProductCount(data)}</b>
                    <button onClick={() => decCount(data)}>-</button>
                  </>
                )}
                {!isProductInCart(data) && (
                  <button onClick={() => addToCart(data)}>Add To Cart</button>
                )}
                <li>{data.description}</li>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
