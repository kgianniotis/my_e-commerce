// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Banner from "../../features/Banner/Banner";

export default function Home() {
  return (
    <div>
      <p className="subTitle">Welcome to the Shop.</p>

      <Banner />

      <div className="catalogArea">
        <p className="catalogButtonTitle">Take a look at the new Catalog!</p>
        <Link to={`/Catalog`}>
          <button className="catalogButton">Go to Catalog</button>
        </Link>
      </div>
    </div>
  );
}
