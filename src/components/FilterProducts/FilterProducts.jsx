import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./FilterProducts.css";
import FilterPrice from "./FilterPrice";

const FilterProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = "https://dummyjson.com/products/categories"; // Replace with your actual API URL

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <div class="row">
        <h1>Category</h1>
        {data.map((item, index) => (
          <>
            <button class="button">
              <Link class="link" to={`/products/${item}`}>
                {item}
              </Link>
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default FilterProducts;
