import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/ProductActions";

const ProductDetails = () => {
  // in the state.product the product is the key from the reducer (index.js) file
  const product = useSelector((state) => state.product);
  const disapatch = useDispatch();
  const { ProductId } = useParams();
  const fetchproductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${ProductId}`)
      .catch(() => {
        console.log("Error");
      });

    const payload = response.data;
    disapatch(selectedProducts(payload));
  };

  useEffect(() => {
    if (ProductId && ProductId !== "") {
      fetchproductDetails();
    }
    return () => {
      disapatch(removeSelectedProducts());
    };
  }, [ProductId]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div className="text-center font-bold">Loading...</div>
      ) : (
        <div className="md:flex justify-center items-center mx-3 p-3">
        <div className="bg-green-100 md:h-48 md:w-48 p-3 rounded-lg flex-1 mb-4 md:mb-0">
          <div>{product.title}</div>
          <div className="font-bold">{product.category}</div>
          <div className="font-semibold">{product.description}</div>
        </div>
        <div className="flex justify-center md:ml-4">
          <img src={product.image} alt="image" className="w-full max-w-xs h-auto md:w-48 md:h-48 object-cover rounded-lg" />
        </div>
      </div>
      
      )}
    </div>
  );
};

export default ProductDetails;
