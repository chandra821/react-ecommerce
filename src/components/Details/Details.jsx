import React, { useEffect, useState, useContext } from "react";
import "./details.styles.scss";
import { isInCart } from "../../helpers";
import "../single-product/singleproduct.css";

import Layout from "../shared/Layout";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/cart-context";
import AddedToBagMessage from "../single-product/Popupmessage";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// export const id1 = window.location.pathname.split(" ")s;

const Details = () => {
  const [showMessage, setShowMessage] = useState(false);
  const { id } = useParams();
  const { addProduct, cartItems, increase } = useContext(CartContext);

  //   console.log(id1);
  const [data, setData] = useState(null);
  useEffect(() => {
    const apiUrl = `https://dummyjson.com/products/${id}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);
  //   console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  }
  const itemInCart = isInCart(data, cartItems);
  const handleAddToBag = () => {
    setShowMessage(true);

    // Hide the message after a few seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  // const handleClick = () => {
  //   handleAddToBag() && addProduct(data);
  // };

  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={data.images[0]} alt="product" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>TITLE: {data.title}</h3>
            <p>PRICE: ${data.price}</p>
          </div>
          <div className="product-description">
            <p>{data.description}</p>
          </div>
          <div className="add-to-cart-btns">
            {!itemInCart && (
              <button
                className="button is-white nomad-btn"
                id="btn-white-outline"
                onClick={() => addProduct(data) && handleAddToBag()}
              >
                ADD TO CART
                {showMessage && (
                  <AddedToBagMessage
                    data={data}
                    onClose={() => setShowMessage(false)}
                  />
                )}
              </button>
            )}
            {itemInCart && (
              <button
                className="button is-white nomad-btn"
                id="btn-white-outline"
                onClick={() => increase(data)}
              >
                ADD MORE
              </button>
            )}
            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
            >
              <Link to="/checkout" className="checkout">
                PROCEED TO CHECKOUT
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
