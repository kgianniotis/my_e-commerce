import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>My e-commerce</h1>
      <p>test</p>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
