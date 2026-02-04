// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <p className="subTitle">Welcome to the Shop.</p>

      <div className="catalogArea">
        <p className="catalogButtonTitle">Explore Our Catalog!</p>
        <Link to={`/Catalog`}>
          <button className="catalogButton">Go to Catalog</button>
        </Link>
      </div>
    </div>
  );
}
