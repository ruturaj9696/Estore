import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);
  const { id, title, category } = products;
  return (
    <div>
      <h2>Productcomponent</h2>
      <div>{id}</div>
      <div>{title}</div>
    </div>
  );
};

export default ProductComponent;
