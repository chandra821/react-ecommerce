import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { ProductContext } from "../../context/products-context";
import { CartContext } from "../../context/cart-context";
import { isInCart } from "../../helpers";
import Layout from "../shared/Layout";
import "./single-product.styles.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./singleproduct.css";
import AddedToBagMessage from "./Popupmessage";

const SinglProduct = ({ match, history: { push } }) => {
  const [showMessage, setShowMessage] = useState(false);

  const { products } = useContext(ProductContext);
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));
    // if product does not exist, redirec to shop page
    if (!product) {
      return push("/shop");
    }
    setProduct(product);
  }, [id, product, push, products]);
  // while we check the product
  if (!product) {
    return null;
  }

  const { imageUrl, title, price, description } = product;

  const itemInCart = isInCart(product, cartItems);

  const handleAddToBag = () => {
    // Your logic to add the item to the bag goes here...
    // For the sake of this example, let's just show the message immediately.
    setShowMessage(true);

    // Hide the message after a few seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={imageUrl} alt="product" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
          <div className="add-to-cart-btns">
            {!itemInCart && (
              <>
                <button
                  className="button is-white nomad-btn"
                  id="btn-white-outline"
                  onClick={() => handleAddToBag()}
                >
                  ADD TO CART
                  {showMessage && (
                    <AddedToBagMessage
                      data={product}
                      onClose={() => setShowMessage(false)}
                    />
                  )}
                </button>
              </>
            )}
            {itemInCart && (
              <button
                className="button is-white nomad-btn data-addtocart"
                id="btn-white-outline"
                onClick={() => increase(product)}
              >
                ADD MORE
              </button>
            )}
            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
            >
              <Link className="link2" to="/checkout">
                PROCEED TO CHECKOUT
              </Link>
            </button>
          </div>
          <div className="product-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default withRouter(SinglProduct);
