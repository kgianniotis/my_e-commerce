import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Catalog.css";

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
      <p className="subTitle">Explore our Catalog</p>

      <input
        className="searchBar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title or category..."
      />

      <div className="itemsHome">
        {filtered.map((p) => (
          <Link className="itemLinks" key={p.id} to={`/product/${p.id}`}>
            <div className="individualItems">
              <div>
                <img
                  className="itemImages"
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                />
              </div>

              <div className="itemInfo">
                <div className="itemTitle">{p.title}</div>
                <div className="itemCategory">{p.category}</div>
                <div className="itemPrice">€{p.price.toFixed(2)}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
