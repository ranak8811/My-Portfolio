import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <nav className=" sticky top-0 z-10 bg-opacity-50 backdrop-blur-3xl">
        <Navbar></Navbar>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
