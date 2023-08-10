import React, { useContext } from "react";
import Layout from "../../shared/Layout";
import FeaturedProduct from "../../shared/Featured-product";
import { ProductContext } from "../../../context/products-context";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductContext);
  const allProducts = products.map((product) => (
    <FeaturedProduct {...product} key={product.id} />
  ));
  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">Shop</h2>
        <div className="product-list">{allProducts}</div>
      </div>
    </Layout>
  );
};
export default Shop;
