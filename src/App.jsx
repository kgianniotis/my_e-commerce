import { Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";

export default function App() {
  return (
    <div>
      <p className="title">My e-commerce</p>

      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="product/:id" element={<Product />} />
            {/* <Route path="cart" element={<Cart />} />
            <Route path="sales" element={<Sales />} /> */}
          </Route>
        </Routes>
      </main>
    </div>
  );
}
