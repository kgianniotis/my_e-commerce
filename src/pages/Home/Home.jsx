import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Banner from "../../features/Banner/Banner";
import Promoted from "../../miscIdeas/Promoted/Promoted";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((r) => r.json())
      .then(setProducts)
      .catch((e) => console.error(e));
  }, []);

  const saleItems = useMemo(() => {
    return products.filter(
      (p) => p.salePrice != null && Number(p.salePrice) < Number(p.price),
    );
  }, [products]);

  return (
    <div>
      <section className="welcomeSection">
        <p className="subTitle">Welcome to the Shop</p>
      </section>

      <Banner />

      <div className="catalogArea">
        <p className="catalogButtonTitle">Take a look at the new Catalog!</p>
        <Link to="/Catalog">
          <button className="catalogButton">Go to Catalog</button>
        </Link>
      </div>

      <div className="promotedArea">
        <Promoted saleItems={saleItems} />
      </div>
    </div>
  );
}
