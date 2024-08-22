import { useState } from "react";
import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import PagenotFound from "./containers/PagenotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:ProductId" element={<ProductDetails />} />
            <Route path="*" element={<PagenotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
