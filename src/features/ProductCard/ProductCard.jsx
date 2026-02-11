import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ p, showSale = false }) {
  const hasSale =
    showSale && p.salePrice != null && Number(p.salePrice) < Number(p.price);

  const discountPercent = hasSale
    ? Math.round(((p.price - p.salePrice) / p.price) * 100)
    : 0;

  return (
    <Link className="productCardLink" to={`/product/${p.id}`}>
      <div className="productCard">
        <div className="productCardImgWrap">
          <img className="productCardImg" src={p.image} alt={p.title} loading="lazy" />
          {hasSale && (
            <div className="productCardBadge">SALE -{discountPercent}%</div>
          )}
        </div>

        <div className="productCardInfo">
          <div className="productCardTitle">{p.title}</div>
          <div className="productCardCategory">{p.category}</div>

          {hasSale ? (
            <div className="productCardPrices">
              <span className="productCardOld">€{p.price.toFixed(2)}</span>
              <span className="productCardSale">€{p.salePrice.toFixed(2)}</span>
            </div>
          ) : (
            <div className="productCardPrices">
              <span className="productCardSale">€{p.price.toFixed(2)}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
