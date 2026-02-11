import { useMemo, useState } from "react";
import "./Catalog.css";
import SearchBar from "../../features/searchBar/SearchBar";
import ProductCard from "../../features/ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";

export default function Catalog() {
  const { products, loading, error } = useProducts();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [products, query]);

  if (loading) return <p className="subTitle">Loading...</p>;
  if (error) return <p className="subTitle">Error: {error}</p>;

  return (
    <div>
      <p className="subTitle">Explore our Catalog</p>

      <div className="searchBar">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search by title or category..."
        />
      </div>

      <div className="itemsHome">
        {filtered.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
