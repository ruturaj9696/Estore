import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProducts } from "../redux/actions/ProductActions";

const ProductDetails = () => {
  // in the state.product the product is the key from the reducer (index.js) file
  const product = useSelector((state) => state.product);
  console.log(product);
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
  }, [ProductId]);

  return (
    <div className="flex justify-center">
      <div className="bg-red-400">
        <div>{product.title}</div>
        <div>{product.category}</div>
      </div>
      <div>
        <img src={product.image} alt="image" className="w-24 h-24 " />
      </div>
    </div>
  );
};

export default ProductDetails;
