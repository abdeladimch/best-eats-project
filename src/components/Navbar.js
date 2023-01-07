import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { FaBars, FaUserFriends } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineClose, AiFillHeart } from "react-icons/ai";
import { TbTruck } from "react-icons/tb";
import { MdHelp, MdLocalOffer } from "react-icons/md";
import { ImFolderDownload } from "react-icons/im";

const Navbar = ({ cartItems }) => {
  const [show, setShow] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const { logout } = useAuth0();

  const handleActive = () => {
    setIsButtonActive(!isButtonActive);
  };

  return (
    <header>
      <div className="container flex items-center gap-6 p-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="flex gap-1 items-center">
            <button type="button" onClick={() => setShow(!show)}>
              <FaBars size={23} />
            </button>

            <h1 className="text-xl md:text-2xl">
              Best <span className="font-bold">Eats</span>
            </h1>
          </div>

          <div className="hidden lg:flex gap-0 text-sm bg-gray-200 rounded-full p-1 items-center">
            <button
              type="button"
              className={`p-2 ${!isButtonActive && "btn-active"}`}
              onClick={() => handleActive()}
            >
              Delivery
            </button>
            <button
              type="button"
              className={`p-2 ${isButtonActive && "btn-active"}`}
              onClick={() => handleActive()}
            >
              Pickup
            </button>
          </div>
        </div>

        {/* left side */}

        <div className=" relative">
          <BiSearchAlt2 className="absolute left-3 top-[12px] text-xl cursor-pointer" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search food"
            className=" bg-gray-200 p-3 w-[230px] sm:w-[300px] md:w-[400px] lg:w-[500px] rounded-3xl pl-12 text-sm outline-none "
          />
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            className="hidden md:flex gap-1 items-center bg-black text-white p-2 px-3 rounded-full"
          >
            <BsFillCartFill />
            <span>Cart</span>
          </button>
          {cartItems ? <span>({cartItems})</span> : ""}
        </div>
      </div>

      {show && (
        <>
          <div className="bg-black/80 fixed top-0 left-0 w-full h-screen z-20"></div>
          <div className="bg-white fixed w-[300px] top-0 left-0 h-screen z-20 duration-300 ">
            <div className="flex items-center">
              <button type="button" onClick={() => setShow(!show)}>
                <AiOutlineClose className="absolute top-3 right-4 text-xl" />
              </button>

              <h1 className="text-xl m-2">
                Best <span className="font-bold">Eats</span>
              </h1>
            </div>

            <nav>
              <ul className="text-gray-800 flex flex-col gap-4">
                <li className="flex gap-5 items-center nav-link-hover p-4">
                  <TbTruck /> Orders
                </li>
                <li className="flex gap-5 items-center nav-link-hover p-4">
                  <AiFillHeart /> Favourites
                </li>
                <li className="flex gap-5 items-center nav-link-hover p-4">
                  <BsFillCartFill /> Wallet
                </li>
                <li className="flex gap-5 items-center nav-link-hover p-4">
                  <MdHelp />
                  Help
                </li>
                <li className="flex gap-5 items-center nav-link-hover p-4">
                  <MdLocalOffer />
                  Promotions
                </li>
                <li className="flex gap-5 items-center nav-link-hover p-4">
                  <ImFolderDownload />
                  Best Ones
                </li>
                <li className="flex gap-5 items-center nav-link-hover p-4">
                  <FaUserFriends />
                  Invite Friends
                </li>
              </ul>
              <div className="pt-6 pl-3">
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="py-2 px-3 bg-black rounded-lg text-white"
                >
                  Logout
                </button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
