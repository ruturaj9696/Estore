import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/ProductActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch(() => {
        console.log("Error fetching products");
      });
    const payload = response.data;
    dispatch(setProducts(payload));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products", products);
  return (
    <div>
      <div>ProductListing</div>
    </div>
  );
};

export default ProductListing;
