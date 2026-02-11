import { useMemo } from "react";
import "./Promoted.css";
import ProductCard from "../../features/ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";

export default function Promoted() {
  const { products, loading, error } = useProducts();

  const saleItems = useMemo(() => {
    return products.filter(
      (p) => p.salePrice != null && Number(p.salePrice) < Number(p.price)
    );
  }, [products]);

  if (loading) return <p className="subTitle">Loading...</p>;
  if (error) return <p className="subTitle">Error: {error}</p>;

  return (
    <div>
      <p className="subTitle">Take a look at some items on sale!</p>

      <ul className="promotedList">
        {saleItems.map((p) => (
          <li key={p.id} className="promotedItem">
            <ProductCard p={p} showSale />
          </li>
        ))}
      </ul>
    </div>
  );
}
