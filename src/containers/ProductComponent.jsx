import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.Products);
  console.log("products", products);

  const renderList = products.map((product) => {
    return (
      <>
        <div>
          <div key={product.id} className="bg-red-300 m-3 p-2">
            <h2>{product.title}</h2>
            <h2>{product.category}</h2>
            <img src={product.image} alt="image" className="w-8 h-8" />
          </div>
        </div>
      </>
    );
  });
  return (
    <div>
      <h2>Productcomponent</h2>
      <div className="grid grid-cols-4 gap-4">{renderList}</div>
    </div>
  );
};

export default ProductComponent;
