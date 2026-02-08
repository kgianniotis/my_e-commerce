import "./Banner.css";
import Marquee from "react-fast-marquee";

export default function Banner() {
  return (
    <Marquee direction="right" pauseOnHover="true" className="marqueeBanner">
      Free shipping on orders over €50 • New arrivals every week • Exclusive
      Designers •
    </Marquee>
  );
}
