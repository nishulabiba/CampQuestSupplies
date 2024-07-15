import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";

const Navbar = () => {
  const {cartItems} = useCart()
  const nav = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/manage">Manage</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <ShoppingCartIcon className=" w-12 tooltip text-base-300" />
      </li>

      <li>
        <NavLink to="/t" className="">
          <HeartIcon className="w-6  text-red-500" />
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="footer footer-center bg-yellow-500 text-black text-md font-semibold p-4">
        <aside>
          <p>Free delivery for small packages purchased online over $20! </p>
        </aside>
      </div>
      <div className="navbar bg-slate-100 text-black">
        <div className="flex gap-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden -ms-[50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>
        </div>
          <NavLink to="/" className="btn btn-ghost flex navbar-center text-2xl italic font-serif w-12 md:w-[300px]">
            
            <img className=" md:w-[60px] w-1/6 mb-2" src="/c.png" alt="" />
            <h1 className="-mt-6 text-lg md:text-2xl">
              Camp<span className="text-blue-800 md:text-3xl">Quest</span><br />
              Supplies
            </h1>
          </NavLink>
        </div>

          <div className=" md:navbar-end md:dropdown dropdown-end md:flex md:justify-end ms-[30%] hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <ShoppingCartIcon className=" w-9 text-base-300" />
                <span className="badge badge-sm bg-blue-400 border-none text-white indicator-item">
                  {cartItems?.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-slate-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{cartItems?.length} Items</span>
                <span className="text-info">Subtotal: </span>
                <div className="card-actions">
                  <Link to="/cart" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
            
          </div><NavLink to="/" className="ms-6">
              <HeartIcon className="w-10 tooltip text-red-500" />
            </NavLink>
      </div>
      <div className="md:navbar bg-white md:flex flex-col-reverse hidden">
        
        <div className="navbar-center hidden md:flex md:justify-center">
          <ul className="menu menu-horizontal px-1 text-base-200">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/manage">Manage</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
