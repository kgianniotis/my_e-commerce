import { Outlet } from "react-router-dom";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="appShell">
      <Header />
      <main className="appMain">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
