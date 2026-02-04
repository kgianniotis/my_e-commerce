import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <p className="title">My e-commerce</p>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
        </Routes>
      </main>
    </div>
  );
}
