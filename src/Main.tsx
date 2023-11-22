import { Footer } from "views/parts/footer/Footer";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="bg-black h-full">
      <div className="content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
