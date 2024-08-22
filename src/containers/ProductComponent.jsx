import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.Products);
  console.log("products", products);

  const renderList = products.map((product) => {
    return (
      <Link to={`/product/${product.id}`} key={product.id}>
        <div key={product.id} className="m-3">
          <div className="bg-green-200 rounded-lg shadow-lg h-auto min-h-48 max-h-96 shadow-indigo-100 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex-grow">
              <h2 className="text-lg font-semibold truncate">
                {product.title}
              </h2>
              <h2 className="text-sm font-medium truncate">
                {product.category}
              </h2>
            </div>
            <div className="mt-2 flex justify-center">
              <img
                src={product.image}
                alt="image"
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">{renderList}</div>
    </div>
  );
};

export default ProductComponent;
