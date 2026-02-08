import "./Promoted.css";
import { Link } from "react-router-dom";

export default function Promoted({ saleItems = [] }) {
  return (
    <div>
      <p className="subTitle">Take a look at some items on sale!</p>

      <ul className="promotedList">
        {saleItems.map((p) => {
          const discountPercent = Math.round(
            ((p.price - p.salePrice) / p.price) * 100,
          );

          return (
            <li key={p.id} className="promotedItem">
              <Link to={`/product/${p.id}`} className="promotedLink">
                <div className="imageWrapper">
                  <img src={p.image} alt={p.title} />

                  <div className="saleBadge">SALE -{discountPercent}%</div>
                </div>

                <div className="info">
                  <div>{p.title}</div>

                  <div className="prices">
                    <span className="oldPrice">€{p.price.toFixed(2)}</span>
                    <span className="salePrice">€{p.salePrice.toFixed(2)}</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
