import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  //Subcscribing to the Store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-white shadow-lg m-2 rounded-lg flex-col md:flex-row items-center">
      {/* <div className="logo-container mb-4 md:mb-0 md:ml-4 md:flex md:items-center items-center justify-center bg-red-300">
        <img className="w-[100px]" src={LOGO_URL}></img>
        <h1 className="font-semibold">Parcel Delights</h1>
      </div> */}
      <div className="logo-container mb-4 md:mb-0 md:ml-4 flex flex-col md:flex-row items-center justify-center">
        <img
          className="w-[100px] mb-2 md:mb-0 md:mr-4"
          src={LOGO_URL}
          alt="Logo"
        />
        <h1 className="font-semibold">Parcel Delights</h1>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 md:space-x-4 space-x-2">
          {/* <li className="px-4">
                        ᯤ<sup>{onlineStatus ? "🟢" : "🔴"} </sup>
                    </li> */}
          <li className="px-4 hover:text-orange-600 font-semibold">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="px-4 hover:text-orange-300 font-semibold">
                        <Link to="/about">About</Link>
                    </li> 
                    <li className="px-4 hover:text-orange-300 font-semibold">
                        <Link to="/contact">Contact</Link>
                    </li> */}
          <li className="px-4 hover:text-orange-600 font-semibold">
            <Link to="/cart">
              Cart<sup>[{cartItems.length}]</sup>
            </Link>
          </li>
          <button
            className="pl-4  hover:text-orange-600 font-semibold"
            // onClick={() => {
            //     btnNameReact === "Login"
            //         ? setBtnNameReact("Logout")
            //         : setBtnNameReact("Login");
            // }}
          >
            {/* {btnNameReact} */}
            <Link to="/login">Login{onlineStatus ? "🟢" : "🔴"}</Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
