
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../hooks/CartContext";

const Layout = () => {

  return (
      <div className=" bg-white">
      
      <CartProvider>
      <Navbar/> 
      <Outlet/>
      <Footer/>
      </CartProvider>

      </div>
  );
};

export default Layout;