
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import CartWarning from "../components/CartWarning/CartWarning";

const Layout = () => {
  const { cartItems } = useCart()

  return (
      <div className=" bg-white">
      <CartWarning cartItems={cartItems}/>
      <Navbar/> 
      <Outlet/>
      <Footer/>
      

      </div>
  );
};

export default Layout;