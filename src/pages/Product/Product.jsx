import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

export default function Product() {
  const { id } = useParams();
  const productId = Number(id);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    fetch("/data/products.json", { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error("Failed to load products");
        return r.json();
      })
      .then((data) => {
        setProducts(data);
        setError("");
        setLoading(false);
      })
      .catch((e) => {
        if (e.name === "AbortError") return;
        setError(String(e.message || e));
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const product = useMemo(() => {
    return products.find((p) => Number(p.id) === productId);
  }, [products, productId]);

  const hasSale =
    product?.salePrice != null &&
    Number(product.salePrice) < Number(product.price);

  const discountPercent = useMemo(() => {
    if (!hasSale) return 0;
    return Math.round(
      ((product.price - product.salePrice) / product.price) * 100,
    );
  }, [hasSale, product]);

  if (loading) return <p className="subTitle">Loading...</p>;
  if (error) return <p className="subTitle">Error: {error}</p>;
  if (!product) return <p className="subTitle">Product not found.</p>;

  return (
    <div className="productPage">
      <p className="subTitle">{product.title}</p>

      <section className="productCard">
        <div className="productImageWrapper">
          <img className="productImage" src={product.image} />
          {hasSale && <div className="saleBadge">SALE -{discountPercent}%</div>}
        </div>

        <section className="productInfo">
          <div className="productCategory">Category : {product.category}</div>

          <div className="productPrices">
            {hasSale ? (
              <>
                <span className="oldPrice">€{product.price.toFixed(2)}</span>
                <span className="salePrice">
                  €{product.salePrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="salePrice">€{product.price.toFixed(2)}</span>
            )}
          </div>

          <div className="productDescription">
            Description : <br />
            {product.description}
          </div>

          <div className="productMeta">
            Rating: {product.rating} •{" "}
            {product.inStock ? "In stock" : "Out of stock"}
          </div>
        </section>
      </section>
    </div>
  );
}
