import { isInCart } from "../../helpers";
import { CartContext } from "../../context/cart-context";
import { withRouter } from "react-router-dom";

import React, { useEffect, useState, useContext } from "react";
import "./products.css";

import Layout from "../shared/Layout";
import { useParams, useHistory } from "react-router-dom";
import FilterProducts from "../FilterProducts/FilterProducts";

const Products = () => {
  const history = useHistory();
  const { slug } = useParams();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://dummyjson.com/products/category/${slug}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, [slug]);
  // console.log(window.location.pathname);

  const handleFilter = () => {
    const filteredData = data.filter((item) => {
      const itemPrice = parseFloat(item.price);
      console.log(itemPrice);
      return (
        itemPrice >= parseFloat(minPrice) && itemPrice <= parseFloat(maxPrice)
      );
    });
    console.log(filteredData);
    setData(filteredData);
  };
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div class="grid-container">
        <div class="card card1">
          <h1>Price Range</h1>
          <div>
            <input
              className="input3"
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              className="input3"
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <button className="btns" onClick={handleFilter}>
              Apply Filter
            </button>
          </div>
          <FilterProducts />
        </div>

        <div class="card card2">
          {data.map((item, index) => (
            <>
              <div className="card11">
                <div onClick={() => history.push(`/details/${item.id}`)}>
                  <img
                    src={item.images[0]}
                    alt="Avatar"
                    style={{ width: "100%", height: "200px" }}
                  />
                </div>
                <div className="container1">
                  <h3>
                    <b>{item.title.substring(0, 19)}</b>
                  </h3>
                  <p>{item.description.substring(0, 45)}</p>
                  <p>PRICE: ${item.price}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(Products);
