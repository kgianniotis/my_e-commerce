import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/data/products.json")
      .then((r) => r.json())
      .then(setProducts)
      .catch((e) => console.error(e));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    );
  }, [products, query]);

  return (
    <div>
      <h2>Products</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title or category..."
        style={{
          padding: 10,
          width: "min(420px, 100%)",
          margin: "12px 0 18px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {filtered.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div style={{ aspectRatio: "1/1", background: "#f4f4f4" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div style={{ padding: 12 }}>
                <div style={{ fontWeight: 700 }}>{p.title}</div>
                <div style={{ opacity: 0.7, fontSize: 14 }}>{p.category}</div>
                <div style={{ marginTop: 6 }}>€{p.price.toFixed(2)}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
