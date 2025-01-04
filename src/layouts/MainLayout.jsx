import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
