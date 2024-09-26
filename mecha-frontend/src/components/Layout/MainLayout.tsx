import { Outlet } from "react-router-dom";
import Footer from "../sharedComponents/Footer";
import NavBar from "../sharedComponents/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
