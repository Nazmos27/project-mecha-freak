import Footer from "../sharedComponents/Footer";
import NavBar from "../sharedComponents/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      outlet 
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
